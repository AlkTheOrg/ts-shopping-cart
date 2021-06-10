import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./compomonents/Navbar";
import App from "./App";
import About from "./pages/About";
import Error from "./pages/Error";
import ItemShow from "./pages/ItemShow";

const Router: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/item/id" component={ItemShow} />
          <Route path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
