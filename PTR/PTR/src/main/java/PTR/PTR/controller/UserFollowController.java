package PTR.PTR.controller;

import PTR.PTR.model.User;
import PTR.PTR.model.UserFollow;
import PTR.PTR.service.UserFollowService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserFollowController {
    UserFollowService userFollowService;

    public UserFollowController(UserFollowService userFollowService) {
        this.userFollowService = userFollowService;
    }

    @PostMapping("/userFollow")
    public UserFollow saveUserFollow(@RequestBody UserFollow userFollow){
        return userFollowService.saveUserFollow(userFollow);
    }

    @DeleteMapping("/userFollow")
    public void deleteUserFollow(@RequestBody UserFollow userFollow){
        userFollowService.deleteUserFollow(userFollow);
    }

    @GetMapping("/userFollow/user")
    public List<UserFollow> getUserFollowByUser(@RequestBody User user){
        return userFollowService.getUserFollowByUser(user);
    }

    @GetMapping("/userFollow/user2")
    public List<UserFollow> getUserFollowByUser2(@RequestBody User user){
        return userFollowService.getUserFollowByUser2(user);
    }
}
