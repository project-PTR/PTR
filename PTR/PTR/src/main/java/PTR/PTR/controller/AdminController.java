package PTR.PTR.controller;

import PTR.PTR.model.Teacher;
import PTR.PTR.model.User;
import PTR.PTR.service.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class AdminController {
    AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("grantTeacher")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<String> grantTeacher(@RequestBody User user){
        return new ResponseEntity<>(adminService.grantTeacher(user),
                HttpStatus.OK);

    }

}
