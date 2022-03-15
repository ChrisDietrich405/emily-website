import { Switch, Route } from "react-router-dom";

import Blogs from "../../pages/Blogs";
import Home from "../../pages/Home";

// import Validate from "../../pages/Validate";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/blogs" component={Blogs} />

      {/* <Route path="validate" component={Validate} /> */}
    </Switch>
  );
}
