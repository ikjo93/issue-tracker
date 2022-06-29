package codesquad.issuetracker.repository;

import codesquad.issuetracker.domain.Assignee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AssigneeRepository extends JpaRepository<Assignee, Long> {

    @Modifying
    @Query("delete from Assignee a where a.issue.id = :id")
    void deleteByIssueId(@Param("id") Long id);

}
