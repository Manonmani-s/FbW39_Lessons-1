import React, { Component } from 'react';

import Light from './Light/Light'
import Button from './Button/Button'

import './Bulb.css';

class Bulb extends Component {

    state = {
        toggle:true
    }

    clickHandler = () => {
        this.setState(
            oldState => ({
                toggle:  !oldState.toggle
            })
        )
    }

    render() {
        return (
            <div class='container' >
                <Light lightToggle={this.state.toggle }/>
                {/* <button onClick={this.clickHandler}>
                {this.state.toggle ? 'OFF' : 'ON'}

                </button> */}
                <Button handler={ this.clickHandler}/>

            </div>
        )
    }
}

export default Bulb
