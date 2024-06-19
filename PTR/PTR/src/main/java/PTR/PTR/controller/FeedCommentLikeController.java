package PTR.PTR.controller;

import PTR.PTR.model.FeedComment;
import PTR.PTR.model.FeedCommentLike;
import PTR.PTR.service.FeedCommentLikeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FeedCommentLikeController {
    FeedCommentLikeService feedCommentLikeService;

    public FeedCommentLikeController(FeedCommentLikeService feedCommentLikeService) {
        this.feedCommentLikeService = feedCommentLikeService;
    }

    @PostMapping("/feedCommentLike")
    public FeedCommentLike feedCommentLike(@RequestBody FeedCommentLike feedCommentLike){
        return feedCommentLikeService.feedCommentLike(feedCommentLike);
    }

    @DeleteMapping("/feedCommentLike")
    public void deleteFeedCommnetLike(@RequestBody FeedCommentLike feedCommentLike){
        feedCommentLikeService.deleteFeedCommentLike(feedCommentLike);
    }

    @GetMapping("/feedCommentLike")
    public List<FeedCommentLike> getFeedCommentLike(@RequestBody FeedComment feedComment){
        return feedCommentLikeService.getFeedCommentLike(feedComment);
    }
}
