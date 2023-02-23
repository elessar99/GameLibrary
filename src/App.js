import './App.css';
import GameCard from './components/GameCard/Gamecard';
import Header from './components/Header/Header';
import Router from './router/Router';


function App() {
  return (
    
    <div>
    <Header/>
    <GameCard src={"https://www.mmobomb.com/g/452/thumbnail.jpg"} genre={"Shooter"} platform={"Windows"} name={"Call Of Duty: Warzone"}/>
    <Router/>
    
    </div>
  );
}

export default App;
