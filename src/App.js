import logo from './logo.svg';
import './App.css';
import DollarPricesContainer from './components/DollarPricesContainer/DollarPricesContainer';
import NavBar from './components/NavBar/NavBar';
import NewsFeedContainer from './components/NewsFeedContainer/NewsFeedContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <DollarPricesContainer />
      <h1 className='customHeader'>Noticias de Economía</h1>      
      <NewsFeedContainer />
    </div>
  );
}

export default App;
