import Title from "./Title";
import Arcade from "./ArcadeIcon";
import AdvancedIcon from "./AdvancedIcon";
import ProIcon from "./ProIcon";
import styles from "../css modules/Plan.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Plan = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Title
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />
      <div className={styles.optionsContainer}>
        <div className={styles.CardsContainer}>
          <div className={styles.card}>
            <Arcade />
            <div>
              <p>Arcade</p>
              <span>$9/mo</span>
            </div>
          </div>
          <div className={styles.card}>
            <AdvancedIcon />
            <div>
              <p>Advanced</p>
              <span>$12/mo</span>
            </div>
          </div>
          <div className={styles.card}>
            <ProIcon />
            <div>
              <p>Pro</p>
              <span>$15/mo</span>
            </div>
          </div>
        </div>
        <div className={styles.sliderContainer}>
          <span>Monthly</span>
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={`${styles.round} ${styles.slider}`}></span>
          </label>
          <span>Yearly</span>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <Button onClick={() => navigate("/")}>Go Back</Button>
        <Button onClick={() => navigate("/addons")}>Next Step</Button>
      </div>
    </div>
  );
};

export default Plan;
