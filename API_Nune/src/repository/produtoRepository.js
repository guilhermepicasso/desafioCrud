import con from "./connection.js";

export async function salvarProduto(produto) {
  let comando = `
    insert into produtos (nome, preco, descricao) 
                  values (?, ?, ?)
  `

  let resp = await con.query(comando, [produto.nome, produto.preco, produto.descricao])
  let info = resp[0];

  produto.id = info.insertId;
  return produto;
}

export async function listarProduto() {
  let comando = `
      select idProduto           id,
              nome              nome,
              preco             preco,
              descricao          descricao,
              imagem            imagem
       from produtos
  `

  let resp = await con.query(comando, []);
  let linhas = resp[0];

  return linhas;

}

export async function buscarPorId(id) {
  let comando = `
      select idProduto           id,
              nome              nome,
              preco             preco,
              descricao          descricao,
              imagem            imagem
       from produtos
       where idProduto = ?
  `

  let resp = await con.query(comando, [id]);
  let linhas = resp[0];

  return linhas[0];
}

export async function removerProduto(id) {
  let comando = `
      delete from produtos where idProduto = ?
    `

  let resp = await con.query(comando, [id]);
  let info = resp[0];

  return info.affectedRows;
}

export async function alterarProduto(produto, id) {
  let comando = `
      update produtos
         set nome = ?,
             preco = ?,
             descricao = ?
       where idProduto = ?
    `

  let resp = await con.query(comando, [produto.nome, produto.preco, produto.descricao, id]);
  let info = resp[0];

  return info.affectedRows;
}

export async function alterarImagem(id, caminho) {
  let comando = `
      update produtos
         set imagem = ?
       where idProduto = ?
    `

  let resp = await con.query(comando, [caminho, id]);
  let info = resp[0];

  return info.affectedRows;
}