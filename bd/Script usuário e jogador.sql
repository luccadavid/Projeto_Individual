create database palmeiras;

use palmeiras;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
cpf char(11),
senha varchar(45),
fkJogador int,
foreign key (fkJogador) references jogador (idJogador)
);

create table jogador (
idJogador int primary key,
nome varchar(45),
posicao varchar(45),
votos int
);

insert into jogador values
	(10, 'Rony Rústico', 'Atacante', null),
	(23, 'Raphael Veiga', 'Meia', null),
	(21, 'Weverton', 'Goleiro', null),
	(7, 'Dudu', 'Atacante', null),
	(15, 'Gustavo Gómez', 'Zagueiro', null);