import { useState } from 'react';
import TrailerModal from '../components/TrailerModal';
import MovieRow from '../components/MovieRow';

const seriesEmAlta = [
  '/IMG/SERIES/strangerthings.jpg', '/IMG/SERIES/dark.jpg', '/IMG/SERIES/Breakingbad.jpg', '/IMG/SERIES/TheWalkingDead.jpg',
  '/IMG/SERIES/mindhunter.jpg', '/IMG/SERIES/narcos.jpg', '/IMG/SERIES/sopranos.jpg', '/IMG/SERIES/Eternauta.jpg',
  '/IMG/SERIES/b99.jpg', '/IMG/SERIES/theoffice.jpg', '/IMG/SERIES/greyanatomy.jpg', '/IMG/SERIES/prisonbreaking.jpg',
  '/IMG/SERIES/you.jpg', '/IMG/SERIES/friends.jpg', '/IMG/SERIES/thelastofus.jpg', '/IMG/SERIES/ruptura.jpg'
];

export default function Series() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const toggleVideo = () => setIsVideoOpen(!isVideoOpen);

  return (
    <div style={{ paddingBottom: '50px' }}>
      <section className="main-banner">
        <div className="banner-video-container">
          <iframe 
            src="https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=b9EkMc79ZSU" 
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <div className="maturity-rating">
          <span className="age-rating age-16">16</span>
        </div>
        <div className="banner-info" style={{ zIndex: 10 }}>
          <h1>Stranger Things</h1>
          <p>
            Quando um garoto desaparece, uma pequena cidade descobre um mistério
            envolvendo experiências secretas do governo, forças sobrenaturais e
            uma garota muito estranha.
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
        videoSrc="https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1" 
      />

      <div className="movie-rows-container">
        <MovieRow title="Séries em Alta" items={seriesEmAlta} />
      </div>
    </div>
  );
}
