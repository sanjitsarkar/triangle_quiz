import React, { useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Area } from "./pages/Area";
import Hypotenous from "./pages/Hypotenous";
import { IsTriangle } from "./pages/IsTriangle";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Body} exact />
        <Route path="/area" component={Area} exact />
        <Route path="/istriangle" component={IsTriangle} exact />
        <Route path="/hypo" component={Hypotenous} exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
