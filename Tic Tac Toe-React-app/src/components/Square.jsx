import React from 'react';


class Square extends React.Component {
  constructor(){
    super()
    this.state = {
      value : null,
  }


} 
calculateWinner() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (this.state.value[a] && this.state.value[a] === this.state.value[b] && this.state.value[a] === this.state.value[c]) {
      return this.state.value[a];
    }
  }
  return null;
}
changeValue = () =>{
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
   calculateWinner();
  }
  
    render() {
      return (
        <button className="square" onClick={this.changeValue} value={this.state.value}>
          {this.state.value}
        </button>
      );
    }
  }

  export default Square;
  