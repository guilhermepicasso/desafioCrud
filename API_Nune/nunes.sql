create database NuneSports;
use NuneSports;

create table produtos (

idProduto int auto_increment primary key,
nome varchar(50) not null,
preco decimal(15,2),
decricao varchar(200),
imagem varchar(255)

);

select * from produtos;