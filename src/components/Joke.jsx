import { useState } from "react";

export default function Joke(){
    const [joke, setJoke] = useState({})
    let URL = 'https://official-joke-api.appspot.com/random_joke'

    const  loadJoke = async () => {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      setJoke({
        setup:jsonResponse.setup,
        punchline: jsonResponse.punchline
      })
        
    }
    return(
        <div>
            <h2>Joke  hahah 😂</h2>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline} 😂😂😂</h2>
            <button onClick={loadJoke}>Lload Joke</button>
        </div>
    )
}