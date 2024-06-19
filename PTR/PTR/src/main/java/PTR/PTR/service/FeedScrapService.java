package PTR.PTR.service;

import PTR.PTR.model.Feed;
import PTR.PTR.model.FeedScrap;
import PTR.PTR.model.User;
import PTR.PTR.repository.FeedRepository;
import PTR.PTR.repository.FeedScrapRepository;
import PTR.PTR.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class FeedScrapService {
    FeedScrapRepository feedScrapRepository;
    FeedRepository feedRepository;
    UserRepository userRepository;


    public FeedScrapService(FeedScrapRepository feedScrapRepository, FeedRepository feedRepository, UserRepository userRepository) {
        this.feedScrapRepository = feedScrapRepository;
        this.feedRepository = feedRepository;
        this.userRepository = userRepository;
    }

    //피드 스크랩
    public FeedScrap saveFeedScrap(FeedScrap feedScrap){
        feedScrap.setCreatedAt(LocalDateTime.now());
        return feedScrapRepository.save(feedScrap);
    }

    //스크랩 한 유저 조회(피드id로 조회)
    public List<FeedScrap> getFeedScrapByFeed(Feed feed){
        return feedScrapRepository.findByFeed(feed);
    }
    //내가 스크랩 한 것들 조회(유저로 피드 조회)
    public List<FeedScrap> getFeedScrapByUser(User user){
        return feedScrapRepository.findByUser(user);
    }
    //스크랩 취소
    public void deleteFeedScrap(FeedScrap feedScrap){
        feedScrapRepository.deleteById(feedScrap.getId());
    }
}
