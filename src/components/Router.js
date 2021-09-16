import React from "react";
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import ReviewsPage from "./ReviewsPage/ReviewsPage";
import UpgradesPage from "./UpgradesPage/UpgradesPage";
import AboutPage from "./AboutPage/AboutPage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <TopBar />

      <Switch>
        <Route path="/reviews" component={ReviewsPage} />
        <Route path="/upgrades" component={UpgradesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
