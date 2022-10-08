package br.com.originarios.app.models.repositories;

import org.springframework.data.repository.CrudRepository;

import br.com.originarios.app.models.entities.Imagem;

public interface ImagemRepository extends CrudRepository<Imagem, Integer> {
}