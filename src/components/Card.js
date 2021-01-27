import {setState} from 'react';
import  '../App.css';



const Card = (props)=>{
  
  const [faceUp,setFaceUp]=setState(false);

  const flip=()=>{
    setFaceUp(!faceUp)
  }

  
    let content;
    if(faceUp) {
       content = props.content;
    } else {
       content = 'Back'
    }
    return (
      <div onClick={flip} className={`Card ${faceUp ? 'face-up': ''}`}>
        {content}
      </div>
    )
  
}

export default Card;