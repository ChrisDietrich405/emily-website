import { Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Recipes from "../../pages/Recipes";
import Contact from "../../pages/Contact";
import Services from "../../pages/Services";
import Blogs from "../../pages/Blogs";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
      <Route path="/blogs" component={Blogs} />
    </Switch>
  );
}
