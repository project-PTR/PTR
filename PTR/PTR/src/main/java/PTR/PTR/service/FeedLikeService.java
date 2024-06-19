package PTR.PTR.service;

import PTR.PTR.model.Feed;
import PTR.PTR.model.FeedLike;
import PTR.PTR.repository.FeedLikeRepository;
import PTR.PTR.repository.FeedRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class FeedLikeService {
    FeedLikeRepository feedLikeRepository;
    FeedRepository feedRepository;

    public FeedLikeService(FeedLikeRepository feedLikeRepository, FeedRepository feedRepository) {
        this.feedLikeRepository = feedLikeRepository;
        this.feedRepository = feedRepository;
    }

    //좋아요
    public FeedLike feedLike(FeedLike feedLike){
        feedLike.setCreatedAt(LocalDateTime.now());
        return feedLikeRepository.save(feedLike);
    }

    //좋아요 취소
    public void deleteFeedLike(FeedLike feedLike){
        feedLikeRepository.deleteById(feedLike.getId());
    }

    //좋아요 확인
    public List<FeedLike> getFeedLike(Feed feed){
        return feedLikeRepository.findByFeed(feed);
    }

}
