
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
  render() {
    const List = this.state.data.map(item => <li key={item.id} onClick={()=>this.changeTitle(item.title)}>{item.title}</li>
    );
    return (
      <div className="wrapper">
        <TitleHeader newTitle={this.state.value} />
        <ul className='list'>{List}</ul>
        
      </div>
    );
  }
}

export default App;
