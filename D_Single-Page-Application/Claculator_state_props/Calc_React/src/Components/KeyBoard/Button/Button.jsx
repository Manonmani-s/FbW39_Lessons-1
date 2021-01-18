import React, { Component } from 'react'
import './Button.css'


export class Button extends Component {
    render() {
        return (
            <button 
                className={this.props.classNprop} 
                onClick={this.props.onclickFunc} 
                name={this.props.name}
                >
                    {this.props.name}
            </button>
        )
    }
}

export default Button
