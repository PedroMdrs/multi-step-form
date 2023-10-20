import React from "react";
import styles from "../css modules/Input.module.css";
import Error from "./Error";
const Input = ({
  label,
  type,
  value,
  setValue,
  error,
  inputErrorClass,
  ...props
}: React.ComponentProps<"input"> & {
  label: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
  inputErrorClass?: string;
}) => {
  React.useEffect(() => {
    const storedValue = localStorage.getItem(label);
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
  }, [label, setValue]);
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <label htmlFor={label} style={{ color: "var(--color-1)" }}>
          {label}
        </label>{" "}
        {error && value === "" ? <Error> This Field is required </Error> : ""}
      </div>
      <input
        className={error && value === "" ? inputErrorClass : ""}
        type={type}
        onChange={({ target }) => {
          setValue(target.value);
          localStorage.setItem(label, JSON.stringify(target.value));
        }}
        id={label}
        name={label}
        value={value}
        {...props}
      ></input>
    </div>
  );
};

export default Input;
