package PTR.PTR.service;

import PTR.PTR.model.Teacher;
import PTR.PTR.repository.TeacherRepository;
import org.springframework.stereotype.Service;

@Service
public class TeacherService {
    TeacherRepository teacherRepository;

    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    public Teacher changeTeacher(Teacher teacher){
        return teacherRepository.save(teacher);
    }

    public Teacher getTeacherById(long id){
        return teacherRepository.findById(id).get();
    }
}
