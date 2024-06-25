package PTR.PTR.controller;

import PTR.PTR.model.Feed;
import PTR.PTR.model.FeedLike;
import PTR.PTR.model.FeedScrap;
import PTR.PTR.model.User;
import PTR.PTR.service.FeedScrapService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FeedScrapController {
    FeedScrapService feedScrapService;

    public FeedScrapController(FeedScrapService feedScrapService) {
        this.feedScrapService = feedScrapService;
    }


    @PostMapping("/feedScrap")
    public FeedScrap saveFeedScrap(@RequestBody FeedScrap feedScrap){
        return feedScrapService.saveFeedScrap(feedScrap);
    }

    @PostMapping("/feedScrap/feed")
    public List<FeedScrap> getFeedScrapByFeed(@RequestBody Feed feed){
        return feedScrapService.getFeedScrapByFeed(feed);
    }

    @PostMapping("/feedScrap/user")
    public List<FeedScrap> getFeedScrapByUser(@RequestBody User user){
        return feedScrapService.getFeedScrapByUser(user);
    }

    @DeleteMapping("/feedScrap")
    public void deleteFeedScrap(@RequestBody FeedScrap feedScrap){
        feedScrapService.deleteFeedScrap(feedScrap);
    }

    @PostMapping("/checkFeedScrapClick")
    public boolean checkFeedScrapClick(@RequestBody FeedScrap feedScrap){
        return feedScrapService.checkFeedScrapClick(feedScrap);
    }

}
