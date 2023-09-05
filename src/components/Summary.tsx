import Title from "./Title";
import styles from "../css modules/Summary.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Summary = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Title
        title="Finishing up"
        subtitle="Double-check everything looks OK before confirming."
      />
      <div className="summaryOptionsContainer"></div>
      <div className={styles.buttonsContainer}>
        <Button onClick={() => navigate("/addons")}>Go Back</Button>
        <Button>Next Step</Button>
      </div>
    </div>
  );
};

export default Summary;
