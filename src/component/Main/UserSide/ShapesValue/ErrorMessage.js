
function ErrorMessage(props) {
    return (
        <div className="error__box" style={{ display: props.errorState ? "block" : "none" }}>
            <div>
                <p>Hata!!!</p>
                <ul>
                    {
                        props.errorMessageList.map((message, i) => <li key={i}>{message}</li>)
                    }
                </ul>
                <button onClick={props.onClick}>X</button>
            </div>
        </div>
    );
}

export default ErrorMessage;