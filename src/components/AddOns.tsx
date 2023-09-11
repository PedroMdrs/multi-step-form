import { useNavigate } from "react-router-dom";
import styles from "../css modules/AddOns.module.css";
import Button from "./Button";
import Title from "./Title";
import { useNavigationProvider } from "../context/NavigationContext";

const AddOns = () => {
  const { addons, setAddons, addonPrice, period } = useNavigationProvider();

  function addOrRemoveAddon(
    value: "onlineService" | "largerStorage" | "customizableProfile"
  ) {
    if (value === "onlineService") {
      setAddons({
        onlineService: !addons.onlineService,
        largerStorage: addons.largerStorage,
        customizableProfile: addons.customizableProfile,
      });
    } else if (value === "largerStorage") {
      setAddons({
        onlineService: addons.onlineService,
        largerStorage: !addons.largerStorage,
        customizableProfile: addons.customizableProfile,
      });
    } else {
      setAddons({
        onlineService: addons.onlineService,
        largerStorage: addons.largerStorage,
        customizableProfile: !addons.customizableProfile,
      });
    }
  }

  const navigate = useNavigate();

  return (
    <>
      <div className="card">
        <div className="container">
          <Title
            title="Pick add-ons"
            subtitle="Add-ons help enhance your gaming experience."
          ></Title>
          <div className={styles.addonsOptions}>
            <div
              onClick={() => addOrRemoveAddon("onlineService")}
              className={
                addons.onlineService
                  ? `${styles.addon} activePlan`
                  : styles.addon
              }
            >
              <div>
                <input
                  className={addons.onlineService ? styles.addonActive : ""}
                  checked={addons.onlineService}
                  onChange={() => addOrRemoveAddon("onlineService")}
                  type="checkbox"
                ></input>
                <div className={styles.addonDesc}>
                  <p>Online Service</p>
                  <span>Access to multiplayer games</span>
                </div>
              </div>
              {period === "Monthly" ? (
                <p>+${addonPrice["onlineService"].monthly}/mo</p>
              ) : (
                <p>+${addonPrice["onlineService"].yearly}/yr</p>
              )}
            </div>
            <div
              onClick={() => addOrRemoveAddon("largerStorage")}
              className={
                addons.largerStorage
                  ? `${styles.addon} activePlan`
                  : styles.addon
              }
            >
              <div>
                <input
                  checked={addons.largerStorage}
                  onChange={() => addOrRemoveAddon("largerStorage")}
                  type="checkbox"
                  className={addons.largerStorage ? styles.addonActive : ""}
                ></input>
                <div className={styles.addonDesc}>
                  <p>Larger storage</p>
                  <span>Extra 1TB of cloud save</span>
                </div>
              </div>
              {period === "Monthly" ? (
                <p>+${addonPrice["largerStorage"].monthly}/mo</p>
              ) : (
                <p>+${addonPrice["largerStorage"].yearly}/yr</p>
              )}
            </div>
            <div
              onClick={() => addOrRemoveAddon("customizableProfile")}
              className={
                addons.customizableProfile
                  ? `${styles.addon} activePlan`
                  : styles.addon
              }
            >
              <div>
                <input
                  className={
                    addons.customizableProfile ? styles.addonActive : ""
                  }
                  checked={addons.customizableProfile}
                  onChange={() => addOrRemoveAddon("customizableProfile")}
                  type="checkbox"
                ></input>
                <div className={styles.addonDesc}>
                  <p>Cusomizable Profile</p>
                  <span>Custom theme on your profile</span>
                </div>
              </div>
              {period === "Monthly" ? (
                <p>+${addonPrice["customizableProfile"].monthly}/mo</p>
              ) : (
                <p>+${addonPrice["customizableProfile"].yearly}/yr</p>
              )}
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="buttonsContainer">
        <Button onClick={() => navigate("/plan")}>Go Back</Button>
        <Button onClick={() => navigate("/summary")}>Next Step</Button>
      </div>
    </>
  );
};

export default AddOns;
