import React, { Component } from 'react';

import Display from './Display/Display'
import KeyBoard from './KeyBoard/KeyBoard'


 class Calculator extends Component {

    state={
        num1:0,
        num2:0,
        result:0
    }

    onChangeFunc = (event) => {
        switch (event.target.name) {
            case "firstNumber":
                this.setState({
                    num1: parseInt(event.target.value,10)
                })
                break;

            case "secondNumber":
                this.setState({
                    num2: parseInt(event.target.value,10)
                })
                break;

            default:
                break;
        }
    }

    onClickFunc = (event) =>{

        switch (event.target.name) {
            case "Plus":
                this.setState((state,_)=>({
                    result: state.num1 + state.num2
                }))
                break;

            case "Minus":
                this.setState((state,_)=>({
                    result: state.num1 - state.num2
                }))
                break;

            case "Divide":
                this.setState((state,_)=>({
                    result: state.num1 / state.num2
                }))
                break;

            case "Multiply":
                this.setState((state,_)=>({
                    result: state.num1 * state.num2
                }))
                break;
                
            default:
                break;
        }
    }

    render() {
        return(
            <React.Fragment>
                <Display result={this.state.result} />
                <KeyBoard onchangeFunc={this.onChangeFunc} num1={this.state.num1} num2={this.state.num2} onclickFunc={this.onClickFunc}/>
            </React.Fragment>
        )
    }
}

export default Calculator
