import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import AboutSscreen from "./AboutSscreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import NavBar from "./NavBar";

const AppRouter = () => {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="login" element={<LoginScreen />} />
              <Route path="about" element={<AboutSscreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route to="/" />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
