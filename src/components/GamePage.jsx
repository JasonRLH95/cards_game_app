import React,{useState} from 'react';
import Card from '../components/Card.jsx';
import '../style/game.css'

export default function GamePage(props) {
    const [place,setPlace] = useState(0);
    const refreshScore=()=>{ // when pressing the 'next' button => replace the cards shown to the next card at the array,and checks which of them is bigger, the player that has the bigger number gets a score, when the last card been shown the function checks which of them both has the most points and according to that add to the players a win++ or losts++ to their history, and totGames++ to them both
        setPlace(place+1)
        if(place<=25){
            if(props.comp.cardsArr[place]<props.player.cardsArr[place]){
                props.setPlayerScore(props.playerScore+1)
            }
            else if(props.comp.cardsArr[place]>props.player.cardsArr[place]){
                props.setCompScore(props.compScore+1)
            }
        }
        if(place===25){
            props.player.totGames++;
            props.comp.totGames++;
            if(props.compScore>props.playerScore){
                props.comp.wins++;
                props.player.losts++
            }
            else if(props.compScore<props.playerScore){
                props.player.wins++;
                props.comp.losts++
            }
            console.log(props.comp)
            console.log(props.player)
            props.setPage(3)
        }
    }
    return (
    <div>
        <button onClick={props.exit} id='exitBtn'>Exit</button>
        <div id='scoresDiv'>
            <h3 id='compScore'>Computer scores:{props.compScore}</h3>
            <h3 id='playerScore'>Player scores:{props.playerScore}</h3>
        </div>
        <div id='compDiv'>
            <h1 id='compName'>{props.comp.fullName}</h1>
            <div id='compCard'>{<Card num={props.comp.cardsArr[place]}/>}</div>
        </div>
        <div id='playerDiv'>
            <div id='playerCard'>{<Card num={props.player.cardsArr[place]}/>}</div>
            <h1 id='playerName'>{props.player.fullName}</h1>
        </div>
        <button id='nextBtn' onClick={()=>{refreshScore()}}>Next</button>
    </div>
    )
}
