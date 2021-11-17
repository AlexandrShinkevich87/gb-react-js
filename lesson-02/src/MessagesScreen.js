import PropTypes from "prop-types";

const MessagesScreen = ({messageList}) => {
    const messages = messageList.map((message, i) =>
        <div key={i}>
            <span className="msg-author">{"[ "}{message.author}{" ] "}</span>
            <span className="msg-text">{message.text}</span>
        </div>);

    return <div className="messageList">
        {messages}
    </div>;
    // return <div className="messageList">
    //     {messageList.map((message, i) => <div> key ={i}> {message}  </div>)};
    // </div>;
};

MessagesScreen.propTypes = {
    array: PropTypes.array.isRequired
}
export default MessagesScreen;
