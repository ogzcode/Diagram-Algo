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
    this.handleExportBtn = this.handleExportBtn.bind(this);
  }
  handleExportBtn(data){
    this.setState({
      data: data
    });
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
    let lastData = data[data.length - 1];//Listedeki son değer

    if (this.state.loopState && lastData.type === "loop") {
      /*
      Döngünün aktif olma durumu.
        1.Durum:
          Gelen ifade İşlem, Yazdır veya Koşuldur ise direk döngü listesine atılır.
        2.Durum
          Döngü listesinin son elemanı Koşuldur.
          Koşul aktifdir:
           Gelen değer İşlem veya Yazdır ise koşulun listesine atılır.
          Koşul aktif değildir:
            Felen değer döngü listesine atılır.

      */
      let lastStatmentData = lastData.statements[lastData.statements.length - 1];
      //Dögünün listesi

      if (this.state.condState && lastStatmentData.type === "statement"){
        //Son ifade Koşuldur ve Koşul aktiftir.

        let condList = lastStatmentData.statements;
        //Koşulun listesi

        if (value.type === "operation" || value.type === "print") {
          //Gelen değerler İşlem ve Yazdırdır
          //Bu durumda koşul listesine atılır.
          condList.push(value);
        }
        else {
          //Değilse hata verir.
          this.setState({ 
            condState: false,
            errorState: true,
            errorMessageList: ["Koşul içerisinde sadece İşlem ve Yazdır kullanılabilir."]
           });
        }
      }
      else if (value.type === "operation" || value.type === "print" || value.type === "statement") {
        //İşlem, Yazdır ve Koşuldan biri gelmiştir.
        lastData.statements.push(value);
      }
      else {
        //Değişken veya ikinci döngü gelmesi durumu.
        this.setState({ 
          loopState: false,
          errorState: true,
          errorMessageList: ["Döngü içerisinde sadece İşlem, Yazdır ve Koşul kullanılabilir."]
        });
      }
    }
    else if (this.state.condState && lastData.type === "statement") {
      /*
        Burası eğer tek başına Koşul kullanılacaksa geçerlidir.
        Kullanımı:
          -Koşulun aktif olması.
          -Koşulun genel listenin en sonunda olması.
          -Koşulun içerisine atılacak ifadenin İşlem veya Yazdır olması.
      */
      if (value.type === "operation" || value.type === "print") {
        lastData.statements.push(value);
      }
      else {
        this.setState({ 
          condState: false,
          errorState: true,
          errorMessageList: ["Koşul içerisinde sadece İşlem veya Yazdır kullanılabilir."]
         });
      }
    }
    else {
      data.push(value);
    }
    console.log(data);
    this.setState({ data: data });
  }
  handleLoop(value) {
    let lastData = this.state.data[this.state.data.length - 1];
    if (lastData.type === "loop") {
      this.setState({ loopState: value });
    }
  }
  handleCond(value) {
    let lastData = this.state.data[this.state.data.length - 1];

    if (lastData.type === "loop"){
      if (lastData.statements[lastData.statements.length - 1].type === "statement"){
        this.setState({condState: value});
      }
    }

    if (lastData.type === "statement") {
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
        <NavBar 
          data={this.state.data}
          onClick={this.handleRun} 
          onDelete={this.handleDelete} 
          onExport={this.handleExportBtn}
        />
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
