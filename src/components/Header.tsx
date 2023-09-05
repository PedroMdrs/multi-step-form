import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "../css modules/Header.module.css";
import React from "react";
import { useNavigationProvider } from "../context/NavigationContext";

const SideNav = () => {
  const location = useLocation();
  const { setTab, tab, name, email, phone } = useNavigationProvider();
  const tabRef = React.useRef(setTab);

  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        tabRef.current("Info");
        break;
      case "/plan":
        tabRef.current("Plan");
        break;
      case "/addons":
        tabRef.current("Addons");
        break;
      case "/summary":
        tabRef.current("Summary");
        break;

      default:
        break;
    }
  }, [location.pathname]);
  return (
    <header className={styles.container}>
      <ul className={styles.stepsContainer}>
        <li>
          <NavLink className={tab === "Info" ? "active" : ""} to={"/"}>
            1
          </NavLink>
          <div>
            <span>step 1</span>
            <p>your info</p>
          </div>
        </li>
        <li>
          {name !== "" && email !== "" && phone !== "" ? (
            <NavLink className={tab === "Plan" ? "active" : ""} to={"/plan"}>
              2
            </NavLink>
          ) : (
            <a className={tab === "Plan" ? "active" : ""}>2</a>
          )}
          <div>
            <span>step 2</span>
            <p>select plan</p>
          </div>
        </li>
        <li>
          <NavLink className={tab === "Addons" ? "active" : ""} to={"/addons"}>
            3
          </NavLink>
          <div>
            <span>step 3</span>
            <p>add-ons</p>
          </div>
        </li>
        <li>
          <NavLink
            className={tab === "Summary" ? "active" : ""}
            to={"/summary"}
          >
            4
          </NavLink>
          <div>
            <span>step 4</span>
            <p>summary</p>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default SideNav;
