import Input from "./Input";
import styles from "../css modules/Form.module.css";

interface Inputs {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
}
const Form = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  error,
}: Inputs) => {
  return (
    <div>
      <form className={styles.container} action="">
        <Input
          inputErrorClass={styles.activeError}
          error={error}
          setValue={setName}
          value={name}
          placeholder="e.g.Stephen King"
          label="Name"
          type="text"
          required
        />
        <Input
          inputErrorClass={styles.activeError}
          error={error}
          value={email}
          setValue={setEmail}
          placeholder="e.g. stephenking@lorem.com"
          label="Email Address"
          type="email"
          required
        />
        <Input
          inputErrorClass={styles.activeError}
          error={error}
          value={phone}
          setValue={setPhone}
          placeholder="e.g. +1 234 567 890"
          label="Phone Number"
          type="number"
          required
        />
      </form>
    </div>
  );
};

export default Form;
