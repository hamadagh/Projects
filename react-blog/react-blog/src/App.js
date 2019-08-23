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
        username: "Anonymous",
        textArea: "ReactJS basically is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. It's used for handling view layer for web and mobile apps. React also allows us to create reusable UI components."
      },
      {
        title: "Node.js",
        username: "John",
        textArea: "Node.js (Node) is an open source development platform for executing JavaScript code server-side. ... Node.js is intended to run on a dedicated HTTP server and to employ a single thread with one process at a time. Node.js applications are event-based and run asynchronously."
      },
    ]

    
  }
  render(){
  
    return (
      <BrowserRouter>
      <div className="App">
         <NavBar />
         <Route path='/Home' component={Home} />
         <Route path='/CreatePost' component={CreatePost} />
         <Route path='/ShowPost' render={ () => <ShowPost props={this.state.post}/>  } />
      </div>
      </BrowserRouter>
     
    )
  }

}

export default App;
