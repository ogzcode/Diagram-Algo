import loop from "./img/loop.png";
import loopInput from "./img/loop_input.png";
import loopBorder from "./img/loop_border.png";
import loopActive from "./img/loop_active.png";
import conditionIn from "./img/conditioninloop.png";

function Loop() {
    return (
        <div className="content">
            <h2 className="content__head">Döngü Şekli</h2>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Bu şekil aritmetik işlemleri, yazdır işlemini ve koşul işlemini
                belirli bir sayıda tekrar etmenizi sağlar.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#9940;</span>
                Döngü içerisinde Değişken ve ikinci bir Döngü tanımlayamazsınız.
            </p>
            <div className="img var--img">
                <img src={loop} alt="döngü_resmi" />
            </div>
            <h3 className="content__head">Kullanım Şekli</h3>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Öncelikle girdi panelinden döngü adetini giriniz.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Eğer tanımladığınız bir değişken var ise değişkenim ismini yazarak kullanabilirsiniz.
            </p>
            <div className="img var--img--2">
                <img src={loopInput} alt="loop girdi" />
            </div>
            <p className="content__text">
            <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Ardından döngü içerisinde işlem yapabilmek için
                <i> Çizim Ekranında</i> döngü şekline tıklayınız.
            </p>
            <p className="content__text">
            <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#9940;</span>
                Eğer döngü aktif değil ise tanımladığınız işlemler döngü içerisinde sayılmaz.
            </p>
            <p className="content__text">
            <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Döngünün aktif olduğunu anlamak için <i>Çizim Ekranının </i>
                sol üst köşesinde mor renkli bir daire olmalıdır.
            </p>
            <p className="content__text">
            <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Eğer aşağıdaki şekilde olduğu gibiyse döngü içerisinde aritmetik, yazdır ve koşul işlemini
                tanımlayabilirsiniz.
            </p>
            <p className="content__text">
            <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Döngüden çıkmak için yeniden şekle tıklayabilirsiniz.
            </p>
            <div className="img var--img--3">
                <img src={loopActive} alt="çizim ekranı aktif döngü" />
            </div>
            <p className="content__text">
            <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Döngü içerisinde tanımladığınız işlemler mor bir kenarlıkla belirtilmiştir.
            </p>
            <div className="img var--img--3">
                <img src={loopBorder} alt="kenarlı girdi" />
            </div>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Eğer döngü içerisinde koşul kullandıysanız ve bu 
                koşulun içerisinde işlemler tanımlarsanız bu işlemler siyah bir kenarlıkla belirtilir.
            </p>
            <div className="img var--img--3">
                <img src={conditionIn} alt="kenarlı girdi" />
            </div>
        </div>
    );
}

export default Loop;