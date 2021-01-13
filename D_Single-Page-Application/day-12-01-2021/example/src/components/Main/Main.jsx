import React, { Component } from 'react'

import Img from '../Img/Img'

import './Main.css'
import logo from './vue.png'

class Main extends Component {
    render() {
        return (
            <main className='App-main'>
                <p>Here is a main section</p>

                <Img source={logo}/>
            </main>
        )
    }
}

export default Main
