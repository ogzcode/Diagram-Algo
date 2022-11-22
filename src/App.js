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
      data: [],
      loopState: false
    };
    this.handleGetData = this.handleGetData.bind(this);
    this.handleRun = this.handleRun.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleLoop = this.handleLoop.bind(this);
  }
  handleRun(value){
    this.setState({
      run: value
    });
  }
  handleDelete(){
    this.setState({data: []});
  }
  handleGetData(value){
    const data = this.state.data.slice();

    if (this.state.loopState && data[data.length - 1].type === "loop"){
      if (value.type === "operation"){
        data[data.length - 1].statements.push(value);
      }
      else {
        this.setState({loopState: false});
        data.push(value);
      }
    }
    else {
      data.push(value);
    }
    //console.log(data);
    this.setState({data: data});
  }
  handleLoop(value){
    this.setState({
      loopState: value
    });
  }
  render() {
    return (
      <div className="App">
        <NavBar onClick={this.handleRun} onDelete={this.handleDelete}/>
        <Main onClick={this.handleGetData} 
          data={this.state.data} 
          loopState={this.state.loopState}
          onLoopClick={this.handleLoop}
        />
        {
          this.state.run && <Console onClick={this.handleRun} data={this.state.data}/>
        }
      </div>
    );
  }
}

export default App;
