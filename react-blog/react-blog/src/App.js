import React from 'react';
import NavBar from './component/NavBar';
import Home from './component/Home';
import CreatePost from './component/CreatePost';
import ShowPost from './component/ShowPost';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  state = {
    post : [
      {
        title: "React",
        userName: "Anonymous",
        textArea: "ReactJS basically is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. It's used for handling view layer for web and mobile apps. React also allows us to create reusable UI components."
      },
      {
        title: "Node.js",
        userName: "John",
        textArea: "Node.js (Node) is an open source development platform for executing JavaScript code server-side. ... Node.js is intended to run on a dedicated HTTP server and to employ a single thread with one process at a time. Node.js applications are event-based and run asynchronously."
      },
    ]

    
  }

  handleStatePost = (newPost) =>{
this.setState(() => {
let prevState = this.state.post;
return prevState.push(newPost);
}

)
  }
  render(){
  
    return (
      <BrowserRouter>
      <div className="App">
         <NavBar />
         <Route path='/Home' component={Home} />
         <Route path='/CreatePost' render={ () => <CreatePost handleStatePost={this.handleStatePost}/>  }  />
         <Route path='/ShowPost' render={ () => <ShowPost props={this.state.post}/>  } />
      </div>
      </BrowserRouter>
     
    )
  }

}

export default App;
