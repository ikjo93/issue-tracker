package codesquad.issuetracker.service;

import codesquad.issuetracker.client.GithubOAuthClient;
import codesquad.issuetracker.domain.Member;
import codesquad.issuetracker.domain.MemberType;
import codesquad.issuetracker.dto.auth.AuthMemberInformation;
import codesquad.issuetracker.dto.auth.OAuthAccessToken;
import codesquad.issuetracker.repository.MemberRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class GithubOAuthService {

    private final GithubOAuthClient githubOAuthClient;
    private final MemberRepository memberRepository;

    @Transactional
    public Long authorizeForThirdParty(String code) {
        OAuthAccessToken token = githubOAuthClient.getAccessToken(code);
        AuthMemberInformation authMemberInformation = githubOAuthClient.getAuthMemberInfo(token);

        return saveAuthMember(authMemberInformation);
    }

    private Long saveAuthMember(AuthMemberInformation info) {
        Member member = Optional.ofNullable(
                memberRepository.findByIdentityAndType(info.getIdentity(), MemberType.GITHUB)
            )
            .orElseGet(() ->
                memberRepository.save(Member.of(info))
            );

        return member.getId();
    }
}
