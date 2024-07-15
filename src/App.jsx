import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import "./components/NewLayout.css";
import Home from "./components/Home";
import Header from "./components/Header";
import OrderSummary from "./components/OrderSummary";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import FormPage from "./components/FormPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/siparisFormu" component={FormPage} />
        <Route path="/siparisOzeti" component={OrderSummary} />
        <Route path="/errorPage" component={ErrorPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
