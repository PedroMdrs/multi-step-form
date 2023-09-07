import Title from "./Title";
import styles from "../css modules/Summary.module.css";
import Button from "./Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useNavigationProvider } from "../context/NavigationContext";

const Summary = () => {
  const { addons, plan, period, price, addonPrice } = useNavigationProvider();

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
          {period === "Monthly" ? (
            <span>{`+$${price[plan].monthly}/mo`}</span>
          ) : (
            <span>{`+$${price[plan].yearly}/yr`}</span>
          )}
        </div>
        <hr />

        <div className={styles.addonContainer}>
          {addons.onlineService ? (
            <div>
              <p>Online Service</p>{" "}
              {period === "Monthly" ? (
                <span>{`+${addonPrice.onlineService.monthly}$/mo`}</span>
              ) : (
                <span>{`+${addonPrice.onlineService.yearly}$/yr`}</span>
              )}
            </div>
          ) : (
            ""
          )}

          {addons.largerStorage ? (
            <div>
              <p>Larger Storage</p>{" "}
              {period === "Monthly" ? (
                <span>{`+${addonPrice.largerStorage.monthly}$/mo`}</span>
              ) : (
                <span>{`+${addonPrice.onlineService.yearly}$/yr`}</span>
              )}
            </div>
          ) : (
            ""
          )}

          {addons.customizableProfile ? (
            <div>
              <p>Customizable Profile</p>{" "}
              {period === "Monthly" ? (
                <span>{`+${addonPrice.customizableProfile.monthly}$/mo`}</span>
              ) : (
                <span>{`+${addonPrice.customizableProfile.yearly}$/yr`}</span>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.totalContainer}>
        <p>Total (per month)</p>
        {period === "Monthly" ? (
          <span>{`+$${
            addonPrice.onlineService.monthly +
            addonPrice.largerStorage.monthly +
            addonPrice.customizableProfile.monthly +
            price[plan].monthly
          }/mo`}</span>
        ) : (
          <span>{`+$${
            addonPrice.onlineService.yearly +
            addonPrice.largerStorage.yearly +
            addonPrice.customizableProfile.yearly +
            price[plan].yearly
          }/mo`}</span>
        )}
      </div>
      <div className={styles.buttonsContainer}>
        <Button onClick={() => navigate("/addons")}>Go Back</Button>
        <Button
          onClick={() => navigate("/thanks")}
          style={{ backgroundColor: "var(--color-2)" }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default Summary;
