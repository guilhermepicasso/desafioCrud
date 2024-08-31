import axios from 'axios'

import { API_ADDRESS } from './constant';

export async function salvarProduto(corpo) {
    let url = API_ADDRESS + '/produto/';
    let r = await axios.post(url, corpo);
    return r.data;
  }

  export async function alterarProduto(id, corpo) {
    let url = API_ADDRESS + '/produto/' + id;
    let r = await axios.put(url, corpo);
    return r.data;
  }

  export async function buscarProdutos() {
    let url = API_ADDRESS + '/produto/';
    let r = await axios.get(url);
    return r.data;
  }

  export async function buscarProdutoPorId(id) {
    let url = API_ADDRESS + '/produto/' + id;
    let r = await axios.get(url);
    return r.data;
  }


  export async function removerProduto(id) {
    let url = API_ADDRESS + '/produto/' + id;
    let r = await axios.delete(url);
    return r.data;
  }

  export async function alterarImagem(id, capa) {
    let url = API_ADDRESS + '/produto/imagem/' + id;
  
    let form = new FormData();
    form.append('imagem', capa);
  
    let r = await axios.put(url, form, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  
    return r.data;
  }