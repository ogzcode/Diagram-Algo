import React from "react";
import "./Main.css"
import UserPanel from "./UserSide/UserPanel.js";
import Canvas from "./Canvas/Canvas";

class Main extends React.Component {
    render(){
        return (
            <div className="main">
                <UserPanel/>
                <Canvas/>
            </div>
        );
    }
}

export default Main;