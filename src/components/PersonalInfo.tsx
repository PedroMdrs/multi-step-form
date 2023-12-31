import Form from "../components/Form.tsx";
import Title from "./Title.tsx";
import Button from "./Button.tsx";
import { useNavigate } from "react-router-dom";
import { useNavigationProvider } from "../context/NavigationContext.tsx";

const PersonalInfo = () => {
  const { name, setName, email, setEmail, phone, setPhone, error, setError } =
    useNavigationProvider();

  const navigate = useNavigate();
  function nextPage() {
    if (name !== "" && email !== "" && phone !== "") {
      navigate("/plan");
    } else {
      setError(true);
    }
  }
  return (
    <>
      <div className="card">
        <div className="container">
          <Title
            title="Personal Info"
            subtitle="Please provide your name, email address, and phone number."
          />
          <Form
            error={error}
            email={email}
            setEmail={setEmail}
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
          />
        </div>
        <div className="buttonsContainer">
          <div></div>
          <Button onClick={nextPage}>Next Step</Button>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
