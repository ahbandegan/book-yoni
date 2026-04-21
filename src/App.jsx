import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { HeaderContext } from "./contexts/HeaderContext";

const App = () => {
  return (
    <HeaderContext.Provider
      value={{ basket: 0, alert: 0, favorite: 0, basketItems: [{}] }}
    >
      <>
        <Header />
        <Outlet />
      </>
    </HeaderContext.Provider>
  );
};

export default App;
