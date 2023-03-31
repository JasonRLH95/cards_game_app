import './App.css';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import ScorePage from './components/ScorePage';


var player;
var comp;

function App() {
  const [name,setName] = useState('');
  const [page,setPage] = useState(1);
  const [playerScore,setPlayerScore] = useState(0);
  const [compScore,setCompScore] = useState(0);
  class Player{
    wins =0;
    losts=0;
    totGames=0;
    constructor(fullName,cardsArr){
      this.fullName = fullName;
      this.cardsArr=cardsArr;
    }
  }

  class Cards{
    constructor(){
      this.deck = this.deploy();
    }
    deploy(){ //create the basic cards deck array
      let temp = [];
      for(let i=1;i<14;i++){
        for(let j=0;j<4;j++){
          temp.push(i)
        }
      }
      return temp;
    }
    dealDeck(){ // pick random card from the basic cards deck array and return it
      let rand = Math.floor(Math.random()*this.deck.length);
      let card = this.deck.splice(rand,1);
      return card[0];
    }
  }
  const showPage=()=>{ // function that returns different component according to 'page' hook
    if(page===1){
      return <HomePage start={initGame} setPage={setPage} name={name} setName={setName}/>
    }
    else if(page===2){
      return <GamePage player={player} comp={comp} setPage={setPage} playerScore={playerScore} setPlayerScore={setPlayerScore} compScore={compScore} setCompScore={setCompScore} exit={exit}/>
    }
    else{
      return <ScorePage setPage={setPage} playerScore={playerScore} setPlayerScore={setPlayerScore} compScore={compScore} setCompScore={setCompScore} comp={comp} player={player} Cards={Cards} exit={exit}/>
    }
  }
  const initGame=(name)=>{ // function that initiate the game, creates 2 cards decks arrays, one for player and second for computer, pushing for each array a random card for 26 times in order to set two different random decks, create two players, and add to their constructor a name and the decks we just created 
    let playerDeck=[];
    let compDeck=[];
    let cards = new Cards();
    for(let i=0;i<26;i++){
      playerDeck.push(cards.dealDeck())
      compDeck.push(cards.dealDeck())
    }
    player = new Player(name,playerDeck);
    comp = new Player('Computer',compDeck);
    setPage(2);
  }

  const exit=()=>{ // transfer the page to the home page and set the scores of each oponent back to zero
    setPage(1);
    setCompScore(0);
    setPlayerScore(0);
  }

  return (
    <div className="App">
      <h1 id='mainHeader'>Cards Game</h1>
      {showPage()}
    </div>
  );
}

export default App;
