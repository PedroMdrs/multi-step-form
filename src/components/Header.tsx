import { NavLink } from "react-router-dom";
import styles from "../css modules/Header.module.css";

const SideNav = () => {
  return (
    <header className={styles.container}>
      <ul className={styles.stepsContainer}>
        <li>
          <NavLink to={"/"}>1</NavLink>{" "}
          <div>
            <span>step 1</span>
            <p>your info</p>
          </div>
        </li>
        <li>
          <NavLink to={"/plan"}>2</NavLink>
          <div>
            <span>step 2</span>
            <p>select plan</p>
          </div>
        </li>
        <li>
          <NavLink to={"/addons"}>3</NavLink>
          <div>
            <span>step 3</span>
            <p>add-ons</p>
          </div>
        </li>
        <li>
          <NavLink to={"/finishing"}>4</NavLink>
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
