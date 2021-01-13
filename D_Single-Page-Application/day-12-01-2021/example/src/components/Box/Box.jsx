import React, { Component } from 'react'
import './Box.css'

class Box extends Component {
    render() {
        return (
            <div className="container">
                <div className={this.props.mode}>
                    <h1>{this.props.title}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facere officia sit eligendi dolores aspernatur <span>{this.props.whatever}</span>  et nulla harum quibusdam nostrum. Omnis esse suscipit tenetur nam dolore inventore mollitia beatae enim.</p>
                </div>
            </div>
        )
    }
}

export default Box
