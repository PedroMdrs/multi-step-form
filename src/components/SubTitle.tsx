const style: React.CSSProperties = {
  color: "var(--color-6)",
  fontFamily: "var(--family-medium)",
  fontSize: "0.975rem",
  fontWeight: "500",
};

const SubTitle = ({ text }: { text: string }) => {
  return <h2 style={style}>{text}</h2>;
};

export default SubTitle;
