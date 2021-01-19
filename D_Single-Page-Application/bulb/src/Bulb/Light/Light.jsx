import React, { Component } from 'react';

import lightOff from './pic_bulboff.gif';
import lightOn from './pic_bulbon.gif';


class Light extends Component {
    render() {

        const { lightToggle } = this.props;
        return (
            <img width='100' height='180' src={lightToggle ? lightOn : lightOff } alt={lightToggle ? 'lightOn' : 'lightOff' }/>
                
           
        )
    }
}

export default Light
