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
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleRun(value){
    this.setState({
      run: value
    });
  }
  handleDelete(){
    this.setState({data: []});
  }
  handleGetData(data){
    this.setState({data: data});
  }
  render() {
    return (
      <div className="App">
        <NavBar onClick={this.handleRun} onDelete={this.handleDelete}/>
        <Main onClick={this.handleGetData} data={this.state.data}/>
        {
          this.state.run && <Console onClick={this.handleRun} data={this.state.data}/>
        }
      </div>
    );
  }
}

export default App;
