import Title from "./Title";
import styles from "../css modules/Summary.module.css";
import Button from "./Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useNavigationProvider } from "../context/NavigationContext";
import React from "react";

const Summary = () => {
  const { addons, plan, period, price } = useNavigationProvider();
  const [onlineServicePrice, setOnlineServicePrice] = React.useState(1);
  const [storagePrice, setStoragePrice] = React.useState(2);
  const [profilePrice, setProfilePrice] = React.useState(2);

  React.useEffect(() => {
    !addons.onlineService ? setOnlineServicePrice(0) : "";
    !addons.largerStorage ? setStoragePrice(0) : "";
    !addons.customizableProfile ? setProfilePrice(0) : "";
  }, [addons.onlineService, addons.largerStorage, addons.customizableProfile]);
  const navigate = useNavigate();
  return (
    <div className="container">
      <Title
        title="Finishing up"
        subtitle="Double-check everything looks OK before confirming."
      />
      <div className={styles.summaryOptionsContainer}>
        <div className={styles.planContainer}>
          <div className={styles.planDesc}>
            <p>
              {plan} ({period})
            </p>
            <NavLink to={"/plan"}>Change</NavLink>
          </div>
          <span>{`$${price[plan]}/mo`}</span>
        </div>
        <hr />

        <div className={styles.addonContainer}>
          {addons.onlineService ? (
            <div>
              <p>Online Service</p> <span>{`+${onlineServicePrice}$/mo`}</span>
            </div>
          ) : (
            ""
          )}

          {addons.largerStorage ? (
            <div>
              <p>Larger Storage</p> <span>{`+${storagePrice}$/mo`}</span>
            </div>
          ) : (
            ""
          )}

          {addons.customizableProfile ? (
            <div>
              <p>Customizable Profile</p> <span>{`+${profilePrice}$/mo`}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.totalContainer}>
        <p>Total (per month)</p>
        <span>{`+$${
          profilePrice + storagePrice + onlineServicePrice + price[plan]
        }/mo`}</span>
      </div>
      <div className={styles.buttonsContainer}>
        <Button onClick={() => navigate("/addons")}>Go Back</Button>
        <Button>Next Step</Button>
      </div>
    </div>
  );
};

export default Summary;
