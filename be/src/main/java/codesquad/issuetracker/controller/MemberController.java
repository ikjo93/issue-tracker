package codesquad.issuetracker.controller;

import codesquad.issuetracker.dto.member.MemberDto;
import codesquad.issuetracker.dto.member.MemberDtos;
import codesquad.issuetracker.jwt.AccessToken;
import codesquad.issuetracker.jwt.AccessTokenProvider;
import codesquad.issuetracker.jwt.TokenUtils;
import codesquad.issuetracker.service.MemberService;
import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
    private final AccessTokenProvider accessTokenProvider;

    @GetMapping("/api/members")
    public MemberDtos getMembers() {
        return memberService.getMembers();
    }

    @GetMapping("/api/mine")
    public MemberDto getMyStatus(HttpServletRequest request) {
        String accessToken = TokenUtils.getAccessToken(request);
        AccessToken token = accessTokenProvider.convertToObject(accessToken);
        return memberService.getMemberById(Long.parseLong(token.getMemberId()));
    }
}
