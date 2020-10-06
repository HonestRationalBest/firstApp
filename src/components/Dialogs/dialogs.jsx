import React from "react";
import Search from "../Friends/Search/search";
import Dialog from "./dialog/dialog";
import style from "./dialogs.module.css";
import Message from "./message/message";
import attach from "./img/attach.svg";
import send from "./img/send.svg";
import smile from "./img/smile.svg";

const Dialogs = (props) => {
  let messageEl = props.messages.map((m) => (
    <Message name={m.name} message={m.message} />
  ));

  let dialogsEl = props.dialogs.map((d) => <Dialog name={d.name} id={d.id} />);

  const addMessage = () => {
    let name = "You";
    props.addMessage(name);
  };

  const onMessageChange = (e) => {
    let body = e.target.value;
    props.onMessageChange(body);
  };

  return (
    <div>
      <Search />
      <div className={style.wrapper}>
        <div className={style.dialogs_wrapper}>{dialogsEl}</div>
        <div className={style.first_hr}></div>
        <div className={style.second_hr}></div>
        <div className={style.message_wrapper}>
          <div className={style.message_navigation}>
            <div className={style.hamburger}></div>
            <div className={style.navigation}>
              <div className={style.status}>online</div>
              <div className={style.online}></div>
              <div className={style.avatar_profile}></div>
            </div>
          </div>
          {messageEl}
          <div className={style.button_wrapper}>
            <img src={attach} alt="none" className={style.attach} />
            <textarea
              placeholder="Write a message"
              value={props.newMassage}
              onChange={onMessageChange}
            ></textarea>
            <img src={smile} alt="none" className={style.smile} />
            <a onClick={addMessage}>
              <img src={send} alt="none" className={style.send} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
