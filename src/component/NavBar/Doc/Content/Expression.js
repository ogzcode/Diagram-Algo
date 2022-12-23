import expression from "./img/expression.png";
import expressionInput from "./img/expression_input.png";

function Expression() {
    return (
        <div className="content">
            <h2 className="content__head">İşlem Şekli</h2>
            <p className="content__text">
                Bu şekil aritmetik işlemleri temsil eder.
            </p>
            <p className="content__text">
                Toplama, Çıkarma, Çarpma, Bölme ve Mod alma işlemlerini bu şekil ile temsil edebilirsiniz.
            </p>
            <div className="img var--img">
                <img src={expression} alt="navbar"/>
            </div>
            <h3 className="content__head">Kullanım Şekli</h3>
            <p className="content__text">
                -Öncelikle İşlemler menüsünden <i>İşlem</i> şekline tıklanır.<br></br>
                -Ardından <i>Girdi Paneli</i> nden <i>Değişken</i> boşluğuna 
                tanımladığınız bir değişkenin ismi girilir.<br></br>
                -Daha sonra <i>İşlem</i> boşluğuna da aritmetik bir işlem girilir.
            </p>
            <p className="content__text">
                -İşlemi tanımlamak için <i>OLUSTUR</i> butonuna basabilirsiniz.
            </p>
            <p className="content__text">
                -Eğer girdiğiniz verileri temizlemek isterseniz <i>SIL</i> butonuna basabilirsiniz.
            </p>
            <div className="img var--img--2">
                <img src={expressionInput} alt="navbar"/>
            </div>
            <h3 className="content__head">Önemli Kurallar</h3>
            <p className="content__text">
                Burada hata almamanız için dikkat etmeniz gereken bazı kurallar vardır. 
            </p>
            <ul>
                <li><i>Değişken</i> boşluğuna mutlaka tanımlı bir değişkenin ismi girilmelidir.</li>
                <li><i>İşlem</i> boşluğunda sadece +,-,*,/,% işlemleri kullanılabilir.</li>
                <li><i>İşlem</i> boşluğunda parantez veya farklı bir karakter kullanmayınız.</li>
                <li><i>İşlem</i> boşluğunda değişken kullanabilirsiniz</li>
                <li><i>İşlem</i> boşluğunda kullandığınız ifadeler arasında boşluk kullanmayınız.</li>
            </ul>
            <p className="content__text">
                Örnek İşlem girdileri.
            </p>
            <ul>
                <li>var1+12</li>
                <li>24-12</li>
                <li>var1*var2</li>
                <li>24%var2+12</li>
                <li><i>(Hatalı Girdi)</i>: variable  +* 12a</li>
            </ul>
        </div>
    );
}

export default Expression;