import React from "react";

const style: React.CSSProperties = {
  color: "var(--color-1)",
  fontFamily: "var(--family-bold)",
};
const Title = ({ text }: { text: string }) => {
  return <h1 style={style}>{text}</h1>;
};

export default Title;
