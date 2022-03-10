package br.com.originarios.app.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.originarios.app.models.entities.Contato;
import br.com.originarios.app.models.repositories.ContatoRepository;
import br.com.originarios.app.payload.response.MsgResponse;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/contato")
public class ContatoController{

	@Autowired
	ContatoRepository contatoRepository;
	
	@PostMapping
	public ResponseEntity<?> postContato(@Valid @RequestBody Contato contato){
		try {
			
			contatoRepository.save(contato);
			return ResponseEntity.ok(new MsgResponse("Contato efetuado com sucesso!"));

		} catch (Exception e) {

			return ResponseEntity.internalServerError()
					.body(new MsgResponse("Erro ao efetuar o contato!"));
		}
	}
}
