import React, {useState, useCallback, useEffect, useRef} from "react";
import './App.css';
import InputComponent from './InputComponent';
import MessagesScreen from "./MessagesScreen";

function App() {

    const [messageList, setMessageList] = useState([]);
    /** Указатель на того кто последним оставил сообщение */
    const [lastName, setLastName] = useState();
    /** Сообщение в поле ввода */
    const [inputText, setInputText] = useState("");
    /** Записывает сообщение в список и устанавливает указатель автора последнего сообщения */
    const storeMessageToList = (text, name) => {
        setMessageList((prev) => [...prev, {
            text: text,
            author: name
        }]);
        setLastName(name);
    }

    const onSendMessage = (messageText) => {
        if (messageText) {
            storeMessageToList(inputText, messageText);
            setInputText("");
        }
    };

    useEffect(() => {
        const lastMessages = messageList[messageList.length - 1];
        let timerId = null;

        if (messageList.length && lastMessages.author !== "Bot") {
            timerId = setTimeout(() => {
                // setMessagesList([
                //     ...messageList,
                //     { author: "Bot", message: "hello from bot" },
                // ]);
                // storeMessageToList({ author: "Bot", message: "hello from bot" })
                storeMessageToList("hello from bot", "Bot")
            }, 200);
        }

        return () => clearInterval(timerId);
    }, [messageList]);

    // const sendMessage = () => {
    //     if (value) {
    //         setMessages([
    //             ...messages,
    //             { author: "User", message: value, date: new Date() },
    //         ]);
    //         setValue("");
    //     }
    // };

    return (
        <div className="mainWrapper">
            <MessagesScreen messageList={messageList}/>
            <InputComponent onSendMessage={onSendMessage}/>
        </div>
    );
}

export default App;
