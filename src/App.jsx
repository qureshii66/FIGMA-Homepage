import React from "react";
import HomePage from "./components/pages/HomePage";
import { Route, Router, Routes } from "react-router";

export default function App() {
  return (
    <div>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}
