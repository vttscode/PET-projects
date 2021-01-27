//package com.newbridge.retroboard;
//
//import com.newbridge.retroboard.dao.entities.AuthUser;
//import com.newbridge.retroboard.dao.entities.AuthRole;
//import com.newbridge.retroboard.service.AuthUserService;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Component;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Component
//@Slf4j
//@RequiredArgsConstructor
//public class InitDatabase implements CommandLineRunner {
//
//    private final AuthUserService authUserService;
//    private final PasswordEncoder encoder;
//
//    @Override
//    public void run(String... args) throws Exception {
//        AuthRole userAuthRole = new AuthRole();
//        userAuthRole.setRole("ROLE_USER");
//        AuthRole adminAuthRole = new AuthRole();
//        adminAuthRole.setRole("ROLE_ADMIN");
//
//
//        AuthUser authUser = new AuthUser();
//        authUser.setUsername("neo@neo.neo");
//        authUser.setPassword(encoder.encode("neo"));
//        authUser.setName("NAME1");
//        authUser.setNote("USER");
//        authUser.setAuthRoles(List.of(userAuthRole));
//        authUser.setNonLocked(true);
//        authUser.setActive(true);
//        authUserService.addAuthUser(authUser);
//
//        authUser = new AuthUser();
//        authUser.setUsername("Jhonny Silver head");
//        authUser.setPassword(encoder.encode("2077"));
//        authUser.setName("NAME2");
//        authUser.setNote("ADMIN");
//        AuthRole userAuthRole1 = new AuthRole();
//        userAuthRole1.setRole("ROLE_USER");
//        List<AuthRole> list = new ArrayList<>();
//        list.add(userAuthRole1);
//        list.add(adminAuthRole);
//
//        authUser.setAuthRoles(list);
////        authUser.setAuthRoles(List.of(userAuthRole1, adminAuthRole));
//        authUser.setNonLocked(true);
//        authUser.setActive(true);
//        authUserService.addAuthUser(authUser);
//
//
//        authUser = new AuthUser();
//        authUser.setUsername("tada");
//        authUser.setPassword("adat");
//        authUser.setName("name3");
//        authUser.setNote("no note");
//        AuthRole userAuthRole2 = new AuthRole();
//        userAuthRole2.setRole("ROLE_USER");
//        authUser.setAuthRoles(List.of(userAuthRole2));
//        authUser.setNonLocked(true);
//        authUser.setActive(true);
//        authUserService.addAuthUser(authUser);
//
//        authUser = new AuthUser();
//        authUser.setUsername("tada1");
//        authUser.setPassword("adat1");
//        authUser.setName("another user");
//        authUser.setNote("no note");
//        AuthRole userAuthRole3 = new AuthRole();
//        userAuthRole3.setRole("ROLE_USER");
//        authUser.setAuthRoles(List.of(userAuthRole3));
//        authUser.setNonLocked(true);
//        authUser.setActive(true);
//        authUserService.addAuthUser(authUser);
//
//        log.info("\n\ncommand line runner finished\n\n");
//    }
//}
