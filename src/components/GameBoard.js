import React from 'react';
import Card from './Card.js';
import Emoji from './Emoji.js';
import '../App.css';

const  GameBoard =()=>{

  const cards = Emoji
  .concat(Emoji)
  .sort(()=>Math.random()-0.5);

  const listcards = cards.map((listcard) =>(

    
      <div>
        <Card content={listcard}/>
      </div>
    
  ))
  
  return(
    <>

    {listcards}

    </>

  );

  


  
}

export default GameBoard;