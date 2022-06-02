import Navbar from "./components/navbar";
import "./App.css";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Menu from "./components/menu";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
          <About />
          <Menu />
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
