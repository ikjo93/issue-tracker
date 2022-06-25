package codesquad.issuetracker.dto.issue;

import codesquad.issuetracker.domain.Issue;
import codesquad.issuetracker.domain.IssueStatus;
import codesquad.issuetracker.domain.Member;
import codesquad.issuetracker.domain.Milestone;
import codesquad.issuetracker.dto.label.LabelDto;
import codesquad.issuetracker.dto.label.LabelDtos;
import codesquad.issuetracker.dto.member.MemberDto;
import codesquad.issuetracker.dto.member.MemberDtos;
import codesquad.issuetracker.dto.milestone.MilestoneDto;
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
    private String description;
    private String writer;
    private String profileUrl;
    private LocalDateTime createdDateTime;
    private MilestoneDto milestone;
    private List<MemberDto> assignees;
    private List<LabelDto> labels;

    private IssueDto() {}

    public static IssueDto from(Issue issue) {
        Member writer = issue.getWriter();
        Milestone milestone = issue.getMilestone();

        return new IssueDto(
            issue.getId(), issue.getStatus(), issue.getSubject(), issue.getDescription(),
            writer.getIdentity(), writer.getProfileUrl(), issue.getCreatedDateTime(),
            milestone != null ?  MilestoneDto.from(milestone) : null,
            issue.assignees()
                .stream()
                .map(MemberDto::from)
                .collect(Collectors.toList()),
            issue.labels()
                .stream()
                .map(LabelDto::from)
                .collect(Collectors.toList())
        );
    }
}
