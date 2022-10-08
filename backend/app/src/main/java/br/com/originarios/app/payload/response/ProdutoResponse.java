package br.com.originarios.app.payload.response;

import br.com.originarios.app.models.entities.Produto;

public class ProdutoResponse {

	private Produto produto;
	
	private UsuarioResponse usuarioResponse;
	
	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

	public UsuarioResponse getUsuarioResponse() {
		return usuarioResponse;
	}

	public void setUsuarioResponse(UsuarioResponse usuarioResponse) {
		this.usuarioResponse = usuarioResponse;
	}
}