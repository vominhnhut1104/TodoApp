import React from "react";
import { Counter } from "./components/Counter";
import { About } from "./components/About";
import { Todo } from "./components/Todo";
import { HomePage } from "./components/Home";
import { Outlet, NavLink } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="nav-menu">
        <NavLink to="/" className="mylink">
         Home
        </NavLink>
        <NavLink to="/todos" className="mylink">
          Todo
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
