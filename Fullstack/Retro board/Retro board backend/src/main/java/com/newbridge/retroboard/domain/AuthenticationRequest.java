package com.newbridge.retroboard.domain;

import lombok.Data;

@Data
public class AuthenticationRequest {
    String username;
    String password;
}
