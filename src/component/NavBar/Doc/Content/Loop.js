function Loop(){
    return (
        <div className="content">
            <h2 className="content__head">Döngü Şekli</h2>
            <p className="content__text">
                Bu şekil aritmetik işlemleri belirli bir sayıda tekrar etmenize olanak sağlar.
                Sadece aritmetik işlemler ile kullanılabilir.
            </p>
            <br></br>
            <p className="content__text">
                <i>NOT: Diğer işlem şekilleri ile kullanılamaz.</i>
            </p>
            <div className="img var--img--2">
                <img src="" alt="döngü_resmi"/>
            </div>
            <h3 className="content__head">Kullanım Şekli</h3>
            <p className="content__text">
                -Öncelikle girdi panelinden döngü adetini giriniz.
            </p>
            <div className="img var--img--2">
                <img src="" alt="loop girdi"/>
            </div>
            <p className="content__text">
                -Ardından döngü içerisinde işlem yapabilmek için  
                <i> Çizim Ekranında</i> döngü şekline tıklayınız.
            </p>
            <p className="content__text">
                -Döngünün aktif olduğunu anlamak için <i>Çizim Ekranının </i>
                 sol üst köşesinde mor renkli bir daire olmalıdır.
            </p>
            <p className="content__text">
                -Eğer aşağıdaki şekilde olduğu gibiyse döngü içerisinde aritmekik işlem 
                tanımlayabilirsiniz.
            </p>
            <div className="img var--img--2">
                <img src="" alt="çizim ekranı aktif döngü"/>
            </div>
            <p className="content__text">
                -Döngü içerisinde tanımladığınız işlemler mor bir kenarlıkla belirtilmiştir.
            </p>
            <div className="img var--img--2">
                <img src="" alt="kenarlı girdi"/>
            </div>
            <p className="content__text">
                -Döngüden çıkmak için yeniden şekle tıklayabilirsiniz.
            </p>
            <h3 className="content__head">Örnek Program</h3>
            <p className="content__text">
                Aşağıdaki şemada <i>n=0</i> değişkeni tanımlanmıştır ve bu değişken 5
                defa döngü içerisinde değeri güncellenir.Daha sonra da ekrana değeri 
                yazılır.
            </p>
            <div className="img var--img--2">
                <img src="" alt="döngü örnek"/>
            </div>
        </div>
    );
}

export default Loop;