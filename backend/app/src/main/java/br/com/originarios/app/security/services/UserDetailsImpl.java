package br.com.originarios.app.security.services;

import java.util.Collection;
import java.util.Objects;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.originarios.app.models.entities.Usuario;

public class UserDetailsImpl implements UserDetails {
	
	private static final long serialVersionUID = 1L;
	private int id;	
	private String email;	
	@JsonIgnore
	private String senha;
	
	public UserDetailsImpl(int id, String email, String senha) {
		this.id = id;
		this.email = email;
		this.senha = senha;
	}
	
	public static UserDetailsImpl build(Usuario usuario) {
		return new UserDetailsImpl(
				usuario.getId(),
				usuario.getEmail(),
				usuario.getSenha());
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}
	public int getId() {
		return id;
	}
	@Override
	public String getPassword() {
		return senha;
	}
	@Override
	public String getUsername() {
		return email;
	}
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	@Override
	public boolean isEnabled() {
		return true;
	}
	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		UserDetailsImpl user = (UserDetailsImpl) o;
		return Objects.equals(id, user.id);
	}
}