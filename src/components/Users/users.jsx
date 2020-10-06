import React from "react";
import FindButton from "../Friends/Find/find";
import Search from "../Friends/Search/search";
import style from "./users.module.css";
import angelina from "./img/angelina.jpg";
import * as axios from "axios";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUser(response.data.items);
      });
  }

  // if (props.users.length === 0) {
  //   props.setUser([
  //     {
  //       id: 1,
  //       name: "Angelina",
  //       followed: true,
  //       status: "Lorem ipsum dolor sit amet, consectetur",
  //     },
  //     {
  //       id: 2,
  //       name: "Angelina",
  //       followed: false,
  //       status: "Lorem ipsum dolor sit amet, consectetur",
  //     },
  //     {
  //       id: 3,
  //       name: "Angelina",
  //       followed: true,
  //       status: "Lorem ipsum dolor sit amet, consectetur",
  //     },
  //   ]);
  // }
  return (
    <div>
      <div className={style.flex}>
        <Search />
        <FindButton />
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div className={style.wrapper}>
            <div className={style.flex_start}>
              <img src={angelina} alt="none" />
              <div className={style.text_wrapper}>
                <h5>{u.name}</h5>
                <p>{u.status}</p>
              </div>
            </div>
            {u.followed ? (
              <button
                className={style.add_button}
                onClick={() => {
                  props.deleteFriend(u.id);
                }}
              >
                add
              </button>
            ) : (
              <button
                className={style.add_button}
                onClick={() => {
                  props.addFriend(u.id);
                }}
              >
                delete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
