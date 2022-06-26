package codesquad.issuetracker.repository;

import static codesquad.issuetracker.domain.QAssignee.assignee;
import static codesquad.issuetracker.domain.QIssue.issue;
import static codesquad.issuetracker.domain.QIssueLabel.issueLabel;
import static codesquad.issuetracker.domain.QMember.member;
import static codesquad.issuetracker.domain.QMilestone.milestone;
import static codesquad.issuetracker.domain.QReply.reply;
import static org.springframework.util.StringUtils.hasText;

import codesquad.issuetracker.domain.Issue;
import codesquad.issuetracker.domain.IssueStatus;
import codesquad.issuetracker.domain.QAssignee;
import codesquad.issuetracker.dto.issue.IssueSearchCondition;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import java.util.Set;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class IssueRepositoryImpl implements IssueRepositoryCustom {

    private static final String EXCLUSION_CONDITION_LABEL = "label";
    private static final String EXCLUSION_CONDITION_MILESTONE = "milestone";
    private static final String EXCLUSION_CONDITION_ASSIGNEE = "assignee";

    private final JPAQueryFactory queryFactory;

    @Override
    public List<Issue> search(IssueSearchCondition condition, Set<String> labelConditions,
        Set<String> exclusionConditions) {
        return queryFactory.selectFrom(issue).distinct()
            .join(issue.writer, member).fetchJoin()
            .leftJoin(issue.milestone, milestone).fetchJoin()
            .leftJoin(issue.assignees, assignee)
            .leftJoin(issue.replies, reply)
            .leftJoin(issue.issueLabels, issueLabel)
            .where(
                writerIdentityEq(condition.getWriter()),
                milestoneSubjectEq(condition.getMilestone()),
                assigneeIdentityEq(condition.getAssignee()),
                replierIdentityEq(condition.getReplier()),
                inLabelNames(labelConditions),
                isUnLabeled(exclusionConditions.contains(EXCLUSION_CONDITION_LABEL)),
                isNoMilestone(exclusionConditions.contains(EXCLUSION_CONDITION_MILESTONE)),
                isAssignedToNobody(exclusionConditions.contains(EXCLUSION_CONDITION_ASSIGNEE))
            )
            .groupBy(issue.id)
            .having(issue.id.count().goe(labelConditions.size()))
            .fetch();
    }

    private BooleanExpression writerIdentityEq(String writer) {
        return hasText(writer) ? issue.writer.identity.eq(writer) : null;
    }

    private BooleanExpression milestoneSubjectEq(String milestoneSubject) {
        return hasText(milestoneSubject) ? issue.milestone.subject.eq(milestoneSubject) : null;
    }

    private BooleanExpression assigneeIdentityEq(String assignee) {
        return hasText(assignee) ? QAssignee.assignee.member.identity.eq(assignee) : null;
    }

    private BooleanExpression replierIdentityEq(String replier) {
        return hasText(replier) ? reply.member.identity.eq(replier) : null;
    }

    private BooleanExpression inLabelNames(Set<String> labelNames) {
        return labelNames.size() > 0 ? issueLabel.label.name.in(labelNames) : null;
    }

    private BooleanExpression isUnLabeled(boolean flag) {
        return flag ? issueLabel.id.isNull() : null;
    }

    private BooleanExpression isNoMilestone(boolean flag) {
        return flag ? issue.milestone.id.isNull() : null;
    }

    private BooleanExpression isAssignedToNobody(boolean flag) {
        return flag ? assignee.id.isNull() : null;
    }
}
