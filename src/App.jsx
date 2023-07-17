import { useState, useEffect } from "react";
import "./App.scss";
import useAppContext from "./hooks/useAppContext";

import Meals from "./components/Meals/Meals";
import Search from "./components/Search/Search";
import Modal from "./components/Modal/Modal";
import Favourite from "./components/Favourite/Favourite";

function App() {

  const {modal} = useAppContext();

  useEffect(() => {
    const body = document.body;
    if (modal) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [modal]);

  return (
    <div className="app">
      <Search/>
      <Favourite/>
      <Meals />
      {modal && <Modal/>}
    </div>
  );
}

export default App;
