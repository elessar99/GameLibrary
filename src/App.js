import './App.css';
import GameCard from './components/GameCard/Gamecard';
import Header from './components/Header/Header';
import Router from './router/Router';


function App() {
  return (
    
    <div className='appBody'>
    <Header/>
    <Router/>
    </div>
  );
}

export default App;
