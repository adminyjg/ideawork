package com.jk.controller;


import com.jk.model.User;
import com.jk.service.UserService;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("user")
public class UserController {

        @Autowired
        private UserService userService;


        //查询
        @RequestMapping("queryUser")
        public String queryUser(Model model){
                List<User> list = userService.queryUser();
                model.addAttribute("list", list);
                return "userList";
        }

        //跳转到新增页面
        @RequestMapping("toAddUser")
        public String toAddUser(){
                return "addUser";
        }

        //新增
        @RequestMapping("addUser")
        public String addUser(User user){
                userService.addUser(user);
                return "redirect:/user/queryUser";
        }

        //回显
        @RequestMapping("editUser")
        public String editUser(String userId,Model model){
                User user = userService.editUser(userId);
                model.addAttribute("user", user);
                return "edit";
        }

        //修改
        @RequestMapping("updateUser")
        public String updateUser(User user){
                userService.updateUser(user);
                return "redirect:/user/queryUser";
        }

        //删除
        @RequestMapping("deleteUser")
        public String deleteUser(User user){
                userService.deleteUser(user);
                return "redirect:/user/queryUser";
        }

}
