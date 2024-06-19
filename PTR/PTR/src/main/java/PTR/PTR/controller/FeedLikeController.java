package PTR.PTR.controller;

import PTR.PTR.model.Feed;
import PTR.PTR.model.FeedLike;
import PTR.PTR.service.FeedLikeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FeedLikeController {
    FeedLikeService feedLikeService;

    public FeedLikeController(FeedLikeService feedLikeService) {
        this.feedLikeService = feedLikeService;
    }

    @PostMapping("/feedLike")
    public FeedLike feedLike(@RequestBody FeedLike feedLike){
        return feedLikeService.feedLike(feedLike);
    }

    @DeleteMapping("/feedLike")
    public void deleteFeedLike(@RequestBody FeedLike feedLike){
        feedLikeService.deleteFeedLike(feedLike);
    }

    @GetMapping("/feedLike")
    public List<FeedLike> getFeedLike(@RequestBody Feed feed){
        return feedLikeService.getFeedLike(feed);
    }

}
