//İçe aktar
import "./Record.css";
import React from "react";

class Import extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.handleOnClose = this.handleOnClose.bind(this);
        this.handleExportBtn = this.handleExportBtn.bind(this);
        this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
    }
    componentDidMount(){
        let data = JSON.parse(localStorage.getItem("projects")) || [];
        this.setState({
            data: data
        });
    }
    handleOnClose() {
        this.props.onClose(false);
    }
    getShema() {
        return this.state.data.map((d, i) => (
                <div className="shema" key={i}>
                    <div className="shema--left">
                        <span className="shema--index">{i}</span>
                        <span className="shema--name">{d.name}</span>
                    </div>
                    <div className="shema--right">
                        <button className="shema--export" onClick={() => this.handleExportBtn(i)}>Aktar</button>
                        <button className="shema--delete" onClick={() => this.handleDeleteBtn(i)}>Sil</button>
                    </div>
                </div>
            ));
    }
    handleExportBtn(i){
        this.props.onExport(this.state.data[i].shema);
    }
    handleDeleteBtn(i){
        let data = this.state.data.slice();
        data.splice(i,1);

        this.setState({
            data: data
        });
        localStorage.setItem("projects", JSON.stringify(data));
    }
    render() {
        return (
            <div className="record__container">
                <div className="inner__import">
                    <div className="shema__list">
                        {this.getShema()}
                    </div>
                    <button className="record__close__btn" onClick={this.handleOnClose}>X</button>
                </div>
            </div>
        );
    }
}

export default Import;