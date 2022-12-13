import condition from "./img/condition.png";
import conditionInput from "./img/condition_input.png";
import conditionActive from "./img/condition_active.png";
import conditionBorder from "./img/condition_border.png";
import conditionExample from "./img/condition_example.png";

function Condition() {
    return (
        <div className="content">
            <h2 className="content__head">Koşul Şekli</h2>
            <p className="content__text">
                -Bu şekil belirli bir koşulun geçerli olması halinde bazı 
                aritmetik işlemlerin yapılmasını sağlar.
            </p>
            <p className="content__text">
                -Aşağıda kullanılabilecek koşul operatörleri verilmiştir.
            </p>
            <ul>
                <li><i>{">"}</i> İki değişkenin veya sayının büyüklüklerini karşılaştırır.</li>
                <li><i>{">"}</i> İki değişkenin veya sayının küçük olma durumlarını karşılaştırır.</li>
                <li><i>=</i> İki değişkenin veya sayının eşitliklerini karşılaştırır.</li>
                <li><i>!</i> İki değişkenin veya sayının eşitsizliklerini karşılaştırır.</li>
            </ul>
            <div className="img var--img">
                <img src={condition} alt="koşul şekli"/>
            </div>
            <h3 className="content__head">Kullanım Şekli</h3>
            <p className="content__text">
                -Girdiye değişken veya sayılardan oluşan bir koşul girin.
            </p>
            <p className="content__text">
                -Girdiğiniz koşulun sadece iki ifade içerebileceğini unutmayın.
            </p>
            <br></br>
            <p className="content__text">
                -Örnek Girdiler
            </p>
            <ul>
                <li>(Doğru) var1 {">"} var2</li>
                <li>(Yanlış) var1 {">"} var2 = var3</li>
                <li>(Doğru) 24 {"<"} var2</li>
            </ul>
            <p className="content__text"></p>
            <div className="img var--img--2">
                <img src={conditionInput} alt="koşul girdi"/>
            </div>
            <p className="content__text">
                -Ardından koşul içerisinde işlem yapabilmek için <i>Çizim Ekranında </i>
                koşul şekline tıklayın.
            </p>
            <p className="content__text">
                -Koşulun aktif olduğunu anlamak için <i>Çizim Ekranının </i>
                 sol üst köşesinde yeşil renkli bir daire olmalıdır.
            </p>
            <p className="content__text">
                -Eğer aşağıdaki şekilde olduğu gibiyse koşul içerisinde aritmetik işlem 
                tanımlayabilirsiniz.
            </p>
            <div className="img var--img--3">
                <img src={conditionActive} alt="çizim ekranı aktif koşul"/>
            </div>
            <p className="content__text">
                -Koşul içerisinde tanımladığınız işlemler yeşil bir kenarlıkla belirtilmiştir.
            </p>
            <div className="img var--img--3">
                <img src={conditionBorder} alt="kenarlı girdi"/>
            </div>
            <p className="content__text">
                -Şarttan çıkmak için yeniden şekle tıklayabilirsiniz.
            </p>
            <h3 className="content__head">Örnek Program</h3>
            <p className="content__text">
                Aşağıdaki şemada <i>n=0</i> değişkeni tanımlanmıştır ve bu değişkenin değeri
                0 a eşit ise değişkenin değerine 10 eklenmesi ve daha sonra da ekrana değerinin 
                yazılması kodlanmıştır.
            </p>
            <div className="img var--img--3">
                <img src={conditionExample} alt="şart örnek"/>
            </div>
        </div>
    );
}

export default Condition;