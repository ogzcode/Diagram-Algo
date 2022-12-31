import navbar from "./img/navbar.png";
import islem from "./img/islem.png";
import input from "./img/input.png";
import canvas from "./img/canvas.png";
import deleteBtn from "./img/delete.png";
import exportBtn from "./img/export.png";
import editBtn from "./img/edit.png";
import helpBtn from "./img/help.png";
import runBtn from "./img/run.png";
import editPage from "./img/edit_page.png";
import exportPage from "./img/export_page.png";

function Fundamental() {
    return (
        <div className="content">
            <h2 className="content__head">Temel Kullanım</h2>
            <p className="content__text">
                Bu bölüm programın temel kullanımını ve tanıtımını içerir.
                Programda bulunan paneller hakkında ki bilgiye buradan erişebilirsiniz.
            </p>
            <h3 className="content__head">Paneller</h3>
            <p className="content__text">Program içerisinde 8 adet temel panel vardır.Bunlar:</p>
            <ul style={{ listStyleType: "none" }}>
                <li>&#128073; Ana Panel</li>
                <li>&#128073; Şekil Paneli</li>
                <li>&#128073; Girdi Paneli</li>
                <li>&#128073; Çizim Ekranı</li>
                <li>&#128073; Kaydet Paneli</li>
                <li>&#128073; İçe Aktar Paneli</li>
                <li>&#128073; Yardım Paneli</li>
                <li>&#128073; Konsol Ekranı</li>
            </ul>
            <h4 className="content__head">Ana Panel</h4>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span> 
                Bu panelde programın genel kullanımı için butonlar bulunur.
                Bu butonlar yardımı ile projeyi çalıştırabilir, kayıdedebilir, ekranı temizleyebilir vb. işlemleri
                gerçekleştirebilirsiniz.
            </p>
            <div className="img navbar--img">
                <img src={navbar} alt="navbar" />
            </div>
            <h5 className="content__head">Çalıştır Butonu</h5>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span> 
                Bu buton programınızı çalıştırır ve program çıktısını gösteren konsol ekranını açar.
            </p>
            <div className="img var--img">
                <img src={runBtn} alt="navbar" />
            </div>
            <h5 className="content__head">Temizle Butonu</h5>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Bu buton çizim ekranını temizler.
            </p>
            <div className="img var--img">
                <img src={deleteBtn} alt="navbar" />
            </div>
            <h5 className="content__head">İçe Aktar Butonu</h5>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Bu buton daha önce kaydettiğiniz programları gösteren bir panel açar.
                Bu panel içerisinde kaydettiğiniz programları içeri aktarabilirsiniz.
            </p>
            <div className="img var--img">
                <img src={exportBtn} alt="navbar" />
            </div>
            <h5 className="content__head">Kaydet Butonu</h5>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Bu buton programınızı bir isim vererek kaydetmenizi sağlar.
            </p>
            <div className="img var--img">
                <img src={editBtn} alt="navbar" />
            </div>
            <h5 className="content__head">Yardım Butonu</h5>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Bu buton program ile ilgili bilgileri bulabileceğiniz yardım panelini açar.
            </p>
            <div className="img var--img">
                <img src={helpBtn} alt="navbar" />
            </div>
            <br></br>
            <h4 className="content__head">Şekil Paneli</h4>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Bu panelde algoritmanızı temsil edecek şekiller bulunur.
                Bunların her biri için detaylı açıklama yan panelde bulunabilir.
                Bu şekillere tıklayarak temsil ettikleri işlemi gerçekleştirebilirsiniz.
            </p>
            <div className="img">
                <img src={islem} alt="islem" />
            </div>
            <br></br>
            <h4 className="content__head">Girdi Paneli</h4>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Bu panel de işlemlerin veri girişlerini tanımlayabilirsiniz.<br></br>
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#9940;</span>
                Girdiler boş bırakılamaz yani verisiz bir işlem tanımlayamazsınız.
            </p>
            <div className="img">
                <img src={input} alt="input" />
            </div>
            <br></br>
            <h4 className="content__head">Çizim Ekranı</h4>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Çizim ekranı programınızın görsel şematik halidir.
                Bu şema yardımı ile girmiş olduğunuz veriler ve
                kurduğunuz algoritma şekiller ile yukarıdan aşağı temsil edilir.
            </p>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#9940;</span>
                Eğer tanımladığınız son şekli silmek isterseniz çizim ekranında şekilin üzerine çift tıklayınız.
            </p>
            <div className="img">
                <img src={canvas} alt="canvas" />
            </div>
            <br></br>
            <h4 className="content__head">Kaydet Paneli</h4>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Oluşturduğunuz mevcut projeye bir isim vererek kaydedebilirsiniz.
            </p>
            <div className="img">
                <img src={editPage} alt="canvas" />
            </div>
            <br></br>
            <h4 className="content__head">Projeler Paneli</h4>
            <p className="content__text">
                <span style={{ fontSize: "18px", marginRight: ".5rem" }}>&#128073;</span>
                Daha önce kaydettiğiniz projelerin bulunduğu panel.Burada projeleri içeri aktarabilir veya
                silebilirsiniz.
            </p>
            <div className="img">
                <img src={exportPage} alt="canvas" />
            </div>
            <br></br>
        </div>
    );
}

export default Fundamental;