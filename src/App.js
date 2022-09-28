import './App.css';
import DollarPricesContainer from './components/DollarPricesContainer/DollarPricesContainer';
import NavBar from './components/NavBar/NavBar';
import NewsFeedContainer from './components/NewsFeedContainer/NewsFeedContainer';
import {Adsense} from '@ctrl/react-adsense';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />

        <Adsense
          client="ca-pub-4864391857426149"
          style={{ width: '100%' }}
          slot="7953644771"
          format="auto"
        />

      <DollarPricesContainer />

        <Adsense
          client="ca-pub-4864391857426149"
          style={{ width: '100%' }}
          slot="7953644771"
          format="auto"
        />
        
      <h1 className='customHeader'>Noticias de Economía</h1>      
      <NewsFeedContainer />
      <Footer  />
    </div>
  );
}

export default App;
