package codesquad.issuetracker.repository;

import codesquad.issuetracker.domain.IssueLabel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IssueLabelRepository extends JpaRepository<IssueLabel, Long> {

    @Modifying
    @Query("delete from IssueLabel il where il.issue.id = :id")
    void deleteByIssueId(@Param("id") Long id);

}
