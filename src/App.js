import './App.css';
import Banner from './components/Banner/Banner.component';
import NavBar from './components/NavBar/NavBar.component';
import RowPost from './components/RowPost/RowPost.component';
import {
  action,
  originals,
  ComedyMovies,
  HorrorMovies,
  RomanceMovies,
  Documentaries,
} from './urls';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={ComedyMovies} title="Comedy" isSmall />
      <RowPost url={HorrorMovies} title="Horror" isSmall />
      <RowPost url={RomanceMovies} title="Romance" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
    </div>
  );
};

export default App;
