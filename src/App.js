import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import PageNotFount from "./components/pageNotFound/pageNotFount";
import BagPage from "./components/bagPage/bagPage";
import ShoesPage from "./components/shoesPage/shoesPage";
import HomePage from "./components/homePage/homePage";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/bolsas" component={ BagPage } />
        <Route exact path="/sapatos" component={ ShoesPage } />
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/home" component={ HomePage } />
        <Route exact path="/*" component={ PageNotFount } />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
