package br.com.originarios.app.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.originarios.app.models.entities.Produto;
import br.com.originarios.app.models.entities.Usuario;
import br.com.originarios.app.models.repositories.ProdutoRepository;
import br.com.originarios.app.models.repositories.UsuarioRepository;
import br.com.originarios.app.payload.response.MsgResponse;
import br.com.originarios.app.security.jwt.JwtUtils;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/meus-produtos")
public class MeusProdutosController{
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	@Autowired
	ProdutoRepository produtoRepository;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@PostMapping
	public ResponseEntity<?> postProduto(
			@RequestHeader("Authorization") String token,
			@RequestBody Produto produto){
		
		try {
			
			token = token.substring(7, token.length());
			String usuarioEmail = jwtUtils.getUserNameFromJwtToken(token);
			
			Optional<Usuario> usuario = usuarioRepository.findByEmail(usuarioEmail);
			if(usuario.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Cliente não encontrado!"));
			}
			
			produto.setUsuario(usuario.get());
		
			produtoRepository.save(produto);
			
			return ResponseEntity.ok(produto);
		
		} catch (Exception e) {
			
			return ResponseEntity.internalServerError().body(
					new MsgResponse("Erro ao cadastrar o produto!"));
		}
	}

	@PutMapping
	public ResponseEntity<?> putProduto(
			@RequestHeader("Authorization") String token,
			@RequestBody Produto novoProduto){
		
		try {
			
			token = token.substring(7, token.length());
			String usuarioEmail = jwtUtils.getUserNameFromJwtToken(token);
			
			Optional<Usuario> usuario = usuarioRepository.findByEmail(usuarioEmail);
			if(usuario.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Cliente não encontrado!"));
			}
			
			Optional<Produto> produto = produtoRepository.findById(novoProduto.getId());
			if(produto.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Produto não encontrado!"));
			}
			
			if(!produto.get().usuarioEValido(usuario.get())) {
				return ResponseEntity.badRequest()
					.body(new MsgResponse("Erro: Cliente não autorizado a atualizar este produto!"));
			}

			novoProduto.setUsuario(usuario.get());
			
			produtoRepository.save(novoProduto);
			
			return ResponseEntity.ok(novoProduto);
		
		} catch (Exception e) {
			
			return ResponseEntity.internalServerError().body(
					new MsgResponse("Erro ao atualizar o produto!"));
		}
	}
	
	@DeleteMapping
	public ResponseEntity<?> deleteProduto(
			@RequestHeader("Authorization") String token,
			@RequestParam(name = "produtoId") Integer produtoId){
		
		try {
		
			token = token.substring(7, token.length());
			String usuarioEmail = jwtUtils.getUserNameFromJwtToken(token);
			
			Optional<Usuario> usuario = usuarioRepository.findByEmail(usuarioEmail);
			if(usuario.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Cliente não encontrado!"));
			}
			
			Optional<Produto> produto = produtoRepository.findById(produtoId);
			if(produto.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Produto não encontrado!"));
			}
			
			if(!produto.get().usuarioEValido(usuario.get())) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Cliente não autorizado a deletar este produto!"));
			}
			
			produtoRepository.deleteById(produto.get().getId());
			
			return ResponseEntity.ok(new MsgResponse("Produto deletado com sucesso!"));
				
		} catch (Exception e) {
			
			return ResponseEntity.internalServerError().body(
					new MsgResponse("Erro ao deletar o produto!"));
		}
	}
	
	@GetMapping
	public ResponseEntity<?> getMeusProdutos(
			@RequestHeader("Authorization") String token,
			@RequestParam(name = "inicio", defaultValue = "0") int inicio,
			@RequestParam(name = "qtd", defaultValue = "5") int qtd){
		
		try {

			token = token.substring(7, token.length());
			String usuarioEmail = jwtUtils.getUserNameFromJwtToken(token);
			
			Optional<Usuario> usuario = usuarioRepository.findByEmail(usuarioEmail);
			if(usuario.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Cliente não encontrado!"));
			}
			
			List<Produto> produtos = usuario.get().getProdutos();

			List<Produto> produtosInvertido = new ArrayList<>();
			int total = produtos.size();
			for (int i = total - 1; i >= 0; i--) {
				produtosInvertido.add(produtos.get(i));
			}
			
			int resto = total - inicio;
			qtd = (resto < qtd) ? resto : qtd;
			
			List<Produto> produtosResponse = new ArrayList<>();
			for (int i = inicio; i < (inicio + qtd); i++) {
				produtosResponse.add(produtosInvertido.get(i));
			}
			
			return ResponseEntity.ok(produtosResponse);
			
		} catch (Exception e) {
			
			return ResponseEntity.internalServerError().body(
					new MsgResponse("Erro na obtenção dos produtos!"));
		}
	}
}