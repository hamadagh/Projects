import React from 'react';
import Board from './Board';


class Square extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value : null,
      

  }

this.changeValue = this.changeValue.bind(this)

} 
 
changeValue(){
   
   if (this.props.player !== 'X'){
     this.setState({value: 'O'})
   }else {
     this.setState({value: "X"})
   }
  
  }

    render() {
      return (
        <button className="square" onClick={this.changeValue}>
          {this.state.value}
        </button>
      );
    }
  }

  export default Square;
  