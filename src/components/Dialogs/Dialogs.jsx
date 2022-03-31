import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialigItem'
import Message from './Message/Message';



const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map((d, key) => (
    <DialogItem key={key} name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m, key) => (
    <Message key={key} message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
