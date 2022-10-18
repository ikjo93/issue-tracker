package codesquad.issuetracker.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class RefreshToken extends Token {

    public RefreshToken(String token, Key secretKey) {
        super.token = token;
        super.secretKey = secretKey;
    }

    RefreshToken(String memberId, Key secretKey, SignatureAlgorithm signatureAlgorithm, long duration) {
        super.secretKey = secretKey;
        super.token = compactToken(memberId, signatureAlgorithm, new Date(System.currentTimeMillis() + duration));
    }

    private String compactToken(String memberId, SignatureAlgorithm signatureAlgorithm, Date expiration) {
        return Jwts.builder()
            .setClaims(makeClaims(memberId))
            .setExpiration(expiration)
            .signWith(secretKey, signatureAlgorithm)
            .compact();
    }

    private Map<String, Object> makeClaims(String memberId) {
        Map<String, Object> claims = new HashMap<>();
        claims.put(ClaimKey.TOKEN_TYPE.getKeyName(), TokenType.REFRESH.name());
        claims.put(ClaimKey.MEMBER_ID.getKeyName(), memberId);
        return claims;
    }
}
