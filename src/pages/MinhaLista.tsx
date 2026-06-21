import MovieRow from '../components/MovieRow';

const sessaoCult = [
  '/IMG/CARTAZ/CITYOFGOD.jpg', '/IMG/CARTAZ/HER.jpg', '/IMG/CARTAZ/seven.jpg', '/IMG/CARTAZ/OSINFILTRADOS.jpg',
  '/IMG/CARTAZ/OPREDESTINADO.jpg', '/IMG/CARTAZ/aindaestouaqui.jpg', '/IMG/CARTAZ/PARASITA.jpg', '/IMG/CARTAZ/INFILTRADOSNAKLAN.jpg',
  '/IMG/SERIES/Breakingbad.jpg', '/IMG/SERIES/dark.jpg', '/IMG/SERIES/sopranos.jpg', '/IMG/CARTAZ/vingadoresultimato.jpg',
  '/IMG/CARTAZ/invocaçaodomal.jpg', '/IMG/CARTAZ/invocaçaodomal2.jpg', '/IMG/CARTAZ/semlimites.jpg', '/IMG/SERIES/b99.jpg'
];

export default function MinhaLista() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <MovieRow title="Sessão Cult" items={sessaoCult} />
    </div>
  );
}
