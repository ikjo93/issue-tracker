package codesquad.issuetracker.service;

import codesquad.issuetracker.exception.InvalidTokenException;
import codesquad.issuetracker.jwt.AccessTokenProvider;
import codesquad.issuetracker.repository.RedisRepository;
import codesquad.issuetracker.jwt.RefreshToken;
import codesquad.issuetracker.jwt.RefreshTokenProvider;
import codesquad.issuetracker.jwt.Token;
import java.time.Duration;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TokenService {

    private static final long REFRESH_TOKEN_DURATION_MINUTE = 10L;

    private final RedisRepository redisRepository;
    private final AccessTokenProvider accessTokenProvider;
    private final RefreshTokenProvider refreshTokenProvider;

    public Token createAccessToken(String memberId) {
        return accessTokenProvider.createToken(memberId);
    }

    public Token createRefreshToken(String memberId) {
        Token refreshToken = refreshTokenProvider.createToken(String.valueOf(memberId));
        redisRepository.save(memberId, refreshToken.getToken(), Duration.ofMinutes(REFRESH_TOKEN_DURATION_MINUTE));
        return refreshToken;
    }

    public String validateDurationOfRefreshToken(RefreshToken refreshToken) {
        String memberId = refreshToken.getMemberId();

        if (redisRepository.findByKey(memberId) == null) {
            throw new InvalidTokenException("refresh 토큰의 만료기한이 지났습니다. 다시 로그인 해주세요.");
        }

        return memberId;
    }
}
