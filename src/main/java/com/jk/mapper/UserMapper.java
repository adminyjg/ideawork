package com.jk.mapper;

import com.jk.model.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper {
    List<User> queryUser();

    void addUser(@Param("user") User user);

    User editUser(String userId);

    void updateUser(@Param("user") User user);

    void deleteUser(@Param("user") User user);
}
