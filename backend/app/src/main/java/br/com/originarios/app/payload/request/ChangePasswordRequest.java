package br.com.originarios.app.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class ChangePasswordRequest {

	@NotBlank
	@Size(max = 100)
	private String velhaSenha;
	
	@NotBlank
	@Size(max = 100)
	private String novaSenha;

	public String getVelhaSenha() {
		return velhaSenha;
	}

	public void setVelhaSenha(String velhaSenha) {
		this.velhaSenha = velhaSenha;
	}

	public String getNovaSenha() {
		return novaSenha;
	}

	public void setNovaSenha(String novaSenha) {
		this.novaSenha = novaSenha;
	}
}