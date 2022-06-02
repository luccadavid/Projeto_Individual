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
nome varchar(45)
);

insert into jogador values
	(10, 'Rony Rústico'),
	(23, 'Raphael Veiga'),
	(21, 'Weverton'),
	(7, 'Dudu'),
	(15, 'Gustavo Gómez');