import React, { Component } from 'react';
import Isometric from './Isometric';

export class Home extends Component {
    render() {
    
        return (
            <div>
                <h1 className='text-center mt-5 shadows'>A platform for sharing knowledge</h1>
                <h1 className='text-center shadows'>and <span className='IT'>IT</span> solutions</h1>
              
                <div className='isometric d-flex justify-content-center'>
                <Isometric/>
                </div>
                
            </div>
        )
    }
}

export default Home
