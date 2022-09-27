import logo from './logo.svg';
import './App.css';
import DollarPricesContainer from './components/DollarPricesContainer/DollarPricesContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <DollarPricesContainer />
    </div>
  );
}

export default App;
