import React, { Component } from 'react';
import Isometric from './Isometric';

export class Home extends Component {
    render() {
    
        return (
            <div>
                <h1 className='text-center mt-5'>A Platform For Sharing Knowledge</h1>
                <h1 className='text-center'>And It Solution</h1>
                <div>
                    <h2 className='home-header text-center'><span className='it'>T</span><span className='it1'>B</span></h2>
                </div>
                <div className='isometric d-flex justify-content-center'>
                <Isometric />
                <Isometric />
                </div>
            </div>
        )
    }
}

export default Home
