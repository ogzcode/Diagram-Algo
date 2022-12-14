import './App.css';
import NavBar from './component/NavBar/NavBar';
import Main from "./component/Main/Main.js";
import React from 'react';
import Console from './component/Console/Console.js';
import ErrorMessage from './component/Main/UserSide/ShapesValue/ErrorMessage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      run: false,
      data: [],
      loopState: false,
      condState: false,
      errorState: false,
      errorMessageList: []
    };
    this.handleGetData = this.handleGetData.bind(this);
    this.handleRun = this.handleRun.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleLoop = this.handleLoop.bind(this);
    this.handleCond = this.handleCond.bind(this);
    this.handleErrorClick = this.handleErrorClick.bind(this);
  }
  handleRun(value) {
    this.setState({
      run: value
    });
  }
  handleDelete() {
    this.setState({ data: [], loopState: false, condState: false });
  }
  handleGetData(value) {
    const data = this.state.data.slice();

    if (this.state.loopState && data[data.length - 1].type === "loop") {
      if (value.type === "operation" || value.type === "print") {
        data[data.length - 1].statements.push(value);
      }
      else {
        this.setState({ 
          loopState: false,
          errorState: true,
          errorMessageList: ["Döngü içerisinde sadece İşlem kullanılabilir."]
        });
      }
    }
    else if (this.state.condState && data[data.length - 1].type === "statement") {
      if (value.type === "operation" || value.type === "print") {
        data[data.length - 1].statements.push(value);
      }
      else {
        this.setState({ 
          condState: false,
          errorState: true,
          errorMessageList: ["Koşul içerisinde sadece İşlem kullanılabilir."]
         });
      }
    }
    else {
      data.push(value);
    }
    this.setState({ data: data });
  }
  handleLoop(value) {
    if (this.state.data[this.state.data.length - 1].type === "loop") {
      this.setState({ loopState: value });
    }
  }
  handleCond(value) {
    if (this.state.data[this.state.data.length - 1].type === "statement") {
      this.setState({ condState: value });
    }
  }
  handleErrorClick() {
    let error = !this.state.errorState;
    this.setState({ errorState: error, errorMessageList: [] });
  }
  render() {
    return (
      <div className="App">
        <ErrorMessage
          errorState={this.state.errorState}
          errorMessageList={this.state.errorMessageList}
          onClick={this.handleErrorClick}
        />
        <NavBar onClick={this.handleRun} onDelete={this.handleDelete} />
        <Main onClick={this.handleGetData}
          data={this.state.data}
          loopState={this.state.loopState}
          onLoopClick={this.handleLoop}
          condState={this.state.condState}
          onCondClick={this.handleCond}
        />
        {
          this.state.run && <Console onClick={this.handleRun} data={this.state.data} />
        }
      </div>
    );
  }
}

export default App;
