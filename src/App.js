import './App.css';
import {Stage, Rect, Layer} from "react-konva";
import NavBar from './component/NavBar/NavBar';
import Main from "./component/Main/Main.js";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App;
