import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About";
import News from "./pages/News";
import GameInfo from "./pages/GameInfo";
import AdminPortal from "./pages/AdminPortal";
import Auth from "./pages/Auth";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "./pages/AuthContext";
import { useEffect } from "react";



const App = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  useEffect(() => {
    if (!firebase.isLoggedIn) {
      navigate("/auth");
    }
  }, [!firebase.isLoggedIn]);

  return (
    <div>
      {/* <BrowserRouter> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/gameinfo" element={<GameInfo />} />
          <Route exact path="/admin" element={<AdminPortal />} />
          <Route exact path="/auth" element={<Auth />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
