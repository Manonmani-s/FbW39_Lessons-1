
import { Component } from 'react';
// import Header from './components/Header/Header'
// import Main from './components/Main/Main'
import Box from './components/Box/Box'
import Input from './components/Input/Input'
//import Button from "./components/Button/Button"



import './App.css';

class App extends Component {

  state = {
    valueFromInputComponent: ""
  }

  gettingText = (text) => {
    this.setState({
      valueFromInputComponent: text
    })
  }

  render() {
    return (
      <>
       
        <Input getValue={this.gettingText} />
        <h3>this is in the content of the input {this.state.valueFromInputComponent}</h3>
        <Box mode={'light'} title={'light mode'} />
        <Box mode={'dark'} title={'dark mode'} whatever={ "I am What Ever :) "}/>
      
      </>
    )
 }
}

export default App;


