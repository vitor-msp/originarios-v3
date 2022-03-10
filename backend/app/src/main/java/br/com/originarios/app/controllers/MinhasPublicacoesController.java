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

import br.com.originarios.app.models.entities.Publicacao;
import br.com.originarios.app.models.entities.Usuario;
import br.com.originarios.app.models.repositories.PublicacaoRepository;
import br.com.originarios.app.models.repositories.UsuarioRepository;
import br.com.originarios.app.payload.response.MsgResponse;
import br.com.originarios.app.security.jwt.JwtUtils;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/minhas-publicacoes")
public class MinhasPublicacoesController{
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	@Autowired
	PublicacaoRepository publicacaoRepository;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@PostMapping
	public ResponseEntity<?> postPublicacao(
			@RequestHeader("Authorization") String token,
			@RequestBody Publicacao publicacao){
		
		try {
			
			token = token.substring(7, token.length());
			String usuarioEmail = jwtUtils.getUserNameFromJwtToken(token);
			
			Optional<Usuario> usuario = usuarioRepository.findByEmail(usuarioEmail);
			if(usuario.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Cliente não encontrado!"));
			}
			
			publicacao.setUsuario(usuario.get());
		
			publicacaoRepository.save(publicacao);
			
			return ResponseEntity.ok(publicacao);
		
		} catch (Exception e) {
			
			return ResponseEntity.internalServerError().body(
					new MsgResponse("Erro ao cadastrar a publicacao!"));
		}
	}

	@PutMapping
	public ResponseEntity<?> putPublicacao(
			@RequestHeader("Authorization") String token,
			@RequestBody Publicacao novaPublicacao){
		
		try {
			
			token = token.substring(7, token.length());
			String usuarioEmail = jwtUtils.getUserNameFromJwtToken(token);
			
			Optional<Usuario> usuario = usuarioRepository.findByEmail(usuarioEmail);
			if(usuario.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Cliente não encontrado!"));
			}
			
			Optional<Publicacao> publicacao = publicacaoRepository.findById(novaPublicacao.getId());
			if(publicacao.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Publicação não encontrada!"));
			}
			
			if(!publicacao.get().usuarioEValido(usuario.get())) {
				return ResponseEntity.badRequest()
					.body(new MsgResponse("Erro: Cliente não autorizado a atualizar esta publicação!"));
			}

			novaPublicacao.setUsuario(usuario.get());
			
			publicacaoRepository.save(novaPublicacao);
			
			return ResponseEntity.ok(novaPublicacao);
		
		} catch (Exception e) {
			
			return ResponseEntity.internalServerError().body(
					new MsgResponse("Erro ao atualizar a publicação!"));
		}
	}
	
	@DeleteMapping
	public ResponseEntity<?> deletePublicacao(
			@RequestHeader("Authorization") String token,
			@RequestParam(name = "publicacaoId") Integer publicacaoId){
		
		try {
		
			token = token.substring(7, token.length());
			String usuarioEmail = jwtUtils.getUserNameFromJwtToken(token);
			
			Optional<Usuario> usuario = usuarioRepository.findByEmail(usuarioEmail);
			if(usuario.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Cliente não encontrado!"));
			}
			
			Optional<Publicacao> publicacao = publicacaoRepository.findById(publicacaoId);
			if(publicacao.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Publicação não encontrada!"));
			}
			
			if(!publicacao.get().usuarioEValido(usuario.get())) {
				return ResponseEntity.badRequest()
					.body(new MsgResponse("Erro: Cliente não autorizado a deletar esta publicação!"));
			}
			
			publicacaoRepository.deleteById(publicacao.get().getId());
			
			return ResponseEntity.ok(new MsgResponse("Publicação deletada com sucesso!"));
				
		} catch (Exception e) {
			
			return ResponseEntity.internalServerError().body(
					new MsgResponse("Erro ao deletar a publicação!"));
		}
	}
	
	@GetMapping
	public ResponseEntity<?> getMinhasPublicacoes(
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
			
			List<Publicacao> publicacoes = usuario.get().getPublicacoes();

			List<Publicacao> publicacoesInvertido = new ArrayList<>();
			int total = publicacoes.size();
			for (int i = total - 1; i >= 0; i--) {
				publicacoesInvertido.add(publicacoes.get(i));
			}
			
			int resto = total - inicio;
			qtd = (resto < qtd) ? resto : qtd;
			
			List<Publicacao> publicacoesResponse = new ArrayList<>();
			for (int i = inicio; i < (inicio + qtd); i++) {
				publicacoesResponse.add(publicacoesInvertido.get(i));
			}
			
			return ResponseEntity.ok(publicacoesResponse);
			
		} catch (Exception e) {
			
			return ResponseEntity.internalServerError().body(
					new MsgResponse("Erro na obtenção das publicações!"));
		}
	}
}