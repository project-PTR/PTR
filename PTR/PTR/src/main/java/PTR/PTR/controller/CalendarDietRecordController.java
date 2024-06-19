package PTR.PTR.controller;

import PTR.PTR.model.CalendarDietRecord;
import PTR.PTR.service.CalendarDietRecordService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class CalendarDietRecordController {
    CalendarDietRecordService calendarDietRecordService;

    public CalendarDietRecordController(CalendarDietRecordService calendarDietRecordService) {
        this.calendarDietRecordService = calendarDietRecordService;
    }

    @PostMapping("/calendarDietRecord")
    public CalendarDietRecord saveCalendarDietRecord(@RequestBody CalendarDietRecord calendarDietRecord){
        return calendarDietRecordService.saveCalendarDietRecord(calendarDietRecord);
    }

    @GetMapping("/calendarDietRecord")
    public Optional<CalendarDietRecord> getCalendarDietRecord(@RequestBody CalendarDietRecord calendarDietRecord){
        return calendarDietRecordService.getCalendarDietRecord(calendarDietRecord);
    }

    @DeleteMapping("/calendarDietRecord")
    public void deleteCalendarDietRecord(@RequestBody CalendarDietRecord calendarDietRecord){
        calendarDietRecordService.deleteCalendarDietRecord(calendarDietRecord);
    }

    @PutMapping("/calendarDietRecord")
    public CalendarDietRecord updateCalendarDietRecord(@RequestBody CalendarDietRecord calendarDietRecord){
        return calendarDietRecordService.updateCalendarDietRecord(calendarDietRecord);
    }
}
