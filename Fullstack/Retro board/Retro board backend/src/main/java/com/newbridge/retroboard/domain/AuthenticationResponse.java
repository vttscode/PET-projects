package com.newbridge.retroboard.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
@AllArgsConstructor
public class AuthenticationResponse {
    private final String token;
    private final UserTao user;

}
