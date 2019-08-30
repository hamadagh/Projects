import React, { Component } from 'react';
import Isometric from './Isometric';

export class Home extends Component {
    render() {
    
        return (
            <div>
                <div>
                    <h2 className='home-header text-center'>T<span className='echBlo'>echBlo</span>g</h2>
                </div>
                <div className='isometric text-center'>
                <Isometric />
                </div>
            </div>
        )
    }
}

export default Home
