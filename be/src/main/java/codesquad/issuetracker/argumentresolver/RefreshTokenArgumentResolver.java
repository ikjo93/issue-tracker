package codesquad.issuetracker.argumentresolver;

import codesquad.issuetracker.jwt.RefreshToken;
import codesquad.issuetracker.jwt.RefreshTokenProvider;
import codesquad.issuetracker.jwt.TokenUtils;
import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

@RequiredArgsConstructor
public class RefreshTokenArgumentResolver implements HandlerMethodArgumentResolver {

    private final RefreshTokenProvider refreshTokenProvider;

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        boolean hasLoginAnnotation = parameter.hasParameterAnnotation(Login.class);
        boolean hasRefreshTokenType = RefreshToken.class.isAssignableFrom(parameter.getParameterType());

        return (hasLoginAnnotation && hasRefreshTokenType);
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer,
        NativeWebRequest webRequest, WebDataBinderFactory binderFactory) {

        HttpServletRequest request = (HttpServletRequest) webRequest.getNativeRequest();
        String refreshTokenString = TokenUtils.getRefreshToken(request);

        return refreshTokenProvider.convertToObject(refreshTokenString);
    }
}
