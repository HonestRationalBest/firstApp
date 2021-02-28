import React from "react";
import FindButton from "../Friends/Find/find";
import Search from "../Friends/Search/search";
import style from "./users.module.css";
import angelina from "./img/angelina.jpg";
import { NavLink } from "react-router-dom";



const Users = (props)=>{

  let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize);
  let pages =[];

  for(let i=1;i<pagesCount;i++){
    pages.push(i);
  }
    return(
    <div>
        <div className={style.flex}>
          <Search />
          <FindButton />
        </div>
        {props.users.map((u) => (
          <div key={u.id}>
            <div className={style.wrapper}>
              <div className={style.flex_start}>
                <NavLink to={"/profile/" + u.id}> 
                <img src={angelina} alt="none" />
                </NavLink>
                <div className={style.text_wrapper}>
                  <h5>{u.name}</h5>
                  <p>{u.status}</p>
                </div>
              </div>
              {u.followed ? (
                <button
                  className={style.add_button}
                  onClick={() => {
                    props.addFriend(u.id);
                  }}
                >
                  add
                </button>
              ) : (
                <button
                  className={style.add_button}
                  onClick={() => {
                    props.deleteFriend(u.id);
                  }}
                >
                  delete
                </button>
              )}
            </div>
          </div>
        ))}
        <div>
        {pages.map( p =>{
          return(<span className={props.currentPage === p && style.selected} onClick={()=>{props.onPageChanged(p)}}>{p}</span>)
        }
        )}     
        </div>
      </div>
      )
}

export default Users;