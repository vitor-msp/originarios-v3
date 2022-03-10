package br.com.originarios.app.models.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;

import br.com.originarios.app.models.entities.Publicacao;

public interface PublicacaoRepository extends PagingAndSortingRepository<Publicacao, Integer> {

}