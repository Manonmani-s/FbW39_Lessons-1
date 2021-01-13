import React, { Component } from 'react'
import "./Input.css"
// import Button from "../Button/Button"

class Input extends Component {

    state = {
        inputValue: ""
    }

    onChangeInput = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        //We get the function from the props -> this.props.getValue
        return (
            <div>
                <input onChange={this.onChangeInput} type="text" value={this.state.inputValue}/>
                <button onClick={()=>{this.props.getValue(this.state.inputValue)}} > Show text </button>
            </div>
        )
    }
}

export default Input
