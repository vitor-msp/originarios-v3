package br.com.originarios.app.models.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Produto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotNull
	@ManyToOne
	@JsonIgnore
	private Usuario usuario;
	
	@NotBlank
	@Size(max = 30)
	private String titulo;
	
	@NotBlank
	@Size(max = 100)
	private String descricao;
	
	@Size(max = 5000)
	private String corpo;
	
	@Min(0)
	private Double valor;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Imagem imagem1;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Imagem imagem2;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Imagem imagem3;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Imagem imagem4;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getCorpo() {
		return corpo;
	}

	public void setCorpo(String corpo) {
		this.corpo = corpo;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}

	public Imagem getImagem1() {
		return imagem1;
	}

	public void setImagem1(Imagem imagem1) {
		this.imagem1 = imagem1;
	}

	public Imagem getImagem2() {
		return imagem2;
	}

	public void setImagem2(Imagem imagem2) {
		this.imagem2 = imagem2;
	}

	public Imagem getImagem3() {
		return imagem3;
	}

	public void setImagem3(Imagem imagem3) {
		this.imagem3 = imagem3;
	}

	public Imagem getImagem4() {
		return imagem4;
	}

	public void setImagem4(Imagem imagem4) {
		this.imagem4 = imagem4;
	}

	public boolean usuarioEValido(Usuario usuario) {
		
		if(this.getUsuario() != null && this.getUsuario().getId() == usuario.getId()) {
			return true;
		}
		
		return false;
	}
}
