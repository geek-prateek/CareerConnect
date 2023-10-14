import React, { useEffect } from "react";
import "./App.css";
import Header from "./HomePage/Header";
import Sidebar from "./HomePage/Sidebar";
import Feed from "./HomePage/Feed";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./HomePage/Login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./Firebase";
import Widgets from "./HomePage/Widgets";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./Profile/Profile";
import Connection from "./HomePage/Connections";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              !user ? (
                <Login />
              ) : (
                <div className="app_body">
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </div>
              )
            }
          />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/connect" element={user ? (<Connection username={user.displayName}
    designation={user.email}
    profile_img={user.photoUrl} />) : (
      <Navigate to="" /> // Redirect to a login page or handle authentication as needed
    )} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
