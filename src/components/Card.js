import React from 'react';
import  '../App.css';


class Card extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state={
      faceUp:false ,
    };
  }

  flip(){
    this.setState({faceUp:!this.state.faceUp})
  }

  render() {
    let content;
    if(this.props.faceUp) {
      content = this.props.content;
    } else {
      content = 'Back'
    }
    return (
      <div onClick={this.flip} className={`Card ${this.props.faceUp ? 'face-up': ''}`}>
        {content}
      </div>
    )
  }
}

export default Card;