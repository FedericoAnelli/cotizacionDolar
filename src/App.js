import './App.css';
import DollarPricesContainer from './components/DollarPricesContainer/DollarPricesContainer';
import NavBar from './components/NavBar/NavBar';
import NewsFeedContainer from './components/NewsFeedContainer/NewsFeedContainer';
import {Adsense} from '@ctrl/react-adsense';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Adsense
          client="ca-pub-4864391857426149"
          slot="7953644771"
          format="auto"
        />
      </div>
      <DollarPricesContainer />
      <div>
        <Adsense
          client="ca-pub-4864391857426149"
          slot="7953644771"
          format="auto"
        />
      </div>
      <h1 className='customHeader'>Noticias de Economía</h1>      
      <NewsFeedContainer />
    </div>
  );
}

export default App;
