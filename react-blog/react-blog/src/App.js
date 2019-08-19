import React from 'react';
import NavBar from './component/NavBar';
import Home from './component/Home';
import CreatePost from './component/CreatePost';
import ShowPost from './component/ShowPost';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <NavBar />
     <Route path='/Home' component={Home} />
     <Route path='/CreatePost' component={CreatePost} />
     <Route path='/ShowPost' component={ShowPost} />

    </div>
    </BrowserRouter>
   
  );
}

export default App;
