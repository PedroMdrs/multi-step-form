import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import PersonalInfo from "./components/PersonalInfo.tsx";
import Plan from "./components/Plan.tsx";
import AddOns from "./components/AddOns.tsx";
import "./App.css";
import { NavigationStorage } from "./context/NavigationContext.tsx";
import Finish from "./components/Finish.tsx";
import Summary from "./components/Summary.tsx";
const App = () => {
  return (
    <NavigationStorage>
      <BrowserRouter>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<PersonalInfo />}></Route>
            <Route path="/plan" element={<Plan />}></Route>
            <Route path="/addons" element={<AddOns />}></Route>
            <Route path="/summary" element={<Summary />}></Route>
            <Route path="/thanks" element={<Finish />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </NavigationStorage>
  );
};

export default App;
