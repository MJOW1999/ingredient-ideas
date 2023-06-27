import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router-dom";
import RecipePage from "./components/RecipePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
      </Routes>
    </>
  );
}

export default App;
