import React from "react";


class ValueBtn extends React.Component {
    constructor(props){
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    handleBtnClick(value){
        this.props.onClick(value);
    }
    render(){
        return (
            <div className="btn__box">
                <button className="btn create" onClick={() => this.handleBtnClick(true)}>Create</button>
                <button className="btn delete" onClick={() => this.handleBtnClick(false)}>Delete</button>
            </div>
        );
    }
}

export default ValueBtn;