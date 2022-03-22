# Originários
## Projeto Final - Recode Pro 2021
### Squad 41

Desenvolvimento de um site para venda de produtos e divulgação cultural indígena.
Versão 3: ReactJS, Spring, PostgreSQL.

Link da aplicação funcional: <a href="https://originarios.herokuapp.com/" target="_blank">Originários</a>

Veja a demo do site em: demo/demo.mp4

<div align="center">
  <img alt="readme" title="readme" src="./gif/readme.gif"/>
</div>

#### Modelagem Entidade-Relacionamento
![Modelagem Entidade-Relacionamento](./banco-de-dados/modelagem_ER.png)

#### Instalação e Configuração

###### 1. Banco de dados
1. Será necessário ter o PostgreSQL instalado e sem um banco de dados de nome *originarios*.
2. Rode o script banco-de-dados/criarBD.sql no PostgreSQL ou crie um banco de dados chamado *originarios* manualmente.

###### 2. Backend
1. Na sua IDE (Eclipse, STS, etc), adicione o projeto existente na pasta backend/app ao seu workspace.
2. Renomeie o arquivo backend/app/src/main/resources/application.properties.sample para 'application.properties', depois insira seu usuário e senha do PostgreSQL nas linhas 2 e 3.
```
spring.datasource.username=
spring.datasource.password=
```
3. Rode a aplicação java com o Spring Boot para que as tabelas sejam criadas no banco de dados.

###### 3. Frontend
1. Execute o comando abaixo na pasta frontend para instalar as dependencias do React:
```
npm install
```

#### Execução
Inicie o banco de dados PostgreSQL e a aplicação java na sua IDE e execute um dos comandos abaixo na pasta frontend para rodar o React:
```
npm start
```
ou

```
yarn start
```
Após todas as aplicações iniciarem corretamente, o sistema estará em funcionamento e você poderá visualizar o resultado no link onde o React será aberto (geralmente http://localhost:3000).