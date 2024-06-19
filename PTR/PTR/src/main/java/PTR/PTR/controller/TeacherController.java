package PTR.PTR.controller;

import PTR.PTR.model.Teacher;
import PTR.PTR.service.TeacherService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeacherController {
    TeacherService teacherService;

    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }
    // 강사의 1:1훈련 가격 수정
    @PostMapping("changeTeacherPrice")
    public ResponseEntity<Teacher> changeTeacherPrice(@RequestBody Teacher teacher){
        return new ResponseEntity<>(teacherService.changeTeacher(teacher), HttpStatus.OK);
    }
}
