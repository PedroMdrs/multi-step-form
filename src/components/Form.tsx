import Button from "./Button";
import Input from "./Input";

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--gap)",
};
const Form = () => {
  return (
    <div>
      <form style={style} action="">
        <Input label="Name" type="text" required />
        <Input label="Email Address" type="email" required />
        <Input label="Phone Number" type="number" required />
        <Button style={{ marginTop: "3rem" }}>Next Step</Button>
      </form>
    </div>
  );
};

export default Form;
