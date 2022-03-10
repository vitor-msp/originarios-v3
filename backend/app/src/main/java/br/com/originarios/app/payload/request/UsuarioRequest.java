package br.com.originarios.app.payload.request;

import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

public class UsuarioRequest {
	
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
	private String senha;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
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
}