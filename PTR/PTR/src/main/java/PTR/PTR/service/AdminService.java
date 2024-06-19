package PTR.PTR.service;

import PTR.PTR.model.Teacher;
import PTR.PTR.model.User;
import PTR.PTR.repository.AdminRepository;
import PTR.PTR.repository.TeacherRepository;
import PTR.PTR.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {
    AdminRepository adminRepository;
    TeacherRepository teacherRepository;
    UserRepository userRepository;

    public AdminService(AdminRepository adminRepository, TeacherRepository teacherRepository, UserRepository userRepository) {
        this.adminRepository = adminRepository;
        this.teacherRepository = teacherRepository;
        this.userRepository = userRepository;
    }

    public String grantTeacher(User user){
        if (teacherRepository.findByUser(user)!=null){
            return "이미 권한이 부여되었습니다.";
        }
        Teacher teacher = new Teacher();
        teacher.setUser(user);
        teacher.setPrice(0);
        teacherRepository.save(teacher);
        return teacher.getUser().getUserId();
    }

}
