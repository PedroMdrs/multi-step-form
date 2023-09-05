import React from "react";
import styles from "../css modules/Input.module.css";
import Error from "./Error";
const Input = ({
  label,
  type,
  value,
  setValue,
  error,
  ...props
}: React.ComponentProps<"input"> & {
  label: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <label htmlFor={label} style={{ color: "var(--color-1)" }}>
          {label}
        </label>{" "}
        {error && value === "" ? (
          <Error className={styles.error}> This Field is required </Error>
        ) : (
          ""
        )}
      </div>
      <input
        type={type}
        onChange={({ target }) => setValue(target.value)}
        id={label}
        name={label}
        value={value}
        {...props}
      ></input>
    </div>
  );
};

export default Input;
