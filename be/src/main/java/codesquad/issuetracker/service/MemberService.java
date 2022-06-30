package codesquad.issuetracker.service;

import codesquad.issuetracker.domain.Member;
import codesquad.issuetracker.dto.member.MemberDto;
import codesquad.issuetracker.dto.member.MemberDtos;
import codesquad.issuetracker.repository.MemberRepository;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberDtos getMembers() {
        return new MemberDtos(memberRepository.findAll()
            .stream()
            .map(MemberDto::from)
            .collect(Collectors.toList()));
    }

    public MemberDto getMemberDtoById(Long id) {
        Member member = getMemberByIdOrThrow(id);

        return MemberDto.from(member);
    }

    public Member getMemberByIdOrThrow(Long id) {
        return memberRepository.findById(id).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 회원입니다.");
        });
    }
}
