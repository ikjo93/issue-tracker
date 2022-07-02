package codesquad.issuetracker.controller;

import codesquad.issuetracker.argumentresolver.Login;
import codesquad.issuetracker.dto.member.MemberDto;
import codesquad.issuetracker.dto.member.MemberDtos;
import codesquad.issuetracker.jwt.AccessToken;
import codesquad.issuetracker.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/api/members")
    public MemberDtos getMembers() {
        return memberService.getMembers();
    }

    @GetMapping("/api/mine")
    public MemberDto getMyStatus(@Login AccessToken token) {
        return memberService.getMemberDtoById(Long.parseLong(token.getMemberId()));
    }
}
