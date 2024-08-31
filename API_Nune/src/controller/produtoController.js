import multer from "multer";

import { salvarProduto,listarProduto,buscarPorId,removerProduto,alterarProduto,alterarImagem } from "../repository/produtoRepository.js";

import { Router } from "express";
let servidor = Router();

const upload = multer({dest:'storage/produto'})

servidor.post('/produto', async(req,resp)=>{
    let produto = req.body;

    let produtoInserido = await salvarProduto(produto);
    resp.send(produtoInserido);
})

servidor.get('/produto', async(req, resp) =>{
    let listaprodutos = await listarProduto();
    resp.send(listaprodutos);
})

servidor.get('/produto/id/:id', async(req, resp) =>{
    let listaprodutos = await buscarPorId(req.params.id);
    resp.send(listaprodutos);
})

servidor.delete('/produto/:id', async(req,resp)=>{
    let linhasAfetadas = await removerProduto(req.params.id);
    if (linhasAfetadas == 0)
        resp.status(404).send();
      else
        resp.status(202).send();
})

servidor.put('/produto/:id', async (req,resp) =>{
    let id = req.params.id;
    let produto = req.body;

    let linhasAfetadas = await alterarProduto(produto,id);
    if (linhasAfetadas == 0)
        resp.status(404).send();
      else
        resp.status(202).send();
})

servidor.put('/produto/imagem/:id', upload.single('imagem'), async (req, resp)=>{
    let id = req.params.id;
    let imagem = req.file.path;

    let linhasAfetadas = await alterarImagem(id, imagem);
    if (linhasAfetadas == 0)
        resp.status(404).send();
      else
        resp.status(202).send();
})

export default servidor;