import { createContext } from "react";

export const HeaderContext = createContext({
  basket: 0,
  alert: 0,
  favorite: 0,
  basketItems: []
});
