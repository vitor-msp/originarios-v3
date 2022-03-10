package br.com.originarios.app.controllers;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.originarios.app.models.entities.Usuario;
import br.com.originarios.app.models.repositories.UsuarioRepository;
import br.com.originarios.app.payload.request.LoginRequest;
import br.com.originarios.app.payload.request.UsuarioRequest;
import br.com.originarios.app.payload.response.JwtResponse;
import br.com.originarios.app.payload.response.MsgResponse;
import br.com.originarios.app.security.jwt.JwtUtils;
import br.com.originarios.app.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	UsuarioRepository usuarioRepository;

	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	JwtUtils jwtUtils;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
		
		try {
			
			Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
							loginRequest.getEmail(), loginRequest.getSenha()));;
			
			SecurityContextHolder.getContext().setAuthentication(authentication);
			String jwt = jwtUtils.generateJwtToken(authentication);
			UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
			
			JwtResponse jwtResponse = new JwtResponse(
					userDetails.getUsername(), jwt, "Bearer");
			
			return ResponseEntity.ok(jwtResponse);
			
		} catch (BadCredentialsException e) {

			return ResponseEntity.badRequest().body(new MsgResponse("emailOuSenhaIncorretos"));
		
		} catch (Exception e) {
			
			return ResponseEntity.internalServerError().body(new MsgResponse("Erro ao efetuar o login!"));
		}
	}
	
	@PostMapping("/registro")
	public ResponseEntity<?> registrarUsuario(@Valid @RequestBody UsuarioRequest usuarioRequest) {

		try {
			if (usuarioRepository.existsByEmail(usuarioRequest.getEmail())) {
				return ResponseEntity
						.badRequest()
						.body(new MsgResponse("emailJaEmUso"));
			}
			Usuario usuario = new Usuario();
			usuario.setNome(usuarioRequest.getNome());
			usuario.setCpf(usuarioRequest.getCpf());
			usuario.setDataNascimento(usuarioRequest.getDataNascimento());
			usuario.setAssinatura(usuarioRequest.getAssinatura());
			usuario.setCidade(usuarioRequest.getCidade());
			usuario.setUf(usuarioRequest.getUf());
			usuario.setTribo(usuarioRequest.getTribo());
			usuario.setDdd(usuarioRequest.getDdd());
			usuario.setTelefone(usuarioRequest.getTelefone());
			usuario.setEmail(usuarioRequest.getEmail());
			usuario.setSenha(encoder.encode(usuarioRequest.getSenha()));
	
			usuarioRepository.save(usuario);
			return ResponseEntity.ok(new MsgResponse("Usuário cadastrado com sucesso!"));
			
		} catch (Exception e) {

			return ResponseEntity.internalServerError().body(new MsgResponse("Erro ao efetuar o cadastro!"));
		}
	}
}