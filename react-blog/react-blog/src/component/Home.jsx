import React, { Component } from 'react';
import Isometric from './Isometric';

export class Home extends Component {
    render() {
    
        return (
            <div>
                <div className='home-header'>
                    <h2 className='text-center'><span>T</span>echBlog</h2>
                </div>
                <div className='isometric text-center'>
                <Isometric />
                </div>
            </div>
        )
    }
}

export default Home
