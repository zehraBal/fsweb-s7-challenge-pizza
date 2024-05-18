import { useState } from "react";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import "./components/Layout.css";
import Home from "./components/Home";
import Header from "./components/Header";
import OrderForm from "./components/OrderForm";
import OrderSummary from "./components/OrderSummary";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/siparisFormu" component={OrderForm} />
        <Route path="/siparisOzeti" component={OrderSummary} />
        <Route path="/errorPage" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
