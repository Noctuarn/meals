import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const ALL_MEALS_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const RANDOM_MEAL_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchMeal, setSearchMeal] = useState('');

  const getMeals = async (url) => {
    try {
      setLoading(true);

      const responce = await fetch(url);
      const data = await responce.json();

      if (data.meals) {
        setMeals(data.meals);
      }
    } catch (err) {
      console.error("Error:" + err);
    }
    setLoading(false);
  };

  const getRandomMeals = () => {
    getMeals(RANDOM_MEAL_URL);
  }

  useEffect(() => {
    getMeals(`${ALL_MEALS_URL}${searchMeal}`);
  }, [searchMeal]);

  return (
    <AppContext.Provider value={{ loading, meals, setSearchMeal, getRandomMeals }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
