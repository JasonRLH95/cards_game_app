import React from 'react';
import '../style/home.css'

export default function HomePage(props) {
    // const [name,setName] = useState('');
    const validation=()=>{//checks if the input gets any text in it, and if the text is english letters only, and return alert according to any situation, if everything is ok => transfer the page to game page and give the function that initiate the game the name that inside that input, that name would be added to the player we'll create
        if(props.name.length===0){
            return alert('You must enter your name first!')
        }
        if(props.name.length!==0){
            for(let i=0;i<props.name.length;i++){
                if(props.name[i]<='z'&&props.name[i]>='a'){
                    continue;
                }
                if(props.name[i]<='Z'&&props.name[i]>='A'){
                    continue;
                }
                else{
                    return alert('Name could contain only English Uppercase and Lowercase letters!')
                }
            }
        }
        return props.start(props.name);
    }
    return (
    <div>
        <h1 id='homeHeader'>Ready for WAR??</h1>
        <div id='homeDiv'>
        <input id='homeInput' onChange={(e)=>{props.setName(e.target.value)}} type="text" placeholder='Enter your name'/><br/>
        <button id='homeBtn' onClick={validation}>Enter</button>
        </div>
    </div>
    )
}
