import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import PersonalInfo from "./components/PersonalInfo.tsx";
import Plan from "./components/Plan.tsx";
import AddOns from "./components/AddOns.tsx";
import Finishing from "./components/Finishing.tsx";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <main className="card">
        <Header />
        <Routes>
          <Route path="/" element={<PersonalInfo />}></Route>
          <Route path="/plan" element={<Plan />}></Route>
          <Route path="/addons" element={<AddOns />}></Route>
          <Route path="/finishing" element={<Finishing />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
