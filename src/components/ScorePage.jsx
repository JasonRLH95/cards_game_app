import React from 'react';
import '../style/score.css';

export default function ScorePage(props) {
    const result=()=>{ // returns the result of the current game
        if(props.playerScore>props.compScore){
            return 'Player Won The Game!';
        }
        if(props.playerScore<props.compScore){
            return 'Computer Won The Game!'
        }
        if(props.playerScore==props.compScore){
            return "It's A Tie!"
        }
    }
    const playAgain=()=>{ //redeploy the cards deck randomly for each oponent and set the scores back to zero
        props.setPage(2)
        props.setPlayerScore(0)
        props.setCompScore(0)
        props.player.cardsArr = [];
        props.comp.cardsArr = [];

        let playerDeck=[];
        let compDeck=[];
        let cards = new props.Cards();
        for(let i=0;i<26;i++){
            playerDeck.push(cards.dealDeck())
            compDeck.push(cards.dealDeck())
        }
        props.player.cardsArr = playerDeck;
        props.comp.cardsArr = compDeck;
    }
    return (
    <div>
        <button onClick={props.exit} id='exitBtn2'>Exit</button>
        <h2>Final scores:</h2>
        <h3>Player:<span className='resultsSpan'>{props.playerScore}</span></h3>
        <h3>Computer:<span className='resultsSpan'>{props.compScore}</span></h3>
        <h1>{result()}</h1>
        <h1>Total:</h1>
        <h2>Computer:<span className='resultsSpan'>{props.comp.wins}</span></h2>
        <h2>Player:<span className='resultsSpan'>{props.player.wins}</span></h2>
        <button id='againBtn' onClick={()=>{playAgain()}}>Play again?</button>
    </div>
    )
}
