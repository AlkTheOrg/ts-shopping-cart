import React, { FC, useState, useEffect } from "react";
import "./App.css";
import ItemList from "./compomonents/ItemList";
import data, { ItemData } from "./data";
import Cart from "./compomonents/Cart";
import SearchBar from "./compomonents/SearchBar";

const App: FC = (): JSX.Element => {
  const [items, setItems] = useState<ItemData[]>([]);
  const [cart, setCart] = useState<ItemData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm === "") setItems(data);
    else {
      const filteredItems: ItemData[] = data.filter((item: ItemData) => {
        return item.title.toLowerCase().match(searchTerm.toLowerCase());
      });
      setItems(filteredItems);
    }
  }, [searchTerm]);

  useEffect(() => {
    // setItems(data);
    setItems(data.slice(0, 6));
    setCart([data[0]]);
  }, []);

  return (
    <div className="App">
      <div className="hero">
        <SearchBar setSearchTerm={setSearchTerm} />
        <ItemList />
      </div>
      <Cart />
    </div>
  );
};

export default App;
