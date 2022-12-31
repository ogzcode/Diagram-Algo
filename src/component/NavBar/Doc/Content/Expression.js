import expression from "./img/expression.png";
import expressionInput from "./img/expression_input.png";

function Expression() {
    return (
        <div className="content">
            <h2 className="content__head">İşlem Şekli</h2>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Bu şekil aritmetik işlemleri temsil eder.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Toplama, Çıkarma, Çarpma, Bölme ve Mod alma işlemlerini bu şekil ile temsil edebilirsiniz.
            </p>
            <div className="img var--img">
                <img src={expression} alt="navbar"/>
            </div>
            <h3 className="content__head">Kullanım Şekli</h3>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Öncelikle İşlemler menüsünden <i>İşlem</i> şekline tıklanır.<br></br>
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Ardından <i>Girdi Paneli</i> nden <i>Değişken</i> boşluğuna 
                tanımladığınız bir değişkenin ismi girilir.<br></br>
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Daha sonra <i>İşlem</i> boşluğuna da aritmetik bir işlem girilir.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                İşlemi tanımlamak için <i>OLUSTUR</i> butonuna basabilirsiniz.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Eğer girdiğiniz verileri temizlemek isterseniz <i>SIL</i> butonuna basabilirsiniz.
            </p>
            <div className="img var--img--2">
                <img src={expressionInput} alt="navbar"/>
            </div>
            <h3 className="content__head">Önemli Kurallar</h3>
            <p className="content__text">
                Burada hata almamanız için dikkat etmeniz gereken bazı kurallar vardır. 
            </p>
            <ul style={{listStyleType: "none"}}>
                <li>&#128073; <i>Değişken</i> boşluğuna mutlaka tanımlı bir değişkenin ismi girilmelidir.</li>
                <li>&#128073; <i>İşlem</i> boşluğunda sadece +,-,*,/,% işlemleri kullanılabilir.</li>
                <li>&#9940; <i>İşlem</i> boşluğunda parantez veya farklı bir karakter kullanmayınız.</li>
                <li>&#128073; <i>İşlem</i> boşluğunda tanımladığınız bir değişkeni kullanabilirsiniz</li>
                <li>&#9940; <i>İşlem</i> boşluğunda kullandığınız ifadeler arasında boşluk kullanmayınız.</li>
            </ul>
            <p className="content__text">
                &#128073; Örnek İşlem girdileri.
            </p>
            <ul style={{listStyleType: "none"}}>
                <li>&#128073; var1+12(Değişken, Sayı kullanımı)</li>
                <li>&#128073; 24-12(Sayı, Sayı kullanımı)</li>
                <li>&#128073; var1*var2(Değişken, Sayı kullanımı)</li>
                <li>&#128073; 24%var2+12(Değişken, Sayı kullanımı)</li>
                <li>&#128073; <i>(Hatalı Girdi)</i>: variable  +* 12a(Boşluk içermemeli)</li>
            </ul>
        </div>
    );
}

export default Expression;