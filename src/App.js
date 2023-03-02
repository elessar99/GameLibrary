import './App.css';
import GameCard from './components/GameCard/Gamecard';
import Header from './components/Header/Header';
import Router from './router/Router';
import GameInfo from './views/GameInfo';
import NewsInfo from './views/NewsInfo';


function App() {
  return (
    <div className='appBody'>
    <GameInfo />
    <NewsInfo/>
    <Header/>
    <Router/>
    </div>
  );
}

export default App;
