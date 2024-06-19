package PTR.PTR.repository;

import PTR.PTR.model.FeedComment;
import PTR.PTR.model.FeedCommentLike;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedCommentLikeRepository extends JpaRepository<FeedCommentLike,Long> {
    List<FeedCommentLike> findByFeedComment(FeedComment feedComment);
}
