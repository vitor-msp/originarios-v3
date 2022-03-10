package br.com.originarios.app.payload.response;

public class JwtResponse {

	private String email;
	private String token;
	private String tokenType = "Bearer";
	
	public JwtResponse(String email, String token, String tokenType) {
		super();
		this.setEmail(email);
		this.setToken(token);
		this.setTokenType(tokenType);
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getTokenType() {
		return tokenType;
	}

	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}
}