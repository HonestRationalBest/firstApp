import React from "react";
import { NavLink } from "react-router-dom";
import style from "./dialog.module.css";
import "./img/1.jpg";

const Dialog = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <a href="#" className={style.dialog_wrapper}>
      <img src={`${props.id}` + ".jpg"} className={style.avatar} />
      <div className={style.text_wrapper}>
        <NavLink to={path}>{props.name}</NavLink>
        <p>Вы: Lorem ipsem</p>
      </div>
    </a>
  );
};

export default Dialog;
