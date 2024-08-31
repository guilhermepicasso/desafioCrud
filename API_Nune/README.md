# Back-end ToyArk

## Descrição
**ToyArk** é um site desenvolvido para uma loja de bonecos de ação que vende principalmente action figures de heróis, animes e jogos. O site funciona como uma vitrine online, apresentando os produtos disponíveis, além de oferecer uma tela de login funcional e uma área de administração para gerenciar o conteúdo.Esse Repositório é destinado para o Back-end da aplicação.

## Funcionalidades
- **Landing Page:**
  - Exibição de action figures disponíveis para venda
  - Galeria de imagens dos produtos
  - Informações de contato e localização

- **Tela de Login:**
  - Autenticação de usuários

- **Área de Administração:**
  - Acesso restrito apenas para administradores
  - Gerenciamento de produtos e suas descrições (preço, categoria e dimensões)
  - Criação, leitura, atualização e exclusão (CRUD) de produtos e imagens

## Tecnologias Utilizadas
- **Frontend:**
  - **React.js:** Biblioteca JavaScript para construção da interface do usuário
  - **Axios:** Biblioteca para realizar requisições HTTP

- **Backend:**
  - **Node.js:** Ambiente de execução para JavaScript no servidor
  - **Express.js:** Framework para Node.js
  - **MySQL:** Banco de dados relacional
  - **Multer:** Para criação de Storage e armazenamento de imagens.
 
## Setup

Para configurar o ambiente de desenvolvimento do backend do ToyArk, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados. Você pode verificar isso com os seguintes comandos:

```bash
node -v
npm -v
```

### 1. Clone o Repositório

```bash
git clone https://github.com/guilhermepicasso/API_ToyArk.git
```
### 2. Instale as Dependências

```bash
cd api
npm install
```
### 3.Configure o Banco de Dados

Para o programa funcionar você precisa ter instalado na sua máquina o MySQL Workbench e inserir a database do sistema.Caso não saiba utilizar a ferramenta aconselho a seguir esse tutorial : https://www.alura.com.br/artigos/mysql-do-download-e-instalacao-ate-sua-primeira-tabela?srsltid=AfmBOooNptdzLpCDZzjtEjxHK5ImigrIHQZmg6w-a9p8lOBwnX_y_xpw

#### Database do sistema

```sql
create database toyArk;
use toyArk;

create table figure (

idFigure int auto_increment primary key,
nome varchar(50) not null,
preco decimal(15,2),
altura decimal(15,2),
largura decimal(15,2),
categoria varchar(50),
imagem varchar(255)

);
```

#### Configure as Variáveis de Ambiente

Crie um arquivo .env se não tiver na raiz do projeto e adicione as seguintes variáveis de ambiente:

```dotenv
PORT=5000


MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PWD=Senha
MYSQL_DB=NomeDatabase
```

### 4. Execute o servidor

```bash
npm start
```

Ao executar o comando o sistema vai retornar uma mensagem caso o servidor funcione:

```bash
Connection with Database 
API START
```

## Links
- **Figma link** https://www.figma.com/design/U9xPJgiGwoGZYTBbsLa3y1/TOY-ARK?node-id=0-1&t=dyhL40igAEGafmT9-1
- **React_App** https://github.com/guilhermepicasso/React_ToyArk
