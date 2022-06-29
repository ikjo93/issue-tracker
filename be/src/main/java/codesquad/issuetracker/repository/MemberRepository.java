package codesquad.issuetracker.repository;

import codesquad.issuetracker.domain.Member;
import codesquad.issuetracker.domain.MemberType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Member findByIdentityAndType(String identity, MemberType type);

}
