import React from 'react';
import NavBar from './component/NavBar';
import Home from './component/Home';
import CreatePost from './component/CreatePost';
import ShowPost from './component/ShowPost';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';

class App extends React.Component {
  state = {
    post : [
      {
        title: "React",
        username: "Anonymous",
        textArea: "ReactJS basically is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. It's used for handling view layer for web and mobile apps. React also allows us to create reusable UI components."
      }
    ]

    
  }
  render(){
    const post = this.state;
    return (
      <BrowserRouter>
      <div className="App">
         <NavBar />
         <Route exact path='/' component={Home} />
         <Route path='/CreatePost' component={CreatePost} />
         <PropsRoute path='/ShowPost' component={ShowPost} post={post}/>
      </div>
      </BrowserRouter>
     
    );
  }

}

export default App;
