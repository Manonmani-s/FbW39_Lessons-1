import React, { Component } from 'react'
import './KeyBoard.css'
import Number from './Number/Number'
import Button from './Button/Button'


export class KeyBoard extends Component {

    render() {
        return (
            <div className="main">

                <Number name="firstNumber" id="firstNumber" number={this.props.num1} onchangeFunc={this.props.onchangeFunc}/>
                <Number name="secondNumber" id="secondNumber" number={this.props.num2} onchangeFunc={this.props.onchangeFunc}/> 

                <Button classNprop="btn1" name="Plus" onclickFunc={this.props.onclickFunc}/>
                <Button classNprop="btn2" name="Minus" onclickFunc={this.props.onclickFunc}/>
                <Button classNprop="btn3" name="Divide" onclickFunc={this.props.onclickFunc}/>
                <Button classNprop="btn4" name="Multiply" onclickFunc={this.props.onclickFunc}/>

            </div>
        )
    }
}

export default KeyBoard
