package PTR.PTR.controller;

import PTR.PTR.model.Calendar;
import PTR.PTR.service.CalendarService;
import org.springframework.web.bind.annotation.*;

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
}
