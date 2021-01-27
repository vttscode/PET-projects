package com.newbridge.retroboard.controllers;

import com.newbridge.retroboard.domain.AuthenticationRequest;
import com.newbridge.retroboard.domain.AuthenticationResponse;
import com.newbridge.retroboard.domain.TempRetVal;
import com.newbridge.retroboard.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @Secured("ROLE_ADMIN")
    @GetMapping("/test-admin")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public TempRetVal testAdminPermission() {
        return TempRetVal
                .builder()
                .retval("admin")
                .build();
    }

    @Secured("ROLE_USER")
    @GetMapping("/test-user")
    public TempRetVal testUserPermission() {
        return new TempRetVal("user");
    }

    // authorization
    @GetMapping("/auth")
    public ResponseEntity<List<String>> getTokenAuthorities(HttpServletRequest request) {
        return ResponseEntity.ok(authService.getAuthorities(
                        request.getHeader("Authorization")
                ));
    }

    // authentication
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest authReq) {
        return ResponseEntity.ok(authService.authenticate(authReq));
    }
}
