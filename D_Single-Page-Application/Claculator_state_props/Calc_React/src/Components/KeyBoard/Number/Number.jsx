import React, { Component } from 'react'
import './Number.css'

export class Number extends Component {

    render() {
        return (
            <input
                type="text"
                name={this.props.name}
                id={this.props.id}
                onChange={this.props.onchangeFunc}
                placeholder="Insert a Number"
                value={this.props.number}
            />
        )
    }
}

export default Number
