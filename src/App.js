import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

import { Route, Switch } from "react-router-dom";

function HatsPage() {
  return (
    <div>
      <p>hatpage</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
