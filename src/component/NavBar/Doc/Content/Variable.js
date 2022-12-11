import variable from "./img/degisken.png";
import variableInput from "./img/variable_input.png";

function Variable(){
    return (
        <div className="content">
            <h2 className="content__head">Değişken Şekli</h2>
            <p className="content__text">
                Değişken programınızdaki sayısal verileri tutan yapılardır.
                Bu yapı sayesinde sayı tanımlayabilir ve atama işlemi yapabilirsiniz.
            </p>
            <div className="img var--img">
                <img src={variable} alt="navbar"/>
            </div>
            <br></br>
            <h3 className="content__head">Kullanım Şekli</h3>
            <p className="content__text">
                -Öncelikle İşlem menüsünden <i>Değişken</i> şekline tıklanır.<br></br>
                -Ardından <i>Girdi Paneli</i> nden değişken ismi ve sayısal değeri girilir. 
            </p>
            <p className="content__text">
                -Değişkeni tanımlamak için <i>OLUSTUR</i> butonuna basabilirsiniz.
            </p>
            <p className="content__text">
                -Eğer girdiğiniz verileri temizlemek isterseniz <i>SIL</i> butonuna basabilirsiniz.
            </p>
            <div className="img var--img--2">
                <img src={variableInput} alt="navbar"/>
            </div>
        </div>
    );
}

export default Variable;