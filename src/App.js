import './App.css';
import NavBar from './component/NavBar/NavBar';
import Main from "./component/Main/Main.js";
import React from 'react';
import Console from './component/Console/Console.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      run: false,
      data: []
    };
    this.handleGetData = this.handleGetData.bind(this);
    this.handleRun = this.handleRun.bind(this);
  }
  handleRun(value){
    console.log(value);
    this.setState({
      run: value
    });
  }
  handleGetData(data){
    this.setState({data: data});
  }
  render() {
    return (
      <div className="App">
        <NavBar onClick={this.handleRun}/>
        <Main onClick={this.handleGetData}/>
        {
          this.state.run && <Console onClick={this.handleRun}/>
        }
      </div>
    );
  }
}

export default App;
