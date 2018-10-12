package com.jk.service;

import com.jk.model.User;

import java.util.List;

public interface UserService {
    List<User> queryUser();

    void addUser(User user);

    User editUser(String userId);

    void updateUser(User user);

    void deleteUser(User user);
}
