import React, { useState } from 'react';
import TrailerModal from '../components/TrailerModal';
import MovieRow from '../components/MovieRow';

const melhoresFilmes = [
  '/IMG/CARTAZ/CITYOFGOD.jpg', '/IMG/CARTAZ/HER.jpg', '/IMG/CARTAZ/seven.jpg', '/IMG/CARTAZ/OSINFILTRADOS.jpg',
  '/IMG/CARTAZ/OPREDESTINADO.jpg', '/IMG/CARTAZ/aindaestouaqui.jpg', '/IMG/CARTAZ/PARASITA.jpg', '/IMG/CARTAZ/INFILTRADOSNAKLAN.jpg',
  '/IMG/CARTAZ/corra.jpg', '/IMG/CARTAZ/semlimites.jpg', '/IMG/CARTAZ/spiderman.jpg', '/IMG/CARTAZ/vingadoresultimato.jpg',
  '/IMG/CARTAZ/johnwick.jpg', '/IMG/CARTAZ/anonimo.jpg', '/IMG/CARTAZ/invocaçaodomal.jpg', '/IMG/CARTAZ/invocaçaodomal2.jpg'
];

const seriesEmAlta = [
  '/IMG/SERIES/strangerthings.jpg', '/IMG/SERIES/dark.jpg', '/IMG/SERIES/Breakingbad.jpg', '/IMG/SERIES/TheWalkingDead.jpg',
  '/IMG/SERIES/mindhunter.jpg', '/IMG/SERIES/narcos.jpg', '/IMG/SERIES/sopranos.jpg', '/IMG/SERIES/Eternauta.jpg',
  '/IMG/SERIES/b99.jpg', '/IMG/SERIES/theoffice.jpg', '/IMG/SERIES/greyanatomy.jpg', '/IMG/SERIES/prisonbreaking.jpg',
  '/IMG/SERIES/you.jpg', '/IMG/SERIES/friends.jpg', '/IMG/SERIES/thelastofus.jpg', '/IMG/SERIES/ruptura.jpg'
];

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const toggleVideo = () => setIsVideoOpen(!isVideoOpen);

  return (
    <div style={{ paddingBottom: '50px' }}>
      <section className="main-banner">
        <div className="banner-video-container">
          <iframe 
            src="https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=zSWdZVtXT7E" 
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <div className="maturity-rating">
          <span className="age-rating age-10">10</span>
        </div>
        <div className="banner-info" style={{ zIndex: 10 }}>
          <h1>Interestellar</h1>
          <p>
            As reservas naturais da Terra estão chegando ao fim e um grupo de
            astronautas recebe a missão de verificar possíveis planetas para
            receberem a população mundial, possibilitando a continuação da
            espécie. Cooper é chamado para liderar o grupo e aceita a missão
            sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e
            Doyle, ele seguirá em busca de um novo lar.
          </p>
          <div className="banner-buttons">
            <button className="btn-play" onClick={toggleVideo}>Assistir</button>
            <button className="btn-info">Mais Informações</button>
          </div>
        </div>
      </section>

      <TrailerModal 
        isOpen={isVideoOpen} 
        onClose={toggleVideo} 
        videoSrc="https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1" 
      />

      <div className="movie-rows-container">
        <MovieRow title="Sessão Melhores Filmes" items={melhoresFilmes} />
        <MovieRow title="Séries em Alta" items={seriesEmAlta} />
      </div>
    </div>
  );
}
