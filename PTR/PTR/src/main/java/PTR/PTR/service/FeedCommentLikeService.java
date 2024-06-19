package PTR.PTR.service;

import PTR.PTR.model.FeedComment;
import PTR.PTR.model.FeedCommentLike;
import PTR.PTR.repository.FeedCommentLikeRepository;
import PTR.PTR.repository.FeedCommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedCommentLikeService {
    FeedCommentLikeRepository feedCommentLikeRepository;
    FeedCommentRepository feedCommentRepository;

    public FeedCommentLikeService(FeedCommentLikeRepository feedCommentLikeRepository, FeedCommentRepository feedCommentRepository) {
        this.feedCommentLikeRepository = feedCommentLikeRepository;
        this.feedCommentRepository = feedCommentRepository;
    }

    //좋아요(아이디 코멘트 유저
    public FeedCommentLike feedCommentLike(FeedCommentLike feedCommentLike){
        return feedCommentLikeRepository.save(feedCommentLike);
    }

    //좋아요 취소
    public void deleteFeedCommentLike(FeedCommentLike feedCommentLike){
        feedCommentLikeRepository.deleteById(feedCommentLike.getId());
    }

    //좋아요 확인
    public List<FeedCommentLike> getFeedCommentLike(FeedComment feedComment){
        return feedCommentLikeRepository.findByFeedComment(feedComment);
    }
}
