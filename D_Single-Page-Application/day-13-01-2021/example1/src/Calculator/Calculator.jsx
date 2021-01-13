import React, { Component } from 'react';

import Display from './Display/Display'
import KeyBoard from './KeyBoard/KeyBoard'



class Calculator extends Component {

    state = {
        result:0
    }    
    render() {
        return (
            <>
                <Display result={this.state.result }/>
                <KeyBoard />
            </>
        )
    }
}

export default Calculator
