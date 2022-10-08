package br.com.originarios.app.payload.response;

public class MsgResponse {

  private String mensagem;

  public MsgResponse(String mensagem) {
    setMensagem(mensagem);
  }

  public String getMensagem() {
    return mensagem;
  }

  public void setMensagem(String mensagem) {
    this.mensagem = mensagem;
  }
}