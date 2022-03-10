package br.com.originarios.app.models.repositories;

import org.springframework.data.repository.CrudRepository;

import br.com.originarios.app.models.entities.Contato;


public interface ContatoRepository extends CrudRepository<Contato, Integer> {

}