package codesquad.issuetracker.dto.issue;

import codesquad.issuetracker.domain.Issue;
import codesquad.issuetracker.domain.IssueStatus;
import codesquad.issuetracker.domain.Member;
import codesquad.issuetracker.domain.Milestone;
import codesquad.issuetracker.dto.label.LabelDto;
import codesquad.issuetracker.dto.member.MemberDto;
import codesquad.issuetracker.dto.milestone.MilestoneDto;
import codesquad.issuetracker.dto.reply.ReplyDto;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class IssueDto {

    private Long id;
    private IssueStatus status;
    private String subject;
    private String writer;
    private String profileUrl;
    private LocalDateTime createdDateTime;
    private MilestoneDto milestone;
    private List<MemberDto> assignees;
    private List<LabelDto> labels;
    private List<ReplyDto> replies;

    private IssueDto() {}

    public static IssueDto from(Issue issue) {
        Member writer = issue.getWriter();
        Milestone milestone = issue.getMilestone();

        return new IssueDto(
            issue.getId(),
            issue.getStatus(),
            issue.getSubject(),
            writer.getIdentity(),
            writer.getProfileUrl(),
            issue.getCreatedDateTime(),
            milestone != null ?  MilestoneDto.from(milestone) : null,
            getMemberDtos(issue),
            getLabelDtos(issue),
            getReplyDtos(issue)
        );
    }

    private static List<ReplyDto> getReplyDtos(Issue issue) {
        return issue.getReplies()
            .stream()
            .map(ReplyDto::from)
            .collect(Collectors.toList());
    }

    private static List<LabelDto> getLabelDtos(Issue issue) {
        return issue.labels()
            .stream()
            .map(LabelDto::from)
            .collect(Collectors.toList());
    }

    private static List<MemberDto> getMemberDtos(Issue issue) {
        return issue.assignees()
            .stream()
            .map(MemberDto::from)
            .collect(Collectors.toList());
    }
}
