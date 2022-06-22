import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={<Dialogs dialogs={props.dialogs} />}
            />
            <Route
              path="/profile"
              element={
                <Profile
                  posts={props.posts}
                  newPostText={props.newPostText}
                  updataNewPostText={props.updataNewPostText}
                  addPost={props.addPost}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
