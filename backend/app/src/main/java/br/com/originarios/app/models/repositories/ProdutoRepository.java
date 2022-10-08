package br.com.originarios.app.models.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;

import br.com.originarios.app.models.entities.Produto;


public interface ProdutoRepository extends PagingAndSortingRepository<Produto, Integer> {
}