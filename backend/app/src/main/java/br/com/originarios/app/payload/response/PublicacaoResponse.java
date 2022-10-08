package br.com.originarios.app.payload.response;

import br.com.originarios.app.models.entities.Publicacao;

public class PublicacaoResponse {

	private Publicacao publicacao;
	
	private UsuarioResponse usuarioResponse;

	public Publicacao getPublicacao() {
		return publicacao;
	}

	public void setPublicacao(Publicacao publicacao) {
		this.publicacao = publicacao;
	}

	public UsuarioResponse getUsuarioResponse() {
		return usuarioResponse;
	}

	public void setUsuarioResponse(UsuarioResponse usuarioResponse) {
		this.usuarioResponse = usuarioResponse;
	}
}
