import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import PersonalInfo from "./components/PersonalInfo.tsx";
import Plan from "./components/Plan.tsx";
import AddOns from "./components/AddOns.tsx";
import Finishing from "./components/Summary.tsx";
import "./App.css";
import { NavigationStorage } from "./context/NavigationContext.tsx";
const App = () => {
  return (
    <NavigationStorage>
      <BrowserRouter>
        <main>
          <div className="card">
            <Header />
            <Routes>
              <Route path="/" element={<PersonalInfo />}></Route>
              <Route path="/plan" element={<Plan />}></Route>
              <Route path="/addons" element={<AddOns />}></Route>
              <Route path="/summary" element={<Finishing />}></Route>
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </NavigationStorage>
  );
};

export default App;
