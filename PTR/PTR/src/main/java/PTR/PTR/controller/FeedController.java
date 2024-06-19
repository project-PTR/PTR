package PTR.PTR.controller;

import PTR.PTR.model.Feed;
import PTR.PTR.model.User;
import PTR.PTR.service.FeedService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FeedController {
    FeedService feedService;

    public FeedController(FeedService feedService) {
        this.feedService = feedService;
    }

    @PostMapping("/feed")
    public Feed saveFeed(@RequestBody Feed feed){
        return feedService.saveFeed(feed);
    }

    @GetMapping("/feed")
    public List<Feed> getFeed(){
        return feedService.getFeed();
    }

    @GetMapping("/feed/id")
    public List<Feed> getFeedById(@RequestBody User user){
        return feedService.getFeedById(user);
    }

    @GetMapping("/feed/name")
    public List<Feed> getFeedByName(@RequestBody User user){
        return feedService.getFeedByName(user);
    }

    @DeleteMapping("/feed")
    public void deleteFeed(@RequestBody Feed feed){
        feedService.deleteFeed(feed);
    }

    @PutMapping("/feed")
    public Feed updateFeed(@RequestBody Feed feed){
        return feedService.updateFeed(feed);
    }

}
