package com.newbridge.retroboard.dao;

import com.newbridge.retroboard.dao.entities.AuthUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthUserDao extends JpaRepository<AuthUser, Long> {
    Optional<AuthUser> findByUsername(String username);
//    AuthUser findByUsername(String username);
    boolean existsByUsername(String username);
    void deleteByUsername(String username);
}
