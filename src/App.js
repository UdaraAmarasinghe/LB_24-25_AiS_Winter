import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/index";
import LB from "./pages/lb";
import Details from "./components/2324/Details/Details";
import ContactUs from "./components/2324/ContactUs/index";
import KickStart from "./pages/kickstart";
import LB1 from "./pages/lb2425Summer";
import kickstart1 from "./pages/awrudu";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        {/*<Route path="/lb2223" component={LB} exact /> */}
        <Route path="/lb2425Winter" component={LB1} exact />
        <Route path="/lb/:id" component={Details} exact />
        <Route path="/contact-us" component={ContactUs} exact />
        <Route path="/kickstart-oc" component={KickStart} exact />
        <Route path="/awrudu-oc" component={kickstart1} exact />
      
      

      </Switch>
    </Router>
  );
}

export default App;
