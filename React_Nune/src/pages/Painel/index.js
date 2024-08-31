import './index.scss'
import axios from 'axios'
import { Box, Modal } from "@mui/material";
import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card_adicionar from '../../components/Card_adicionar';
import Card_detalhe from '../../components/Card_detalhe'
import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toastify'
import * as produtoApi from '../../Api/produtoApi'

const style = {
    position: 'absolute',
    top: '50%',
    left: "50%",
    transform: 'translate(-50%, -50%)'
};


export default function Painel() {
    const [open, setOpenAdicionar] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);
    const [editedItem, setEditedItem] = useState(null);
    const [item, setItem] = useState(null);
    const [listaFigures, setListaFigures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    useEffect(() => {
        fetchFigures();
    }, []);

    async function fetchFigures() {
        try {
            const info = await produtoApi.buscarProdutos();
            setListaFigures(info);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    async function removerFigure(item) {
        confirmAlert({
            title: 'Remover Figure',
            message: 'Tem certeza que vai remover a Figure?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        let r = await produtoApi.removerProduto(item.id);
                        toast.success('Figure removido com sucesso.');
                        fetchFigures();
                    }
                },
                { label: 'Não' }
            ]
        });
    }

    const handleOpen = (e, item) => {
        switch (e) {
            case 1:
                setOpenAdicionar(true);
                break;
            case 2:
                setEditedItem(item);
                setOpenAdicionar(true);
                break;
            case 3:
                setItem(item);
                setOpenDetail(true);
            default:
                break;
        }
    };

    const handleClose = () => {
        setOpenAdicionar(false);
        setOpenDetail(false);
        setEditedItem(null);
        setItem(null);
    };

    const filteredlista = listaFigures.filter(item =>
        item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className='painel_page'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Card_adicionar item={editedItem} onClose={handleClose} onSave={fetchFigures} />
                </Box>
            </Modal>
            <Header opcao={2} />
            <div className='painel_content'>
                <button onClick={() => handleOpen(1,null)}>
                    <img src='/assets/image/plus.png' alt='plus icone' />
                    <span>Adcionar um produto</span>
                </button>
                <div className='input-section'>
                    <img src='/assets/image/lupa.png' alt='lupa icone' />
                    <input type="text" className="input_card" value={searchTerm} onChange={handleSearch} />
                </div>
            </div>

            <section className='produto_section'>
                <h1>Produtos</h1>
                <table className='produto_tabela'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredlista.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.preco}</td>
                                <td>
                                    <button onClick={() => handleOpen(2,item)} className='edit' >Editar</button>
                                    <button onClick={() => removerFigure(item)} className='delete'>Excluir</button>
                                    <button onClick={() => handleOpen(3,item)} className='detail' >Detalhe</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <Modal
                open={openDetail}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Card_detalhe item={item} onClose={handleClose} />
                </Box>
            </Modal>

            <Footer />
        </section>
    )
}