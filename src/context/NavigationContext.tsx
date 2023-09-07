import React from "react";

type tab = "Info" | "Plan" | "Summary" | "Addons";
interface Iaddons {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}
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
  plan: plan;
  setPlan: React.Dispatch<React.SetStateAction<plan>>;
  addons: Iaddons;
  setAddons: React.Dispatch<React.SetStateAction<Iaddons>>;
  period: periodType;
  setPeriod: React.Dispatch<React.SetStateAction<periodType>>;
  price: planPrices;
  addonPrice: addonPrices;
}
interface planPrices {
  Arcade: number;
  Advanced: number;
  Pro: number;
}
interface addonPrices {
  onlineService: "+$1/mo";
  largerStorage: "+$2/mo";
  customizableProfile: "+$2/mo";
}
type plan = "Arcade" | "Advanced" | "Pro";
export type periodType = "Monthly" | "Yearly";

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
  plan: "Arcade",
  setPlan: () => {},
  addons: {
    customizableProfile: false,
    onlineService: false,
    largerStorage: false,
  },
  setAddons: () => {},
  period: "Monthly",
  setPeriod: () => {},
  price: {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
  },
  addonPrice: {
    onlineService: "+$1/mo",
    largerStorage: "+$2/mo",
    customizableProfile: "+$2/mo",
  },
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
  const [plan, setPlan] = React.useState<plan>("Arcade");
  const [period, setPeriod] = React.useState<periodType>("Monthly");
  const [addons, setAddons] = React.useState<Iaddons>({
    customizableProfile: false,
    onlineService: false,
    largerStorage: false,
  });
  const [price, setPrice] = React.useState<planPrices>({
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
  });
  const [addonPrice, setAddonPrice] = React.useState<addonPrices>({
    onlineService: "+$1/mo",
    largerStorage: "+$2/mo",
    customizableProfile: "+$2/mo",
  });
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
        plan,
        setPlan,
        addons,
        setAddons,
        period,
        setPeriod,
        price,
        addonPrice,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
