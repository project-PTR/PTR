package PTR.PTR.controller;

import PTR.PTR.model.CalendarDietPlan;
import PTR.PTR.service.CalendarDietPlanService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class CalendarDietPlanController {
    CalendarDietPlanService calendarDietPlanService;

    public CalendarDietPlanController(CalendarDietPlanService calendarDietPlanService) {
        this.calendarDietPlanService = calendarDietPlanService;
    }
    @PostMapping("/calendarDietPlan")
    public CalendarDietPlan saveCalendarDietPlan(@RequestBody CalendarDietPlan calendarDietPlan){
        return calendarDietPlanService.saveCalendarDietPlan(calendarDietPlan);
    }

    @GetMapping("/calendarDietPlan")
    public Optional<CalendarDietPlan> getCalendarDietPlan(@RequestBody CalendarDietPlan calendarDietPlan){
        return calendarDietPlanService.getCalendarDietPlan(calendarDietPlan);
    }

    @DeleteMapping("/calendarDietPlan")
    public void deleteCalendarDietPlan(@RequestBody CalendarDietPlan calendarDietPlan){
        calendarDietPlanService.deleteCalendarDietPlan(calendarDietPlan);
    }

    @PutMapping("/calendarDietPlan")
    public CalendarDietPlan updateCalendarDietPlan(@RequestBody CalendarDietPlan calendarDietPlan){
        return calendarDietPlanService.updateCalendarDietPlan(calendarDietPlan);
    }
}
