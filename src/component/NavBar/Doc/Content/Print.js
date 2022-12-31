import print from "./img/print.png";
import printInput from "./img/print_input.png";

function Print() {
    return (
        <div className="content">
            <h2 className="content__head">Yazdır Şekli</h2>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Bu şekil konsol ekranına çıktı yazmanızı sağlar.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Aynı zamanda değişken değerlerini yazmak için de kullanılır.
            </p>
            <div className="img var--img">
                <img src={print} alt="print resmi"/>
            </div>
            <h3 className="content__head">Kullanım Şekli</h3>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Herhangi bir şeyler yazdırmak için girdiye doğrudan giriş yapabilirsiniz.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Tanımladığınız değişkeni yazdırmak için de; değişkenin başına <i>$</i> işareti koyarak
                yazabilirsiniz.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#9940;</span>
                Tanımlamadığınız bir değişken ismi yazarsanız bu hata almanıza neden olur.
            </p>
            <div className="img var--img--2">
                <img src={printInput} alt="print girdi"/>
            </div>
            <br></br>
            <p className="content__text">Örnek Kullanım</p>
            <ul style={{listStyleType: "none"}}>
                <li>&#128073; $var1 bir değişkendir<i>(var1 isimli değişkenin değeri yazılır.)</i></li>
                <li>&#128073; $var1 ve $var2 <i>(var1 ve var2 değişkenlerinin değerini yazar.)</i></li>
                <li>&#128073; Merhaba Dünya</li>
            </ul>
        </div>
    );
}

export default Print;