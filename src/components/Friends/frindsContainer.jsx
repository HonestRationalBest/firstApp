import React from "react";
import style from "./friends.module.css";
import Search from "./Search/search";
import Friend from "./friend/friend";
import { connect } from "react-redux";

// const FriendsContainer = (props) => {
//   return <Friend friends={props.friends} />;
// };

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friend);

export default FriendsContainer;
