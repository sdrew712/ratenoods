import React from "react";
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import ReviewsPage from "./ReviewsPage/ReviewsPage";
import UpgradesPage from "./UpgradesPage/UpgradesPage";
import ContactPage from "./ContactPage/ContactPage";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <TopBar />
      
      <Switch>
        <Route path="/reviews" component={ReviewsPage} />
        <Route path="/upgrades" component={UpgradesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/" component={HomePage} />
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>

      <Footer />   
    </BrowserRouter> 
  );
}