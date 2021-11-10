import { Component } from "react";
import { Route, Switch } from "react-router";
import Favorite from "../Favorite";
import Home from "../Home";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/favorite" component={Favorite} />
      </Switch>
    );
  }
}
export default App;
