import React from "react";
import { connect } from "react-redux";
import {
  addPost,
  onPostChange,
  setUserProfile
} from "../../redux/profile-reducer";
import Profile from "./profile";
import * as axios from "axios";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component{
  
  componentDidMount(){
    let userId = this.props.match.params.userId;
    if(!userId){
      userId= 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render(){ 
    return(
      <>
      <Profile {...this.props} profile={this.props.profile}/>
      </>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: (name) => {
//       dispatch(addPost(name));
//     },
//     onPostChange: (text) => {
//       dispatch(onPostChange(text));
//     },
//   };
// };

const WithUrlDataContainerComponentProfile = withRouter(ProfileContainer);

export default connect(mapStateToProps, {onPostChange, addPost, setUserProfile})(WithUrlDataContainerComponentProfile);

