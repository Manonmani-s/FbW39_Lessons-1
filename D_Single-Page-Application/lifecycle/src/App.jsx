
import { Component } from 'react';
import './App.css';

import TitleHeader from './TitleHeader';

class App extends Component {
 
  state = {
    value: 'default item',
    show: true,
    data:[{id:1, title:'first item'}, {id:2, title:'second item'}, {id:3, title:'third item'}]
  }
  changeTitle = title => {
    this.setState({ value: title });
  }

  toggleBtn = () => {
    this.setState(currentState => ({
      show: !currentState.show
    }))
  }
  render() {
    const List = this.state.data.map(item => <li key={item.id} onClick={()=>this.changeTitle(item.title)}>{item.title}</li>
    );
    return (
      <div className="wrapper">
        {this.state.show ? <TitleHeader newTitle={this.state.value} /> : null}
        <ul className='list'>{List}</ul>
        <button className='btn' onClick={()=>this.toggleBtn()}>Toggle</button>
      </div>
    );
  }
}

export default App;
