import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreater,
  onPostChangeActionCreater,
} from "../../redux/profile-reducer";
import Profile from "./profile";

// const ProfileContainer = (props) => {
//   const addPost = (name) => {
//     let action = addPostActionCreater(name);
//     props.dispatch(action);
//   };

//   const onPostChange = (text) => {
//     let action = onPostChangeActionCreater(text);
//     props.dispatch(action);
//   };
//   return (
//     <Profile
//       addPost={addPost}
//       onPostChange={onPostChange}
//       posts={props.postDate.posts}
//       newPostText={props.newPostText}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (name) => {
      dispatch(addPostActionCreater(name));
    },
    onPostChange: (text) => {
      dispatch(onPostChangeActionCreater(text));
    },
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
