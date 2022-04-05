import React from "react";
import s from "./Message.module.css";
import { useParams } from "react-router-dom";

const Message = (props) => {
  const { id } = useParams();

  let messagesBlock = props.dialogs.filter(function (item) {
    return item.id == id;
  });

  let message = messagesBlock[0].messages.map((d, key) => (
    <div className={s.message} key={key}>
      {d.message}
    </div>
  ));

  let newMessageElement = React.createRef()

  const sendMessage = () => {
    console.log(newMessageElement.current.value);
  };

  return (
    <div className={s.messagesSide}>
      <div className={s.messages}>{message}</div>
      <div className={s.sendMessage}>
        <div>
          <textarea
          ref={newMessageElement}
            name="sendMessage"
            id="sendMessage"
            cols="10"
            rows="4"
          ></textarea>
        </div>
        <div>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
