import ThankYou from "./ThankYou";
import styles from "../css modules/Finish.module.css";

const Finish = () => {
  return (
    <div className="card">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.thankYou}>
            <ThankYou></ThankYou>
            <p>Thank you!</p>
          </div>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Finish;
