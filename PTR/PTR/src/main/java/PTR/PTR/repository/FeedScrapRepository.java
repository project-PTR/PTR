package PTR.PTR.repository;

import PTR.PTR.model.Feed;
import PTR.PTR.model.FeedScrap;
import PTR.PTR.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedScrapRepository extends JpaRepository<FeedScrap,Long> {
    List<FeedScrap> findByFeed(Feed feed);

    List<FeedScrap> findByUser(User user);
}
