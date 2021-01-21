import React, { Component } from 'react'

class TitleHeader extends Component {
    state = {
        title:''
    }

    static getDerivedStateFromProps(props, state) {
        console.log('sync state with props');
        console.log(`current state: ${state.title}`);
        console.log(`new props: ${props.newTitle}`);
        if (state.title !== props.newTitle) {
            return {
                title: props.newTitle
            };
        } else {
            console.log('no change')
            return null;
        }
    }

    render() {
        
        return (
            <h1>
             {this.state.title}   
            </h1>
        )
    }
}

export default TitleHeader
