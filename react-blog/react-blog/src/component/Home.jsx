import React, { Component } from 'react';
import Isometric from './Isometric';

export class Home extends Component {
    render() {
    
        return (
            <div>
                <h1 className='text-center mt-5 shadows'>A Platform For Sharing Knowledge</h1>
                <h1 className='text-center shadows'>And <span className='IT'>IT</span> Solution</h1>
              
                <div className='isometric d-flex justify-content-center'>
                <Isometric/>
                </div>
                
            </div>
        )
    }
}

export default Home
