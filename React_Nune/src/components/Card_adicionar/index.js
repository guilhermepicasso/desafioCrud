import './index.scss'
import axios from 'axios'
import { useState, useEffect } from 'react';
import * as produtoApi from '../../Api/produtoApi'
import { toast } from 'react-toastify'
import { API_ADDRESS } from '../../Api/constant'

export default function Card_adicionar({ onClose, item, onSave }) {
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [arquivoImagem, setArquivoImagem] = useState(null);
    const [imagemAlterada, setImagemAlterada] = useState(false);

    useEffect(() => {
        if (item) {
            setId(item.id || '');
            setNome(item.nome || '');
            setPreco(item.preco || '');
            setDescricao(item.descricao || '');
            const imagemURL = item.imagem ? `${API_ADDRESS}/${item.imagem.replace(/\\/g, '/')}` : null;
            setImagem(imagemURL || '');
        }
    }, [item]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setArquivoImagem(file);
            setImagem(URL.createObjectURL(file));
            setImagemAlterada(true);
        }
    };

    async function salvar() {
        try {
            if (!nome || !preco || !descricao || !imagem) {
                toast.warning("Todos os campos devem ser preenchidos");
            } else {
                let corpo = {
                    "nome": nome,
                    "preco": preco,
                    "descricao": descricao,
                };
                if (!id) {
                    try {
                        let info = await produtoApi.salvarProduto(corpo);
                        await produtoApi.alterarImagem(info.id, arquivoImagem);
                        toast.success('Produto inserido com ID: ' + info.id);
                    } catch (error) {
                        toast.error('Erro ao inserir o Produto: ' + error.message);
                    }
                } else {
                    try {
                        let editItem = { ...corpo, id };
                        await produtoApi.alterarProduto(editItem.id, editItem);
                        if (imagemAlterada) {
                            await produtoApi.alterarImagem(editItem.id, arquivoImagem);
                            toast.success('Imagem Alterada');
                        }
                        toast.success('Produto alterado com sucesso.');
                    } catch (error) {
                        toast.error('Erro ao alterar o produto: ' + error.message);
                    }
                }
                onClose();
                onSave();
            }
        } catch (error) {
            toast.error('Ocorreu um erro inesperado: ' + error.message);
            console.error("Erro:", error);
        }
    }

    return (
        <div className='card_adicionar_component'>
            <h1>{id ? 'Editar Produto' : 'Adicionar um Produto'}</h1>

            <div className='area_arquivo'>
                <label className='arquivo_campo'>
                    <input type="file" name="imagem" onChange={handleFileChange} style={{ display: 'none' }} />
                    {imagem === null ?
                        <img src='/assets/image/plus.png' className='icon' /> :
                        <img src={imagem} alt="Imagem selecionada" className='imagem_nova' />
                    }
                </label>
            </div>

            <div className='inputs_section'>
                <input className='input_1'
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                />

                <input className='input_2'
                    type="number"
                    value={preco}
                    onChange={e => setPreco(e.target.value)}
                    id="preco"
                    name="preco"
                    placeholder="Preço"
                />

                <textarea className='input_3'
                    id="descricao"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                    placeholder="Digite a descrição do produto aqui..."
                    rows="5" 
                    cols="50" 
                />
            </div>

            <div className='area_buton'>
                <button className='button_salvar' onClick={salvar} >Salvar</button>
            </div>

        </div>
    )




}