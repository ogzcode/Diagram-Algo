import variable from "./img/degisken.png";
import variableInput from "./img/variable_input.png";

function Variable(){
    return (
        <div className="content">
            <h2 className="content__head">Değişken Şekli</h2>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Değişken programınızdaki sayısal verileri tutan yapılardır.
                Bu yapı sayesinde pozitif sayıları program içerisinde kullanabilirsiniz.
            </p>
            <div className="img var--img">
                <img style={{width: 50, height: 50}} src={variable} alt="navbar"/>
            </div>
            <h3 className="content__head">Kullanım Şekli</h3>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Öncelikle İşlem menüsünden <i>Değişken</i> şekline tıklanır.<br></br>
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Ardından <i>Girdi Paneli</i> nden değişken ismi ve sayısal değeri girilir. 
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Değişkeni tanımlamak için <i>OLUSTUR</i> butonuna basabilirsiniz.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Eğer girdiğiniz verileri temizlemek isterseniz <i>SIL</i> butonuna basabilirsiniz.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#9940;</span>
                Değişken isminiz boşluk karakteri içermemelidir.<br></br>
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#9940;</span>
                Yanlış isim : merhaba dünya<br></br>
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#9989;</span>
                Doğru isim: merhabaDünya
            </p>
            <div className="img var--img--2">
                <img src={variableInput} alt="navbar"/>
            </div>
        </div>
    );
}

export default Variable;