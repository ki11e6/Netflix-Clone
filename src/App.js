import './App.css';
import Banner from './components/Banner/Banner.component';
import NavBar from './components/NavBar/NavBar.component';
import RowPost from './components/RowPost/RowPost.component';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost />
    </div>
  );
};

export default App;
