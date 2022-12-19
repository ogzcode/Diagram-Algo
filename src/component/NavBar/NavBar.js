import React from "react";
import "./NavBar.css";
import DocPage from "./Doc/DocPage.js";
import Export from "./Record/Export";
import Import from "./Record/Import";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            docIsOpen: false,
            exportPageIsOpen: false,
            importPageIsOpen: false
        };
        this.handleClickRun = this.handleClickRun.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleDocPage = this.handleDocPage.bind(this);
        this.handleImportPage = this.handleImportPage.bind(this);
        this.handleExportPage = this.handleExportPage.bind(this);
        this.handleExportBtn = this.handleExportBtn.bind(this);
    }
    handleExportBtn(data){
        this.props.onExport(data);
    }
    handleClickRun() {
        this.props.onClick(true);
    }
    handleClickDelete() {
        this.props.onDelete();
    }
    handleDocPage(value) {
        this.setState({
            docIsOpen: value
        });
    }
    handleExportPage(value){
        this.setState({
            exportPageIsOpen: value
        });
    }
    handleImportPage(value){
        this.setState({
            importPageIsOpen: value
        });
    }
    getOtherPage(){
        if (this.state.docIsOpen){
            return <DocPage onClick={this.handleDocPage} />;
        }
        else if (this.state.exportPageIsOpen){
            return <Export data={this.props.data} onClose={this.handleExportPage}/>;
        }
        else if (this.state.importPageIsOpen){
            return <Import 
                data={this.props.data} 
                onClose={this.handleImportPage}
                onExport={this.handleExportBtn}
            />;
        }
    }
    render() {
        return (
            <div className="navbar">
                <h1 className="logo">Diagram-Algo</h1>
                <div>
                    <button className="nav__btn run--btn" onClick={this.handleClickRun}>Çalıştır</button>
                    <button className="nav__btn delete--btn" onClick={this.handleClickDelete}>Temizle</button>
                    <button className="nav__btn import--btn" 
                        onClick={() => this.handleImportPage(true)}>İçe Aktar
                    </button> 
                    <button className="nav__btn export--btn" 
                        onClick={() => this.handleExportPage(true)}>Kaydet
                    </button> 
                    <button className="nav__btn doc--btn" onClick={() => this.handleDocPage(true)}>Yardım</button>
                </div>
                {
                    this.getOtherPage()
                }
            </div>
        );
    }
}

export default NavBar;