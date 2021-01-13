import React, { Component } from 'react'

import Img from '../Img/Img'
import Anchor from '../Anchor/Anchor'


import logo from './logo.svg';


import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="App-header">
            <Img source={logo }/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          <Anchor/>
          </header>
        )
    }
}

export default Header
