import navbar from"./img/navbar.png";
import islem from "./img/islem.png";
import input from "./img/input.png";
import canvas from "./img/canvas.png";

function Fundamental(){
    return (
        <div className="content">
            <h2 className="content__head">Temel Kullanım</h2>
            <p className="content__text">Bu bölüm programın temel kullanımını ve tanıtımını içerir.</p>
            <h3 className="content__head">Paneller</h3>
            <p className="content__text">Program 4 adet bölümden oluşmaktadır.</p>
            <h4 className="content__head">Ana Panel</h4>
            <p className="content__text">
                -Bu panelde programı çalıştırmak, Çizim panelini temizlemek ve Yardım panelini açmak için
                butonlar bulunur.
            </p>
            <div className="img navbar--img">
                <img src={navbar} alt="navbar"/>
            </div>
            <br></br>
            <h4 className="content__head">İşlem Paneli</h4>
            <p className="content__text">
                -Bu panelde algoritmanızı temsil edecek şekiller bulunur.Bunların her biri için detaylı açıklama 
                yan panelde bulunabilir.Bu şekillere tıklayarak temsil ettikleri işlemi gerçekleştirebilirsiniz.
            </p>
            <div className="img">
                <img src={islem} alt="islem"/>
            </div>
            <br></br>
            <h4 className="content__head">Girdi Paneli</h4>
            <p className="content__text">
                -Bu panel de işlemlerin veri girişlerini tanımlayabilirsiniz.
                Her bir işlem için farklı bir girdi gereklidir.
                Girdiler boş bırakılamaz.Yani verisiz bir işlem tanımlayamazsınız.
            </p>
            <div className="img">
                <img src={input} alt="input"/>
            </div>
            <br></br>
            <h4 className="content__head">Çizim Ekranı</h4>
            <p className="content__text">
                -Çizim ekranı programınızın görsel şematik halidir.Bu şema yardımı ile girmiş olduğunuz veriler ve 
                kurduğunuz algoritma şekiller ile yukarıdan aşağı temsil edilir.
            </p>
            <p className="content__text">
                -Çizim ekranı üzerinde herhangi bir değişiklik yapılamaz.
            </p>
            <div className="img">
                <img src={canvas} alt="canvas"/>
            </div>
            <br></br>
        </div>
    );
}

export default Fundamental;