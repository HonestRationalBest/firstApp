import React from "react";
import Dialogs from "./dialogs";
import {
  addMessageActionCreater,
  onMessageChangeActionCreater,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {
//   let newMassage = props.dialogDate.newMassage;

//   const addMessage = (name) => {
//     let action = addMessageActionCreater(name);
//     props.dispatch(action);
//   };

//   const onMessageChange = (body) => {
//     let action = onMessageChangeActionCreater(body);
//     props.dispatch(action);
//   };
//   return (
//     <Dialogs
//       addMessage={addMessage}
//       onMessageChange={onMessageChange}
//       newMassage={newMassage}
//       messages={props.dialogDate.messages}
//       dialogs={props.dialogDate.dialogs}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    newMassage: state.dialogsPage.newMassage,
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (name) => {
      dispatch(addMessageActionCreater(name));
    },
    onMessageChange: (body) => {
      dispatch(onMessageChangeActionCreater(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
