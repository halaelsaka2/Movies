import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Favorite from "../Favorite";
import Home from "../Home";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    );
  }
}
export default App;
