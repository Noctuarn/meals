import React from "react";
import useAppContext from "../../hooks/useAppContext";

function Meals() {
  const context = useAppContext();

  return <div>
    <h1>This is meals components</h1>
  </div>;
}

export default Meals;
