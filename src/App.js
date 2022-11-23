import React from "react";
import { CurrencyProvider } from "./context";
import { CurrencyButtons } from "./button";
import { Books } from "./book";
const DATA = [
  {
    id: "1",
    title: "The Road to React",
    price: 19.99
  },
  {
    id: "2",
    title: "The Road to GraphQL",
    price: 29.99
  }
];

const App = () => {
  return (
    <CurrencyProvider>
      <CurrencyButtons />
      <Books list={DATA} />
    </CurrencyProvider>
  );
};

export default App;
