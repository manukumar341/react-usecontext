import { useCurrency, CURRENCIES } from "./context";

export const CurrencyButtons = () => {
  const { onChange } = useCurrency();
  return Object.values(CURRENCIES).map((item) => (
    <CurrencyButton key={item.label} onClick={() => onChange(item)}>
      {item.label}
    </CurrencyButton>
  ));
};

const CurrencyButton = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};
