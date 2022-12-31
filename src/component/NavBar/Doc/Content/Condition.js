import condition from "./img/condition.png";
import conditionInput from "./img/condition_input.png";
import conditionActive from "./img/condition_active.png";
import conditionBorder from "./img/condition_border.png";

function Condition() {
    return (
        <div className="content">
            <h2 className="content__head">Koşul Şekli</h2>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Bu şekil belirli bir koşulun geçerli olması halinde
                aritmetik işlemlerin ve yazdır işleminin yapılmasını sağlar.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#9940;</span>
                Koşul içerisinde Değişken, Döngü ve ikinci bir Koşul ifadesi kullanamazsınız.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Aşağıda kullanılabilecek koşul operatörleri verilmiştir.
            </p>
            <ul style={{ listStyleType: "none" }}>
                <li>&#128073; {">"} İki değişkenin veya sayının büyüklüklerini karşılaştırır.</li>
                <li>&#128073; {">"} İki değişkenin veya sayının küçük olma durumlarını karşılaştırır.</li>
                <li>&#128073; = İki değişkenin veya sayının eşitliklerini karşılaştırır.</li>
                <li>&#128073; ! İki değişkenin veya sayının eşitsizliklerini karşılaştırır.</li>
            </ul>
            <div className="img var--img">
                <img src={condition} alt="koşul şekli" />
            </div>
            <h3 className="content__head">Kullanım Şekli</h3>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Girdiye değişken veya sayılardan oluşan bir koşul girin.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#9940;</span>
                Girdiğiniz koşulun sadece iki ifade içerebileceğini unutmayın.
            </p>
            <br></br>
            <p className="content__text">
                &#128073; Örnek Girdiler
            </p>
            <ul>
                <li>&#9989; var1 {">"} var2</li>
                <li>&#128683; var1 {">"} var2 = var3</li>
                <li>&#9989; 24 {"<"} var2</li>
            </ul>
            <p className="content__text"></p>
            <div className="img var--img--2">
                <img src={conditionInput} alt="koşul girdi" />
            </div>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Ardından koşul içerisinde işlem yapabilmek için <i>Çizim Ekranında </i>
                koşul şekline tıklayın.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Eğer koşul aktif değilse girdiğiniz diğer işlemler koşul içerisinde değerlendirilmez.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Koşulun aktif olduğunu anlamak için <i>Çizim Ekranının </i>
                sol üst köşesinde yeşil renkli bir daire olmalıdır.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Eğer aşağıdaki şekilde olduğu gibiyse koşul içerisinde aritmetik işlem veya yazdır işlemi
                tanımlayabilirsiniz.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Şarttan çıkmak için yeniden şekle tıklayabilirsiniz.
            </p>
            <div className="img var--img--3">
                <img src={conditionActive} alt="çizim ekranı aktif koşul" />
            </div>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Koşul içerisinde tanımladığınız işlemler yeşil bir kenarlıkla belirtilmiştir.
            </p>
            <div className="img var--img--3">
                <img src={conditionBorder} alt="kenarlı girdi" />
            </div>
        </div>
    );
}

export default Condition;