package br.com.originarios.app.models.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonIgnore
	private Integer id;
	
	@NotBlank
	@Size(max = 50)
	private String nome;
	
	@NotBlank
	@Size(min = 11, max = 11)
	private String cpf;
	
	@NotBlank
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date dataNascimento;
	
	@NotBlank
	@Size(max = 30)
	private String assinatura;
	
	@Size(max = 30)
	private String cidade;
	
	@Size(max = 2)
	private String uf;
	
	@NotBlank
	@Size(max = 30)
	private String tribo;
	
	@NotBlank
	@Size(max = 2)
	private String ddd;
	
	@NotBlank
	@Size(max = 10)
	private String telefone;
	
	@NotBlank
	@Email
	@Size(max = 30)
	private String email;
	
	@NotBlank
	@Size(max = 100)
	@JsonIgnore
	private String senha;
	
	@OneToMany(mappedBy = "usuario", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Produto> produtos;
	
	@OneToMany(mappedBy = "usuario", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Publicacao> publicacoes;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
		if(this.assinatura == null) {
			setAssinatura(nome.substring(0, 30));
		}
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getAssinatura() {
		return assinatura;
	}

	public void setAssinatura(String assinatura) {
		this.assinatura = assinatura;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public String getTribo() {
		return tribo;
	}

	public void setTribo(String tribo) {
		this.tribo = tribo;
	}

	public String getDdd() {
		return ddd;
	}

	public void setDdd(String ddd) {
		this.ddd = ddd;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public List<Produto> getProdutos() {
		if(this.produtos == null) {
			this.produtos = new ArrayList<>();
		}
		return produtos;
	}

	public void setProdutos(List<Produto> produtos) {
		this.produtos = produtos;
	}

	public List<Publicacao> getPublicacoes() {
		if(this.publicacoes == null) {
			this.publicacoes = new ArrayList<>();
		}
		return publicacoes;
	}

	public void setPublicacoes(List<Publicacao> publicacoes) {
		this.publicacoes = publicacoes;
	}
}