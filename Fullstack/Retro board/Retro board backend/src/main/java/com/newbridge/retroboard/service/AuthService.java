package com.newbridge.retroboard.service;

import com.newbridge.retroboard.domain.AuthenticationRequest;
import com.newbridge.retroboard.domain.AuthenticationResponse;

import java.util.List;

public interface AuthService {

    AuthenticationResponse authenticate(AuthenticationRequest authReq);
    List<String> getAuthorities (String jwtToken);
}
