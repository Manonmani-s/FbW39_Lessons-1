import React, { Component } from 'react'


import './Img.css'

class Img extends Component {
    render() {
        return (
            <img src={this.props.source} className="App-logo" alt="logo" />
        )
    }
}

export default Img
