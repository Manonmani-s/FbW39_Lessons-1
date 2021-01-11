import { Component } from 'react';

import './Article.css';


class Article extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         InputValue: ''
    //     };
    // }

    state = {
        InputValue: ''
    };

    ChangeTtile(e) {
        console.log(e.target.value);
        // this.state.InputValue = e.target.value; Wrong Way !!!!
        // this.setState({
        //     InputValue: e.target.value
        // })
        this.setState(() => {
            return {InputValue:e.target.value}
        })

        console.log(this.state.InputValue)

    }

    render() {
        return (
            <div className={'Article'}>
                <input
                    type="text"
                    placeholder='Enter Title'
                    onChange={event => {this.ChangeTtile(event)}}
                />
                <h2>Here is My Title</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aut, exercitationem illum eligendi facere optio consequatur deserunt ullam? Molestiae, optio dolore. Beatae assumenda suscipit asperiores ipsam totam accusamus quasi laudantium.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aut, exercitationem illum eligendi facere optio consequatur deserunt ullam? Molestiae, optio dolore. Beatae assumenda suscipit asperiores ipsam totam accusamus quasi laudantium.</p>
            </div>
        )
    }
}


export default Article;


