import './index.scss'
import {API_ADDRESS} from '../../Api/constant'

export default function Card_detalhe({item}) {
    const imagem = item.imagem ? `${API_ADDRESS}/${item.imagem.replace(/\\/g, '/')}`: null;

    return(
        <div className='card_detalhe_component'>

            <div className='img_area'>
                <img src={imagem}alt='produto imagem' />
            </div>

            <div className='detais_area'>
                <div className='details_1'>
                    <h2>{item.nome}</h2>
                    <p>Descrição : {item.descricao}</p>
                </div>
                <div className='detail_2'>
                    <h2>R$ {item.preco}</h2>
                </div>

            </div>

        </div>
    )
    
}