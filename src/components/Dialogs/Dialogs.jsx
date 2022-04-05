import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialigItem";
import Message from "./Message/Message";
import {  Routes, Route} from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d, key) => (
    <DialogItem key={key} name={d.name} avatar={d.avatar} id={d.id} />
  ));

  // let messagesElements = props.dialogs.messages.map((m, key) => (
  //   <Message key={key} message={m.message} />
  // ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <Routes>
        <Route
          path=":id"
          element={<Message dialogs={props.dialogs} />}
        />
      </Routes>
      {/* <div className={s.messages}>{messagesElements}</div> */}
    </div>
  );
};

export default Dialogs;
