import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const ALL_MEALS_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
const RANDOM_MEAL_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMeals = async (url) => {
    try {
      setLoading(true);

      const responce = await fetch(url);
      const data = await responce.json();
      setMeals(data.meals);
    } catch (err) {
      console.error("Error:" + err);
    }
    setLoading(false)
  };

  useEffect(() => {
    getMeals(ALL_MEALS_URL);
  }, []);

  return <AppContext.Provider value={{loading, meals}}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
