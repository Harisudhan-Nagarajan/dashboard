import "./App.css";
import { Header } from "./Header";
import { Route, Switch, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { Dashboard } from "./dashboard";
import { Userlist } from "./userlist";
import { Productlist } from "./products";
import { Userdetials } from "./Userdetials";

export default function App() {
  const history = useHistory();
  return (
    <div id="overall-div">
      <div id="navbar">
        <div>
          <h1>GUVI</h1>
        </div>

        <Button onClick={() => history.push("/")}>Home</Button>
        <br />
        <Button onClick={() => history.push("/Users")}>Users</Button>
        <br />
        <Button onClick={() => history.push("/Products")}>Products</Button>
        <br />
      </div>
      <div id="content-page">
        <Header />
        <div id="app-main">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/Users">
              <Userlist />
            </Route>
            <Route exact path="/Products">
              <Productlist />
            </Route>
            <Route exact path="/userdetials/:id">
              <Userdetials />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
