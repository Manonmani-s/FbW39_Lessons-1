import React, { Component } from 'react'

class TitleHeader extends Component {
    state = {
        title: '',
        color: ''
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
    componentDidMount() {
        console.log(`component did mount ...`);
        let header = document.querySelector('h1');
        header.style.background = 'green';
    }

    componentDidUpdate() {
        console.log(`component did update ...`);
        let header = document.querySelector('h1');
        header.style.background = 'blue';
    }

    componentWillUnmount() {
        console.log('component will unmount .. ');
        alert('component will unmount');
        this.setState({
            title: ''
        });
    }

    render() {
        console.log('render ...')
        
        return (
            <h1>
             {this.state.title}   
            </h1>
        )
    }
 

}

export default TitleHeader
