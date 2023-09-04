import Form from "../components/Form.tsx";
import Title from "./Title.tsx";
import SubTitle from "./SubTitle.tsx";
import React from "react";

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--gap-s)",
  marginBottom: "3rem",
};

const PersonalInfo = () => {
  return (
    <div style={{ marginTop: "3rem" }}>
      <div style={style}>
        <Title text="Personal Info" />
        <SubTitle text="Please provide your name, email address, and phone number." />
      </div>
      <Form />
    </div>
  );
};

export default PersonalInfo;
