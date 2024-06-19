package PTR.PTR.service;

import PTR.PTR.exception.ResourceNotFoundException;
import PTR.PTR.model.Feed;
import PTR.PTR.model.User;
import PTR.PTR.repository.FeedRepository;
import PTR.PTR.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class FeedService {
    FeedRepository feedRepository;
    UserRepository userRepository;

    public FeedService(FeedRepository feedRepository, UserRepository userRepository) {
        this.feedRepository = feedRepository;
        this.userRepository = userRepository;
    }

    // 피드 업로드
    public Feed saveFeed(Feed feed){
        feed.setCreatedAt(LocalDateTime.now());
        return feedRepository.save(feed);
    }

    // 피드 읽기
    public List<Feed> getFeed(){
        return feedRepository.findAll();
    }

    // 유저 아이디로 피드 읽기
    public List<Feed> getFeedById(User user){
        return feedRepository.findByUser(user);

    }

    // 유저 이름으로 피드 읽기
    public List<Feed> getFeedByName(User user){
        return feedRepository.findByUser(user);
    }

    // 피드 삭제
    public void deleteFeed(Feed feed){
        feedRepository.deleteById(feed.getId());
    }

    // 피드 수정
    public Feed updateFeed(Feed feed){
        Optional<Feed> feedOptional = feedRepository.findById(feed.getId());
        if (feedOptional.isEmpty()){
            throw new ResourceNotFoundException("Feed", "Id", feed.getId());
        }else {
            Feed temp = feedOptional.get();
            feedOptional.get().setText(feed.getText());
            feedOptional.get().setTitle(feed.getTitle());
            feedOptional.get().setImage(feed.getImage());
            feedOptional.get().setUpdateTime(LocalDateTime.now());
            feedRepository.save(temp);
            return temp;
        }
    }

}