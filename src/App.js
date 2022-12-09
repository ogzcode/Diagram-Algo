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
      if (value.type === "operation") {
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
      if (value.type === "operation") {
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

/* 
      var simpleText = new Konva.Text({
        x: stage.width() / 2,
        y: 15,
        text: 'Simple Text',
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: 'green',
      });

      // to align text in the middle of the screen, we can set the
      // shape offset to the center of the text shape after instantiating it
      simpleText.offsetX(simpleText.width() / 2);

      // since this text is inside of a defined area, we can center it using
      // align: 'center'
      var complexText = new Konva.Text({
        x: 20,
        y: 60,
        text: "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#555',
        width: 300,
        padding: 20,
        align: 'center',
      });

      var rect = new Konva.Rect({
        x: 20,
        y: 60,
        stroke: '#555',
        strokeWidth: 5,
        fill: '#ddd',
        width: 300,
        height: complexText.height(),
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffsetX: 10,
        shadowOffsetY: 10,
        shadowOpacity: 0.2,
        cornerRadius: 10,
      });
*/

export default App;
