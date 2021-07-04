import { FC } from "react";
import "./App.css";
import ItemList from "./compomonents/ItemList";
import Cart from "./compomonents/Cart";
import SearchBar from "./compomonents/SearchBar";

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <div className="hero">
        <SearchBar />
        <ItemList />
      </div>
      <Cart />
    </div>
  );
};

export default App;
