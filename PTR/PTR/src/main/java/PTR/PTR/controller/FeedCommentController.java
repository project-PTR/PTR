package PTR.PTR.controller;

import PTR.PTR.model.Feed;
import PTR.PTR.model.FeedComment;
import PTR.PTR.service.FeedCommentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FeedCommentController {
    FeedCommentService feedCommentService;

    public FeedCommentController(FeedCommentService feedCommentService) {
        this.feedCommentService = feedCommentService;
    }

    @PostMapping("/feedComment")
    public FeedComment saveFeedComment(@RequestBody FeedComment feedComment){
        return feedCommentService.saveFeedComment(feedComment);
    }
    @GetMapping("/feedComment")
    public List<FeedComment> getFeedComment(@RequestBody Feed feed){
        return feedCommentService.getFeedComment(feed);
    }
    @DeleteMapping("/feedComment")
    public void deleteFeedComment(@RequestBody FeedComment feedComment){
        feedCommentService.deleteFeedComment(feedComment);
    }
    @PutMapping("/feedComment")
    public FeedComment updateFeedComment(@RequestBody FeedComment feedComment){
        return feedCommentService.updateFeedComment(feedComment);
    }
}
