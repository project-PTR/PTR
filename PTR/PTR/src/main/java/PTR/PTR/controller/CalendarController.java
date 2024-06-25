package PTR.PTR.controller;

import PTR.PTR.model.Calendar;
import PTR.PTR.model.User;
import PTR.PTR.service.CalendarService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CalendarController {
    CalendarService calendarService;

    public CalendarController(CalendarService calendarService) {
        this.calendarService = calendarService;
    }

    @PostMapping("/calendar")
    public Calendar savecalendar(@RequestBody Calendar calendar){
        return calendarService.saveCalendar(calendar);
    }

    @GetMapping("/calendar")
    public Optional<Calendar> getCalendar(@RequestBody Calendar calendar){
        return calendarService.getCalendar(calendar);
    }

    @DeleteMapping("/calendar")
    public void deleteCalendar(@RequestBody Calendar calendar){
        calendarService.deleteCalendar(calendar);
    }

    @PutMapping("/calendar")
    public Calendar updatecalendar(@RequestBody Calendar calendar){
        return calendarService.updateCalendar(calendar);
    }

    @PostMapping("/findCalendarDay5")
    public ResponseEntity<List<Calendar>> findCalendarDay5(@RequestBody User user){
        return new ResponseEntity<>(calendarService.findCalendarDay5(user), HttpStatus.OK);
    }

    @PostMapping("/findCalenderMonth")
    public ResponseEntity<List<Calendar>> findCalenderMonth(@RequestBody Calendar calendar){
        return new ResponseEntity<>(calendarService.findCalenderMonth(calendar), HttpStatus.OK);
    }
}
