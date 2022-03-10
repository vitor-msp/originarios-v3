package br.com.originarios.app.controllers;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.originarios.app.models.entities.Usuario;
import br.com.originarios.app.models.repositories.UsuarioRepository;
import br.com.originarios.app.payload.request.MudarSenhaRequest;
import br.com.originarios.app.payload.request.UsuarioRequest;
import br.com.originarios.app.payload.response.MsgResponse;
import br.com.originarios.app.security.jwt.JwtUtils;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/usuario")
public class UsuarioController{
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	public boolean validarSenha(Usuario usuario, String senha){
		
			return encoder.matches(senha, usuario.getSenha());
	}
	
	@GetMapping
	public ResponseEntity<?> getUsuario(
			@RequestHeader("Authorization") String token){

		try {
			
			token = token.substring(7, token.length());
			String usuarioEmail = jwtUtils.getUserNameFromJwtToken(token);
			
			Optional<Usuario> usuarioOpt = usuarioRepository.findByEmail(usuarioEmail);
			if(usuarioOpt.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Cliente não encontrado!"));
			}
				
			return ResponseEntity.ok(usuarioOpt.get());
			
		} catch (Exception e) {
			
			return ResponseEntity.internalServerError().body(
					new MsgResponse("Erro ao obter os dados do cliente!"));
		}
	}
	
	@PutMapping
	public ResponseEntity<?> putUsuario(
			@RequestHeader("Authorization") String token,
			@Valid @RequestBody UsuarioRequest usuarioRequest){
		
		try {
			
			token = token.substring(7, token.length());
			String usuarioEmail = jwtUtils.getUserNameFromJwtToken(token);
			
			Optional<Usuario> usuarioOpt = usuarioRepository.findByEmail(usuarioEmail);
			if(usuarioOpt.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Cliente não encontrado!"));
			}
			
			Usuario usuario = usuarioOpt.get();
			if(validarSenha(usuario, usuarioRequest.getSenha())) {
			
				usuario.setNome(usuarioRequest.getNome());
				usuario.setCpf(usuarioRequest.getCpf());
				usuario.setDataNascimento(usuarioRequest.getDataNascimento());
				usuario.setAssinatura(usuarioRequest.getAssinatura());
				usuario.setCidade(usuarioRequest.getCidade());
				usuario.setUf(usuarioRequest.getUf());
				usuario.setTribo(usuarioRequest.getTribo());
				usuario.setDdd(usuarioRequest.getDdd());
				usuario.setTelefone(usuarioRequest.getTelefone());
	
			}else {			
				return ResponseEntity.badRequest()
						.body(new MsgResponse("senhaIncorreta"));
			}
		
			usuarioRepository.save(usuario);
			return ResponseEntity.ok(new MsgResponse("Dados atualizados com sucesso!"));
		
		} catch (Exception e) {
	
			return ResponseEntity.internalServerError().body(
					new MsgResponse("Erro na atualização dos dados!"));
		}
	}

	@PutMapping("/senha")
	public ResponseEntity<?> putSenha(
			@RequestHeader("Authorization") String token,
			@Valid @RequestBody MudarSenhaRequest mudarSenhaRequest){
		
		try {
		
			token = token.substring(7, token.length());
			String usuarioEmail = jwtUtils.getUserNameFromJwtToken(token);
			
			Optional<Usuario> usuarioOpt = usuarioRepository.findByEmail(usuarioEmail);
			if(usuarioOpt.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Cliente não encontrado!"));
			}
			
			Usuario usuario = usuarioOpt.get();
			if(validarSenha(usuario, mudarSenhaRequest.getVelhaSenha())) {
			
				usuario.setSenha(encoder.encode(mudarSenhaRequest.getNovaSenha()));
	
			}else {			
				return ResponseEntity.badRequest()
						.body(new MsgResponse("senhaIncorreta"));
			}
		
			usuarioRepository.save(usuario);
			
			return ResponseEntity.ok(new MsgResponse("Senha atualizada com sucesso!"));
		
		} catch (Exception e) {
			
			return ResponseEntity.internalServerError().body(
					new MsgResponse("Erro na atualização da senha!"));
		}
	}
}