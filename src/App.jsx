import { useState } from "react";
import "./App.scss";

import Meals from "./components/Meals/Meals";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="app">
      <Search/>
      <Meals />
    </div>
  );
}

export default App;
