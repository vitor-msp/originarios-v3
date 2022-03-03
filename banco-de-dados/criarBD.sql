create database Originarios;
go
use Originarios;
go
create table Usuario (
  id_usu int identity(1,1),
  nome nvarchar(50) not null,
  cpf char(11) not null,
  dt_nasc date not null,
  email nvarchar(30) not null,
  cidade nvarchar(30),
  estado char(2),
  ddd char(2) not null,
  whatsapp varchar(10) not null,
  tribo nvarchar(30) not null,
  assinatura nvarchar(30),
  constraint pk_usu primary key (id_usu)
);
go
create table Postagem (
  id_post int identity(1,1),
  usuario int not null,
  titulo nvarchar(30) not null,
  descricao nvarchar(100) not null,
  corpo varchar(5000),
  nm_img1 nvarchar(20),
  vb_img1 varbinary(max),
  nm_img2 nvarchar(20),
  vb_img2 varbinary(max),
  nm_img3 nvarchar(20),
  vb_img3 varbinary(max),
  nm_img4 nvarchar(20),
  vb_img4 varbinary(max),
  valor decimal (7,2),
  constraint pk_post primary key (id_post),
  constraint fk_post_usu foreign key (usuario) references Usuario (id_usu)
);
go
create table Contato (
  id_ctt int identity(1,1),
  nome nvarchar(50) not null,
  email nvarchar(30) not null,
  endereco nvarchar(70),
  assunto nvarchar(30) not null,
  mensagem nvarchar(2000) not null,
  constraint pk_contato primary key (id_ctt)
);
go
create table Publicacao (
  id_public int identity(1,1),
  usuario int not null,
  titulo nvarchar(100) not null,
  corpo varchar(5000),
  locali varchar(20),
  data_public varchar(10),
  constraint pk_public primary key (id_public),
  constraint fk_public_usu foreign key (usuario) references Usuario (id_usu)
);