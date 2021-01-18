import React, { Component } from 'react'
import './Display.css'
export class Display extends Component {
    render() {
        return (
            <header>
                <h3 id="result">{this.props.result}</h3>
            </header>
        )
    }
}

export default Display
