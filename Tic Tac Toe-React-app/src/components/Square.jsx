import React from 'react';


class Square extends React.Component {
  constructor(){
    super()
    this.state = {
      value : null,
      

  }

this.changeValue = this.changeValue.bind(this)

} 
 
changeValue(){
  switch(this.props.player){
    case 'X':
      this.setState({
        value: 'X',
     });
      break;
      default:
        this.setState({
          value: 'O',
         });
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
  