import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     player: 'X',
    }
    this.changePlayer = this.changePlayer.bind(this)
  }

  changePlayer (){
    switch(this.state.player){
     case 'X':
       this.setState({
         player: 'O',
      });
       break;
       default:
         this.setState({
           player: 'X',
          });
    }
  }

    renderSquare(i) {
      const player = this.state.player;
      return <Square player={player}/>;
    }
  
    render() {
      const status = `Next player: ${this.state.player}`;
  
      return (
        <React.Fragment>
          <div className="status h2 text-center">{status}</div>
          <div className="board" onClick={this.changePlayer}>
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
          </div>
        </React.Fragment>
      );
    }
  }

  export default Board;