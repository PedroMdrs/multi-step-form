import { useNavigate } from "react-router-dom";
import styles from "../css modules/AddOns.module.css";
import Button from "./Button";
import Title from "./Title";

const AddOns = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Title
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      ></Title>
      <div className={styles.addonsOptions}>
        <div className={styles.addon}>
          <div>
            <input type="checkbox"></input>
            <div className={styles.addonDesc}>
              <p>Online Service</p>
              <span>Access to multiplayer games</span>
            </div>
          </div>
          <p>+$1/mo</p>
        </div>
        <div className={styles.addon}>
          <div>
            <input type="checkbox"></input>
            <div className={styles.addonDesc}>
              <p>Larger storage</p>
              <span>Extra 1TB of cloud save</span>
            </div>
          </div>
          <p>+2/mo</p>
        </div>
        <div className={styles.addon}>
          <div>
            <input type="checkbox"></input>
            <div className={styles.addonDesc}>
              <p>Cusomizable Profile</p>
              <span>Custom theme on your profile</span>
            </div>
          </div>
          <p>+$2/mo</p>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <Button onClick={() => navigate("/plan")}>Go Back</Button>
        <Button onClick={() => navigate("/summary")}>Next Step</Button>
      </div>
    </div>
  );
};

export default AddOns;
