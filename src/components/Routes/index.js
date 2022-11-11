import { Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Recipes from "../../pages/Recipes";
import Contact from "../../pages/Contact";
import Services from "../../pages/Services";
import Organizations from "../../pages/Organizations";
import Offerings from "../../pages/Offerings";
import Photography from "../../pages/Photography";
import Blogs from "../../pages/Blogs";
import FAQ from "../../pages/FAQ";
import Nutrition from "../../pages/Nutrition"
import Breakfast from "../../pages/Breakfast"
import MainCourse from "../../pages/MainCourse"
import AppetizersSnacks from "../../pages/AppetizersSnacks";
import SmoothiesDrinks from "../../pages/Smoothies&Drinks";
import MoveYourBody from "../../pages/MoveYourBody";


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
      <Route path="/organizations" component={Organizations} />
      <Route path="/offerings" component={Offerings} />
      <Route path="/photography" component={Photography} />
      <Route path="/routes" component={Routes} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/faq" component={FAQ} />
      <Route path="/nutrition" component={Nutrition} />
      <Route path="/breakfast" component={Breakfast} />
      <Route path="/main-course" component={MainCourse} />
      <Route path="/appetizers-snacks" component={AppetizersSnacks} />
      <Route path="/smoothies-drinks" component={SmoothiesDrinks} />
      <Route path="/move-your-body" component={MoveYourBody} />
    </Switch>
  );
}







