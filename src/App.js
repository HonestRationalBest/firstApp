import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Nav from "./components/Nav/nav";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import Friends from "./components/Friends/frinds";
import Music from "./components/Music/music";
import Setting from "./components/Setting/setting";
import { Route, BrowserRouter } from "react-router-dom";
import ProfileContainer from "./components/Profile/profileContainer";
import UsersContainer from "./components/Users/usersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="conteiner">
          <Header />
          <div className="content-wrapper">
            <Nav />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/friends"
              render={() => (
                <Friends friendDate={props.state.friendsPage.friends} />
              )}
            />
            <Route path="/music" render={() => <Music />} />
            <Route path="/setting" render={() => <Setting />} />
            <Route path="/users" render={() => <UsersContainer />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
