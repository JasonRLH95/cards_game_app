import './App.css';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import ScorePage from './components/ScorePage';


var player;
var comp;

function App() {
  // const [currentPlayer,setCurrentPlayer] = useState('');
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
    deploy(){
      let temp = [];
      for(let i=1;i<14;i++){
        for(let j=0;j<4;j++){
          temp.push(i)
        }
      }
      return temp;
    }
    dealDeck(){
      let rand = Math.floor(Math.random()*this.deck.length);
      let card = this.deck.splice(rand,1);
      console.log(rand)
      return card[0];
    }
  }
  const showPage=()=>{
    if(page===1){
      return <HomePage start={initGame} setPage={setPage} name={name} setName={setName}/>
    }
    else if(page===2){
      return <GamePage player={player} comp={comp} setPage={setPage} playerScore={playerScore} setPlayerScore={setPlayerScore} compScore={compScore} setCompScore={setCompScore}/>
    }
    else{
      return <ScorePage setPage={setPage} playerScore={playerScore} setPlayerScore={setPlayerScore} compScore={compScore} setCompScore={setCompScore} comp={comp} player={player} Cards={Cards}/>
    }
  }
  const initGame=(name)=>{
    let playerDeck=[];
    let compDeck=[];
    let cards = new Cards();
    for(let i=0;i<26;i++){
      playerDeck.push(cards.dealDeck())
      compDeck.push(cards.dealDeck())
    }
    // debugger
    player = new Player(name,playerDeck);
    comp = new Player('Computer',compDeck);
    setPage(2);
    // console.log(playerDeck)
    // console.log(compDeck)
    // console.log(comp)
    // console.log(player)
    // let playerName= tempPlayer.fullName;
    // return playerName;
  }


  return (
    <div className="App">
      <h1 id='mainHeader'>Cards Game</h1>
      {/* <div>{initGame()}</div> */}
      {showPage()}
    </div>
  );
}

export default App;
