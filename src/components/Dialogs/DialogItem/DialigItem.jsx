import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialigItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <NavLink to={path}>
      <div className={s.dialog + " " + s.active}>
        <img src={props.avatar} className={s.avatar} />
        <div className={s.name}>{props.name} </div>
      </div>
    </NavLink>
  );
};

export default DialogItem;
