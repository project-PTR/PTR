package PTR.PTR.service;

import PTR.PTR.model.*;
import PTR.PTR.repository.LectureCategoryRepository;
import PTR.PTR.repository.LectureRepository;
import PTR.PTR.repository.NotificationRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
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

    public List<Lecture> findTeacherLectureReversed(Teacher teacher){
        return lectureRepository.findByTeacher(teacher).reversed();
    }



    public List<Lecture> searchLecture(Map<String, Object> criteria) {
        List<Lecture> lectures = lectureRepository.findAll();

        String searchType = (String) criteria.get("searchType");
        String keyword = (String) criteria.get("keyword");
        List<String> categories = (List<String>) criteria.get("categories");
        String uploadDate = (String) criteria.get("uploadDate");
        String startDate = (String) criteria.get("startDate");
        String endDate = (String) criteria.get("endDate");
        String buy = (String) criteria.get("buy");
        String price = (String) criteria.get("price");
        String order = (String) criteria.get("order");

        if (searchType != null && keyword != null) {
            if ("lectureName".equals(searchType)) {
                lectures = lectures.stream()
                        .filter(lecture -> lecture.getLectureName().contains(keyword))
                        .collect(Collectors.toList());
            } else if ("teacherName".equals(searchType)) {
                lectures = lectures.stream()
                        .filter(lecture -> lecture.getTeacher().getUser().getUserName().contains(keyword))
                        .collect(Collectors.toList());
            }
        }

        if (categories != null && !categories.isEmpty()) {
            lectures = lectures.stream()
                    .filter(lecture -> categories.contains(lecture.getCategory()))
                    .collect(Collectors.toList());
        }

        if (uploadDate != null && !"전체".equals(uploadDate)) {
            LocalDate now = LocalDate.now();
            switch (uploadDate) {
                case "오늘":
                    lectures = lectures.stream()
                            .filter(lecture -> lecture.getCreatedAt().toLocalDate().isEqual(now))
                            .collect(Collectors.toList());
                    break;
                case "이번 주":
                    lectures = lectures.stream()
                            .filter(lecture -> lecture.getCreatedAt().toLocalDate().isAfter(now.minusWeeks(1)))
                            .collect(Collectors.toList());
                    break;
                case "이번 달":
                    lectures = lectures.stream()
                            .filter(lecture -> lecture.getCreatedAt().toLocalDate().isAfter(now.minusMonths(1)))
                            .collect(Collectors.toList());
                    break;
                case "올해":
                    lectures = lectures.stream()
                            .filter(lecture -> lecture.getCreatedAt().toLocalDate().isAfter(now.minusYears(1)))
                            .collect(Collectors.toList());
                    break;
                case "직접 선택":
                    LocalDate start = startDate != null ? LocalDate.parse(startDate) : null;
                    LocalDate end = endDate != null ? LocalDate.parse(endDate) : null;
                    if (start != null && end != null) {
                        lectures = lectures.stream()
                                .filter(lecture -> {
                                    LocalDate uploadDateValue = lecture.getCreatedAt().toLocalDate();
                                    return (uploadDateValue.isEqual(start) || uploadDateValue.isAfter(start)) &&
                                            (uploadDateValue.isEqual(end) || uploadDateValue.isBefore(end));
                                })
                                .collect(Collectors.toList());
                    }
                    break;
            }
        }

        if (buy != null && !"전체".equals(buy)) {
            boolean isPurchased = "구매".equals(buy);
            lectures = lectures.stream()
                    .filter(lecture -> lecture.isPurchased() == isPurchased)
                    .collect(Collectors.toList());
        }

        if (price != null && !"전체".equals(price)) {
            switch (price) {
                case "무료":
                    lectures = lectures.stream()
                            .filter(lecture -> lecture.getPrice() == 0)
                            .collect(Collectors.toList());
                    break;
                case "1개 이하":
                    lectures = lectures.stream()
                            .filter(lecture -> lecture.getPrice() <= 1)
                            .collect(Collectors.toList());
                    break;
                case "2개 이하":
                    lectures = lectures.stream()
                            .filter(lecture -> lecture.getPrice() <= 2)
                            .collect(Collectors.toList());
                    break;
                case "3개 이하":
                    lectures = lectures.stream()
                            .filter(lecture -> lecture.getPrice() <= 3)
                            .collect(Collectors.toList());
                    break;
                case "4개 이하":
                    lectures = lectures.stream()
                            .filter(lecture -> lecture.getPrice() <= 4)
                            .collect(Collectors.toList());
                    break;
                case "5개 이상":
                    lectures = lectures.stream()
                            .filter(lecture -> lecture.getPrice() >= 5)
                            .collect(Collectors.toList());
                    break;
            }
        }

        if (order != null) {
            switch (order) {
                case "최신순":
                    lectures.sort((a, b) -> b.getCreatedAt().compareTo(a.getCreatedAt()));
                    break;
                case "조회순":
                    lectures.sort((a, b) -> b.getViews() - a.getViews());
                    break;
                case "평점순":
                    lectures.sort((a, b) -> Double.compare(b.getRating(), a.getRating()));
                    break;
                case "리뷰수":
                    lectures.sort((a, b) -> b.getReviews() - a.getReviews());
                    break;
                case "낮은 가격순":
                    lectures.sort((a, b) -> Integer.compare(a.getPrice(), b.getPrice()));
                    break;
            }
        }

        return lectures;
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

    public List<Lecture> findLectureAllByCategoryIn(List<Category> categories){
        return lectureCategoryRepository.findAllByCategoryIn(categories)
                .stream().map(LectureCategory::getLecture).collect(Collectors.toList())
                .reversed().stream().limit(6).collect(Collectors.toList());
    }

    public List<Lecture> findAllLecture(){
        return lectureRepository.findAll().reversed();
    }

    public Lecture getLectureById(long id) {
        return lectureRepository.findById(id).get();
    }
}
