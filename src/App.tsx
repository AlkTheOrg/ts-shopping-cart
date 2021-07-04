import React, { FC, useState, useEffect } from "react";
import "./App.css";
import ItemList from "./compomonents/ItemList";
import data, { ItemData } from "./data";
import Cart from "./compomonents/Cart";
import SearchBar from "./compomonents/SearchBar";

const App: FC = (): JSX.Element => {
  const [items, setItems] = useState<ItemData[]>([]);
  const [cart, setCart] = useState<ItemData[]>([]);
  const [totalCost, setTotalCost] = useState(0);
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

  useEffect(() => {
    const cost: number = cart.reduce(
      (sum: number, item: ItemData) => sum + item.price * item.amount,
      0
    );
    setTotalCost(cost);
  }, [cart]);

  const subtractFromCard = (id: number): void => {
    const index: number = _getItemIndexFromCart(id);
    if (cart[index].amount === 1) {
      const newCart: ItemData[] = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    } else {
      const newCart: ItemData[] = [...cart];
      const updatedItem: ItemData = { ...newCart[index] };
      updatedItem.amount--;
      newCart[index] = updatedItem;
      setCart(newCart);
    }
  };

  const increaseInCard = (id: number): void => {
    const index = _getItemIndexFromCart(id);
    if (index !== -1) {
      const newCart: ItemData[] = [...cart];
      const newItem: ItemData = { ...cart[index] };
      newItem.amount++;
      newCart[index] = newItem;
      setCart(newCart);
    }
  };

  const _getItemIndexFromCart = (id: number): number => {
    return cart.findIndex((item: ItemData) => item.id === id);
  };

  return (
    <div className="App">
      <div className="hero">
        <SearchBar setSearchTerm={setSearchTerm} />
        <ItemList />
      </div>
      <Cart
        cart={cart}
        totalCost={totalCost}
        subtractFromCard={subtractFromCard}
        increaseInCard={increaseInCard}
      />
    </div>
  );
};

export default App;
