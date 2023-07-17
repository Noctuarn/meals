import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const ALL_MEALS_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const RANDOM_MEAL_URL = "https://www.themealdb.com/api/json/v1/1/random.php";


const getFromLocalStorage = () => {
  const favourites = localStorage.getItem("favourites");
  return favourites ? JSON.parse(favourites) : [];
};

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchMeal, setSearchMeal] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favourite, setFavourite] = useState(getFromLocalStorage());

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
  };

  const selectMeal = (mealId, favouriteMeal = false) => { 
    let meal;
    if(favouriteMeal) {
      meal = favourite.find((meal) => meal.idMeal === mealId);
    } else {
      meal = meals.find((meal) => meal.idMeal === mealId);
    }

    setSelectedMeal(meal);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const addToFavourite = (mealId) => {
    let meal;
    meal = meals.find((meal) => meal.idMeal === mealId);

    const favouriteMeals = [...favourite, meal];
    setFavourite(favouriteMeals);
    localStorage.setItem("favourites", JSON.stringify(favouriteMeals));
  };
  
  const removeFavourite = (mealId) => {
    const updateMeals = favourite.filter(meal => meal.idMeal !== mealId);
    setFavourite(updateMeals);
    localStorage.setItem("favourites", JSON.stringify(updateMeals));
  }

  useEffect(() => {
    getMeals(`${ALL_MEALS_URL}${searchMeal}`);
  }, [searchMeal]);

  return (
    <AppContext.Provider
      value={{
        loading,
        meals,
        setSearchMeal,
        getRandomMeals,
        modal,
        selectMeal,
        selectedMeal,
        closeModal,
        favourite,
        addToFavourite,
        removeFavourite
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
