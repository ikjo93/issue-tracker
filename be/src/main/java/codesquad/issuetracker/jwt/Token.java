package codesquad.issuetracker.jwt;

import codesquad.issuetracker.exception.InvalidTokenException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import java.security.Key;
import java.util.Date;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

public abstract class Token {

    @Getter
    protected String token;
    protected Key secretKey;

    @Getter
    @RequiredArgsConstructor
    enum ClaimKey {
        MEMBER_ID("memberId"),
        TOKEN_TYPE("tokenType");

        private final String keyName;
    }

    protected Claims getClaims(String token) {
        return Jwts.parserBuilder()
            .setSigningKey(secretKey)
            .build()
            .parseClaimsJws(token)
            .getBody();
    }

    public boolean validateExpirationOfToken() {
        try {
            return !getClaims(token)
                .getExpiration()
                .before(new Date());
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    public String getMemberId() {
        try {
            return getClaims(token)
                .get(ClaimKey.MEMBER_ID.getKeyName())
                .toString();
        } catch (ExpiredJwtException e) {
            return e.getClaims().getSubject();
        } catch (JwtException e) {
            throw new InvalidTokenException("유효하지 않은 토큰입니다.");
        }
    }

    public long getRestOfExpiration() {
        try {
            return getClaims(token)
                .getExpiration()
                .getTime() - (new Date().getTime());
        } catch (ExpiredJwtException e) {
            return 0;
        } catch (JwtException e) {
            throw new InvalidTokenException("유효하지 않은 토큰입니다.");
        }
    }
}
