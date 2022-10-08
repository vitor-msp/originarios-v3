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

import br.com.originarios.app.models.entities.Publicacao;
import br.com.originarios.app.models.repositories.PublicacaoRepository;
import br.com.originarios.app.payload.response.MsgResponse;
import br.com.originarios.app.payload.response.PublicacaoResponse;
import br.com.originarios.app.payload.response.UsuarioResponse;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/publicacoes")
public class PublicacoesController{

	@Autowired
	PublicacaoRepository publicacaoRepository;
	
	@GetMapping
	public ResponseEntity<?> getPublicacoes(
			@RequestParam(name = "pagina", defaultValue = "0") int pagina,
			@RequestParam(name = "qtd", defaultValue = "5") int qtd){		
		try {
			
			Pageable page = PageRequest.of(pagina, qtd,
					Sort.by("id").descending());
			
			List<Publicacao> publicacoes = publicacaoRepository.findAll(page).getContent();
			
			List<PublicacaoResponse> publicacoesResponse = new ArrayList<>();
			for (Publicacao publicacao: publicacoes) {
				
				PublicacaoResponse publicacaoResponse = new PublicacaoResponse();
				publicacaoResponse.setPublicacao(publicacao);
				
				UsuarioResponse usuarioResponse = new UsuarioResponse();
				usuarioResponse.setTribo(publicacao.getUsuario().getTribo());
				usuarioResponse.setAssinatura(publicacao.getUsuario().getAssinatura());
				publicacaoResponse.setUsuarioResponse(usuarioResponse);
				
				publicacoesResponse.add(publicacaoResponse);
			}
			
			return ResponseEntity.ok(publicacoesResponse);

		} catch (Exception e) {

			return ResponseEntity.internalServerError()
					.body(new MsgResponse("Erro ao obter as publicações!"));		
		}
	}
}