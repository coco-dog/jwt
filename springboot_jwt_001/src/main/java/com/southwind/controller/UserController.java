package com.southwind.controller;

import com.southwind.entity.User;
import com.southwind.util.JwtUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class UserController {

    private final String USERNAME = "admin";
    private final String PASSWORD = "123123";

    @GetMapping("/login")
    public User login(User user){
        if(USERNAME.equals(user.getUsername()) && PASSWORD.equals(user.getPassword())){
            //添加token
            user.setToken(JwtUtil.createToken());
            return user;
        }
        return null;
    }

    @GetMapping("/checkToken")
    public Boolean checkToken(HttpServletRequest request){
        String token = request.getHeader("token");
        return JwtUtil.checkToken(token);
    }

}
