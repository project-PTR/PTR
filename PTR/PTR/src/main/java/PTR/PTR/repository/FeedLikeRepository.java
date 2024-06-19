package PTR.PTR.repository;

import PTR.PTR.model.Feed;
import PTR.PTR.model.FeedLike;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedLikeRepository extends JpaRepository<FeedLike,Long> {
    List<FeedLike> findByFeed(Feed feed);
}
