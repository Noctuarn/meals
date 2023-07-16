import React, { useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const ALL_MEALS_URL =
    "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
  const RANDOM_MEAL_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

  const getMeals = async (url) => {
    try {
      const responce = await fetch(url);
      const data = await responce.json();
    } catch (err) {
      console.error("Error:" + err);
    }
  };

  useEffect(() => {
    getMeals(ALL_MEALS_URL);
  }, []);

  return <AppContext.Provider value={""}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
