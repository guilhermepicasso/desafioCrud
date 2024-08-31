import './index.scss';
import axios from 'axios'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card_produto from '../../components/Card_produto'

import * as produtoApi from '../../Api/produtoApi'
import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [listaFigures, setListaFigures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
    fetchFigures();
  }, []);


  return (
    <div className='landing_page'>
      <Header />

      <section className='hero'>
        <div className='hero_content'>
          <h1 className='text1'>Compre aqui e transforme seu desempenho! Seja no campo, na quadra ou na academia</h1>
          <h2 className='text2'>Acelere seus Limites. A Vitória Começa Aqui!🎉</h2>
        </div>
        <img src='/assets/image/bola.png' className='imagehero'></img>
      </section>

      <section className='produto_section'>
        <h1>Produtos</h1>

        <div className='card_produto'>
          {listaFigures.map(item => (
            <Card_produto item={item} />
          ))}
        </div>

      </section>

      <section className='Sobre_section' id='sobre'>
        <h1>Venha Conhecer a Loja</h1>
        <div className='container_sobre'>
          <div className='texto_sobre'>
            <img src='/assets/image/sportsDesenho.png'></img>
            <span>Na NunesSport, vivemos e respiramos esporte! Aqui, você encontra tudo para treinar, competir e vencer com estilo. Do iniciante ao profissional, nossa missão é equipar campeões como você. Vem com a gente e eleve seu jogo!</span>
          </div>
          <div className='img_sobre'>
            <img src='/assets/image/nune.png'></img>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

