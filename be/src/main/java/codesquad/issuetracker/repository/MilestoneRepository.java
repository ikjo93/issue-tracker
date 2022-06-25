package codesquad.issuetracker.repository;


import codesquad.issuetracker.domain.Milestone;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MilestoneRepository extends JpaRepository<Milestone, Long> {

}
