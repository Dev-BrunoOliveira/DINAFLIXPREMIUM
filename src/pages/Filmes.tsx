import React from 'react';
import MovieRow from '../components/MovieRow';

const melhoresFilmes = [
  '/IMG/CARTAZ/CITYOFGOD.jpg', '/IMG/CARTAZ/HER.jpg', '/IMG/CARTAZ/seven.jpg', '/IMG/CARTAZ/OSINFILTRADOS.jpg',
  '/IMG/CARTAZ/OPREDESTINADO.jpg', '/IMG/CARTAZ/aindaestouaqui.jpg', '/IMG/CARTAZ/PARASITA.jpg', '/IMG/CARTAZ/INFILTRADOSNAKLAN.jpg',
  '/IMG/CARTAZ/corra.jpg', '/IMG/CARTAZ/semlimites.jpg', '/IMG/CARTAZ/spiderman.jpg', '/IMG/CARTAZ/vingadoresultimato.jpg',
  '/IMG/CARTAZ/johnwick.jpg', '/IMG/CARTAZ/anonimo.jpg', '/IMG/CARTAZ/invocaçaodomal.jpg', '/IMG/CARTAZ/invocaçaodomal2.jpg'
];

export default function Filmes() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <MovieRow title="Sessão Melhores Filmes" items={melhoresFilmes} />
    </div>
  );
}
