import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./components/landing/Signup/Signup.js";
import Packages from "./components/landing/Packages/Packages.js";
import Packagesstart from "./components/landing/Packagestart/Packagesstart.js";
import Navbar from "./components/landing/header/Navbar.js";
import Authuntication from "./components/landing/authuntication/Authuntication.js";
import { RecoilRoot } from "recoil";
import Paymentsuccess from "./components/landing/paymentdone/Paymentsuccess.js";

function App() {
  return (
    <>
      <RecoilRoot>
        <ToastContainer style={{ fontSize: 20 }} />
        <Router>
          {/* <Navbar/> */}
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/packages" component={Packages} />
            <Route exact path="/packagesstart" component={Packagesstart} />
            <Route exact path="/packagesstart" component={Packagesstart} />
            <Route exact path="/navbar" component={Navbar} />
            <Route path="/authuntication" component={Authuntication} />
            <Route path="/paymentsuccess" component={Paymentsuccess} />
          </Switch>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
