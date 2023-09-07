import Title from "./Title";
import Arcade from "./ArcadeIcon";
import AdvancedIcon from "./AdvancedIcon";
import ProIcon from "./ProIcon";
import styles from "../css modules/Plan.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useNavigationProvider } from "../context/NavigationContext";
const Plan = () => {
  type sliderType = "Monthly" | "Yearly";
  const navigate = useNavigate();
  const { plan, setPlan, period, setPeriod, price } = useNavigationProvider();
  function changePeriod(value: sliderType) {
    setPeriod(value);
  }
  return (
    <div className="container">
      <Title
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />
      <div className={styles.optionsContainer}>
        <div className={styles.CardsContainer}>
          <div
            className={
              plan === "Arcade" ? `${styles.card} activePlan` : styles.card
            }
            onClick={() => setPlan("Arcade")}
          >
            <Arcade />
            <div>
              <p>Arcade</p>
              <span>{`$${price.Arcade}/mo`}</span>
            </div>
          </div>
          <div
            className={
              plan === "Advanced" ? `${styles.card} activePlan` : styles.card
            }
            onClick={() => setPlan("Advanced")}
          >
            <AdvancedIcon />
            <div>
              <p>Advanced</p>
              <span>{`$${price.Advanced}/mo`}</span>
            </div>
          </div>
          <div
            className={
              plan === "Pro" ? `${styles.card} activePlan` : styles.card
            }
            onClick={() => setPlan("Pro")}
          >
            <ProIcon />
            <div>
              <p>Pro</p>
              <span>{`$${price.Pro}/mo`}</span>
            </div>
          </div>
        </div>
        <div className={styles.sliderContainer}>
          <span>Monthly</span>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={period === "Yearly"}
              onClick={() =>
                changePeriod(period === "Monthly" ? "Yearly" : "Monthly")
              }
            />
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
