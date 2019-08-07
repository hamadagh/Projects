import React from 'react';


class Square extends React.Component {
   state = {
       value : null,
   }
   
   changeValue(){
   this.setState({

  })
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
  