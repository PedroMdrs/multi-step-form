import styles from "../css modules/Title.module.css";

const Title = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </div>
  );
};

export default Title;
