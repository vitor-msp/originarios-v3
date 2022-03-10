package br.com.originarios.app.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.originarios.app.models.entities.Produto;
import br.com.originarios.app.models.repositories.ProdutoRepository;
import br.com.originarios.app.payload.response.MsgResponse;
import br.com.originarios.app.payload.response.ProdutoResponse;
import br.com.originarios.app.payload.response.UsuarioResponse;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/produtos")
public class ProdutosController{

	@Autowired
	ProdutoRepository produtoRepository;
	
	@GetMapping
	public ResponseEntity<?> getProdutos(
			@RequestParam(name = "pagina", defaultValue = "0") int pagina,
			@RequestParam(name = "qtd", defaultValue = "5") int qtd){		
		try {
			
			Pageable page = PageRequest.of(pagina, qtd,
					Sort.by("id").descending());
			
			List<Produto> produtos = produtoRepository.findAll(page).getContent();
			
			List<ProdutoResponse> produtosResponse = new ArrayList<>();
			for (Produto produto: produtos) {
				
				ProdutoResponse produtoResponse = new ProdutoResponse();
				produtoResponse.setProduto(produto);
				
				UsuarioResponse usuarioResponse = new UsuarioResponse();
				usuarioResponse.setNome(produto.getUsuario().getNome());
				usuarioResponse.setTribo(produto.getUsuario().getTribo());
				usuarioResponse.setCidade(produto.getUsuario().getCidade());
				usuarioResponse.setUf(produto.getUsuario().getUf());
				usuarioResponse.setDdd(produto.getUsuario().getDdd());
				usuarioResponse.setTelefone(produto.getUsuario().getTelefone());
				usuarioResponse.setEmail(produto.getUsuario().getEmail());
				produtoResponse.setUsuarioResponse(usuarioResponse);
				
				produtosResponse.add(produtoResponse);
			}
			
			return ResponseEntity.ok(produtosResponse);

		} catch (Exception e) {

			return ResponseEntity.internalServerError()
					.body(new MsgResponse("Erro ao obter os produtos!"));		
		}
	}
}