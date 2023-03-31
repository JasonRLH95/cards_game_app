import React,{useState} from 'react';
import Card from '../components/Card.jsx';
import '../style/game.css'

export default function GamePage(props) {
    const [place,setPlace] = useState(0);
    // const [playerScore,setPlayerScore] = useState(0);
    // const [compScore,setCompScore] = useState(0);
    const refreshScore=()=>{
        setPlace(place+1)
        if(place<=25){
            if(props.comp.cardsArr[place]<props.player.cardsArr[place]){
                props.setPlayerScore(props.playerScore+1)
                // return alert('Player scored!')
            }
            else if(props.comp.cardsArr[place]>props.player.cardsArr[place]){
                props.setCompScore(props.compScore+1)
                // return alert('Computer scored!')
            }
            else{
                // return alert("It's a tie!")
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
        {/* <div>{props.func()}</div> */}
        <button onClick={()=>{props.setPage(1)}} id='exitBtn'>Exit</button>
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
