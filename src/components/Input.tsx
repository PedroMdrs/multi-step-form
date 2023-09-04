import React from "react";
import styles from "../css modules/Input.module.css";
const Input = ({
  label,
  type,
  ...props
}: React.ComponentProps<"input"> & { label: string }) => {
  const [value, setValue] = React.useState("");
  return (
    <div className={styles.container}>
      <label htmlFor={label} style={{ color: "var(--color-1)" }}>
        {label}
      </label>
      <input
        type={type}
        onChange={({ target }) => setValue(target.value)}
        id={label}
        name={label}
        value={value}
        {...props}
      ></input>{" "}
    </div>
  );
};

export default Input;
