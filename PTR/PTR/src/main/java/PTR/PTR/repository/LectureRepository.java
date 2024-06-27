package PTR.PTR.repository;

import PTR.PTR.model.Category;
import PTR.PTR.model.Lecture;
import PTR.PTR.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LectureRepository extends JpaRepository<Lecture, Long> {
    List<Lecture> findByTeacher(Teacher teacher);

    List<Lecture> findByLectureNameContainingOrTeacher_User_UserNameContaining(Object o, String query);

    List<Lecture> findByLectureNameContaining(String query);

    List<Lecture> findByTeacher_User_UserNameContaining(String query);
}
