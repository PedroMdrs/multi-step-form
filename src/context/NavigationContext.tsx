import React from "react";

type tab = "Info" | "Plan" | "Summary" | "Addons";

interface tabContext {
  tab: tab;
  setTab: React.Dispatch<React.SetStateAction<tab>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
}
export const NavigationContext = React.createContext<tabContext>({
  tab: "Info",
  setTab: () => {},
  error: false,
  setError: () => {},
  name: "",
  setName: () => {},
  email: "",
  setEmail: () => {},
  phone: "",
  setPhone: () => {},
});
export const useNavigationProvider = () => {
  const context = React.useContext(NavigationContext);
  if (!context)
    throw new Error("useNavigation precisa estar em NavigationContext");
  return context;
};
export const NavigationStorage = ({ children }: React.PropsWithChildren) => {
  const [tab, setTab] = React.useState<tab>("Info");
  const [error, setError] = React.useState(false);
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  return (
    <NavigationContext.Provider
      value={{
        tab,
        setTab,
        error,
        setError,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
