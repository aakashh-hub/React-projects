import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {"name":"Mango","color":"Yellow"},
        {"name":"Apple","color":"Red"},
        {"name":"Orange","color":"Orange"}
      ]
    };
  }
  render() {
    return (
      <div>
        <Fruits />
        <Head />
        <ul>
          {this.state.data.map((item)=> <List data={item} />)}
        </ul>
      </div>
    )
  }
}
class Fruits extends Component {
  render() {
    return (
      <div>
        <h1>Fruit varities</h1>
      </div>
    )
  }
}
class Head extends Component {
  render() {
    return (
      <div>
        <h3>Fruit List</h3>
      </div>
    )
  }
}
class List extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><p>{this.props.data.name} : {this.props.data.color}</p> </li>
        </ul>
      </div>
    )
  }
}
export default App;