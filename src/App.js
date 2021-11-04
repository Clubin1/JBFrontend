import React, { Component } from "react";
import {Route, Switch } from "react-router-dom";

import HomePage from "./Components/Home/HomePage";
import Navbar from "./Components/UI/Navbar";
import Footer from "./Components/UI/Footer";
import NotFound from "./Components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="*" exact component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
