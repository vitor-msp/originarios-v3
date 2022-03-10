package br.com.originarios.app.security.jwt;

import java.util.Date;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import br.com.originarios.app.security.services.UserDetailsImpl;
import io.jsonwebtoken.*;

@Component
public class JwtUtils {
	
	private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);
	
	private final String jwtSecret = "OriginariosTokenKey";
	
	private final int jwtExpirationMs = 86400000;
	
	public String generateJwtToken(Authentication authentication) {
		UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();
		return Jwts.builder()
				.setSubject((userPrincipal.getUsername()))
				.setIssuedAt(new Date())
				.setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
				.signWith(SignatureAlgorithm.HS512, jwtSecret)
				.compact();
	}
	
	public String getUserNameFromJwtToken(String token) {
		return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
	}
	
	public boolean validateJwtToken(String authToken) {
		try {
			Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
			return true;
		} catch (SignatureException e) {
			logger.error("Assinatura JWT inválida: {}", e.getMessage());
		} catch (MalformedJwtException e) {
			logger.error("Token JWT inválido: {}", e.getMessage());
		} catch (ExpiredJwtException e) {
			logger.error("Token JWT expirado: {}", e.getMessage());
		} catch (UnsupportedJwtException e) {
			logger.error("Sem suporte para Token JWT: {}", e.getMessage());
		} catch (IllegalArgumentException e) {
			logger.error("String de declarações JWT vazia: {}", e.getMessage());
		}
		return false;
	}
}