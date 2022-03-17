package br.com.originarios.app.controllers;

import java.util.Base64;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.originarios.app.models.entities.Imagem;
import br.com.originarios.app.models.repositories.ImagemRepository;
import br.com.originarios.app.payload.response.MsgResponse;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/imagens")
public class ImagensController{
	
	@Autowired
	ImagemRepository imagemRepository;
	
	@GetMapping("/{imagemId}")
	public ResponseEntity<?> obterImagem(@PathVariable Integer imagemId){
		try {
			
			Optional<Imagem> imagemOpt = imagemRepository.findById(imagemId);
			
			if(imagemOpt.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Imagem não encontrada!"));
			}
			
			Imagem imagem = imagemOpt.get();
			return ResponseEntity.ok()
					.contentType(MediaType.parseMediaType(imagem.getTipo()))
					.header(HttpHeaders.CONTENT_DISPOSITION,
							"attachment:filename=\"" + imagem.getNome() + "\"")
					.body(new ByteArrayResource(imagem.getDados()));
		
		} catch (Exception e) {
			
			return ResponseEntity.internalServerError().body(
					new MsgResponse("Erro ao obter a imagem!"));
		}
	}
	
	@GetMapping("/dados/{imagemId}")
	public ResponseEntity<?> obterDadosImagem(@PathVariable Integer imagemId){
		try {
			
			Optional<Imagem> imagemOpt = imagemRepository.findById(imagemId);
			
			if(imagemOpt.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MsgResponse("Erro: Imagem não encontrada!"));
			}
			
			Imagem imagem = imagemOpt.get();
			return ResponseEntity.ok()
					.body(Base64.getEncoder().encodeToString(imagem.getDados()));

		} catch (Exception e) {
			
			return ResponseEntity.internalServerError().body(
					new MsgResponse("Erro ao obter a imagem!"));
		}
	}
}