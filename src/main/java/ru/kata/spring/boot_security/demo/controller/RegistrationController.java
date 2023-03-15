package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.entity.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

@Controller
@RequestMapping()
public class RegistrationController {
    private UserService userService;
    private RoleService roleService;
    @Autowired
    public RegistrationController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }
    @GetMapping("/registration")
    public String registrationPage(@ModelAttribute("user") User user, Model model) {
        model.addAttribute("roles", roleService.getRoles());
        userService.getAllUsers();
        roleService.getRoles();
        return "registration";
    }

    @PostMapping("/registration")
    public String perfomRegistration(@ModelAttribute("user") User user) {
        userService.saveUser(user);
        return "redirect:/login";
    }
}
