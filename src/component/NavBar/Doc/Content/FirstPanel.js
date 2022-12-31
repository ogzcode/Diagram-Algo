function FirstPanel(props){
    return (
        <div className="first__panel">
            <h2>Yardım Ekranına Hoşgeldiniz 
                <span style={{fontSize: "32px", marginLeft: ".5rem"}}>&#128640;</span>
            </h2>
            <p className="content__text">
                Bu program akış şeması yardımı ile program yazmanızı kolaylaştırmayı hedefleyen bir
                kodlama ortamıdır. 
                Temel kullanım yöntemlerini yan taraftaki panelden ulaşabilirsiniz.
            </p>
            <h3>İyi Kodlamalar <span style={{fontSize: "32px", marginLeft: ".5rem"}}>&#127881;</span></h3>
        </div>
    );
}

export default FirstPanel;