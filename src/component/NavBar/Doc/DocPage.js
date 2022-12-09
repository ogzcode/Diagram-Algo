import React from "react";
import "./DocPage.css";

class DocPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        };
        this.handleOnClose = this.handleOnClose.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
    }
    handleOnClose() {
        this.props.onClick(false);
    }
    onChangeContent(value){
        console.log();
    }
    render() {
        return (
            <div className="doc__container">
                <div className="doc__inner">
                    <div className="doc__select__side">
                        <p>Değişken</p>
                        <p>İşlem</p>
                        <p>Yazdır</p>
                        <p>Değişken</p>
                        <p>Şart</p>
                    </div>
                    <div className="doc__side">
                        <p>Hello World</p>
                    </div>
                    <button className="doc__close__btn" onClick={this.handleOnClose}>X</button>
                </div>
            </div>
        );
    }
}

export default DocPage;