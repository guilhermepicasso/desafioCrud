import './index.scss'
import {API_ADDRESS} from '../../Api/constant'
import React, { useState } from 'react';
import { Box, Modal } from "@mui/material";
import Card_detalhe from '../Card_detalhe'

const style = {
    position: 'absolute',
    top: '50%',
    left: "50%",
    transform: 'translate(-50%, -50%)'
};

export default function Card_produto({item}) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const imagem = item.imagem ? `${API_ADDRESS}/${item.imagem.replace(/\\/g, '/')}`: 'null';
    return (
        <div className='card_produto_component'>
            
            <div className='img_produto'>
                <img src={imagem} alt='produto imagem' />
            </div>

            <div className='card_detalhes'>
                <div>
                    <h2>{item.nome}</h2>
                    <span>{item.categoria}</span>
                </div>
                <h2>R$ {item.preco}</h2>
            </div>
            <div className='button'>
                <a onClick={handleOpen}>
                    <span>Detalhes</span>
                </a>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Card_detalhe item={item} onClose={handleClose} />
                </Box>
            </Modal>


        </div>
    )

}