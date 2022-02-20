import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./Header";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/submenu1" exact component={SubMenu1} />
        <Route path="/submenu2" exact component={SubMenu2} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function NotFound() {
  return <h1>Not Found 404</h1>;
}
function SubMenu1() {
  return <h2>Sub Menu1</h2>;
}
function SubMenu2() {
  return <h2>Sub Menu2</h2>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
