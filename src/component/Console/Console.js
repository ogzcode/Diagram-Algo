import React from "react";
import "./Console.css";

class Console extends React.Component {
    constructor(props){
        super(props);
        this.handleCloseBtn = this.handleCloseBtn.bind(this);
    }
    handleCloseBtn(){
        this.props.onClick(false);
    }
    render(){
        return (
            <div className="console">
                <button className="close__btn" onClick={this.handleCloseBtn}>Close</button>
                <div className="text__field">

                </div>
            </div>
        );
    }
}

export default Console;