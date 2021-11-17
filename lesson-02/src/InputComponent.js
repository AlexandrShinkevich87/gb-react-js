import React, {useState} from "react";
import PropTypes from "prop-types";

const InputComponent = ({onSendMessage}) => {
    const [inputMessage, setInputMessage] = useState("");
    const sendAndRemoveInput = () => {
        const trimmedMessageText = inputMessage.trim();
        if (trimmedMessageText !== "") {
            onSendMessage(trimmedMessageText);
            setInputMessage("");
        }
    };
    return (<div className="inputWrapper">
            <input type="text" required value={inputMessage}
                   label="Введите сообщение"
                   onChange={(e) => setInputMessage(e.target.value)}
                   onKeyDown={({key}) => {
                       if (key === 'Enter') {
                           sendAndRemoveInput();
                       }
                   }}
            />
            <button onClick={sendAndRemoveInput}>Отправить</button>
        </div>
    );
}

InputComponent.propTypes = {
    onSendMessage: PropTypes.func
};

export default InputComponent;