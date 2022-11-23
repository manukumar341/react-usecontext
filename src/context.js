import React from "react";
const CURRENCIES = {
  Euro: {
    code: "EUR",
    label: "Euro",
    conversionRate: 1 // base conversion rate
  },
  Usd: {
    code: "USD",
    label: "US Dollar",
    conversionRate: 1.19
  }
};
const CurrencyContext = React.createContext(null);

// const useCurrency = () => React.useContext(CurrencyContext);
const useCurrency = () => {
  const [currency, setCurrency] = React.useContext(CurrencyContext);
  const handleCurrency = (value) => {
    setCurrency(value);
  };
  return { value: currency, onChange: handleCurrency };
};

const CurrencyProvider = ({ value, children }) => {
  const [currency, setCurrency] = React.useState(CURRENCIES.Euro);
  return (
    <CurrencyContext.Provider value={[currency, setCurrency]}>
      {children}
    </CurrencyContext.Provider>
  );
};

const withCurrency = (Component) => (props) => {
  const currency = useCurrency();
  return <Component {...props} currency={currency} />;
};

export {
  CurrencyContext,
  useCurrency,
  CurrencyProvider,
  withCurrency,
  CURRENCIES
};
