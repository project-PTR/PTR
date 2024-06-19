package PTR.PTR.service;

import PTR.PTR.model.*;
import PTR.PTR.repository.LectureCategoryRepository;
import PTR.PTR.repository.LectureRepository;
import PTR.PTR.repository.NotificationRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class LectureService {
    LectureRepository lectureRepository;
    NotificationService notificationService;
    LectureCategoryRepository lectureCategoryRepository;

    public LectureService(LectureRepository lectureRepository, NotificationService notificationService, LectureCategoryRepository lectureCategoryRepository) {
        this.lectureRepository = lectureRepository;
        this.notificationService = notificationService;
        this.lectureCategoryRepository = lectureCategoryRepository;
    }

    public Lecture createLecture(Lecture lecture){
        lecture.setCreatedAt(LocalDateTime.now());
        notificationService.lectureNotification(lecture.getTeacher());
        return lectureRepository.save(lecture);
    }

    public List<Lecture> findTeacherLecture(Teacher teacher){
        return lectureRepository.findByTeacher(teacher);
    }



    public List<Lecture> searchLecture(String search){
        return lectureRepository.findAll().stream()
                .filter(l->l.getLectureName().contains(search) ||l.getDescription().contains(search)).collect(Collectors.toList());
    }

    public List<Lecture> findPriceLecture(int minPrice, int maxPrice){
        return lectureRepository.findAll().stream()
                .filter(l->l.getPrice()>=minPrice && l.getPrice()<=maxPrice).collect(Collectors.toList());
    }

    public String saveLectureCategory(List<LectureCategory> lectureCategories){
        if (!lectureCategoryRepository.findByLecture(lectureCategories.getFirst().getLecture()).isEmpty()){
            lectureCategoryRepository.deleteAll(lectureCategoryRepository.findByLecture(lectureCategories.getFirst().getLecture()));
        }
        lectureCategoryRepository.saveAll(lectureCategories);
        return "카테고리가 저장됨";
    }
    public String deleteLecturerCategory(Lecture lecture){
        if (!lectureCategoryRepository.findByLecture(lecture).isEmpty()){
            lectureCategoryRepository.deleteAll(lectureCategoryRepository.findByLecture(lecture));
        }
        return "카테고리가 삭제됨";
    }
    public List<LectureCategory> findLectureCategory(Lecture lecture){
        return lectureCategoryRepository.findByLecture(lecture);
    }
    public List<Lecture> findLectureByCategory(Category category){
        return lectureCategoryRepository.findByCategory(category)
                .stream().map(LectureCategory::getLecture).collect(Collectors.toList());
    }
}
