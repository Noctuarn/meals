import React, {useCallback, useEffect} from "react";
import useAppContext from "../../hooks/useAppContext";


import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

import "./Meals.scss";

const Meals = () => {
  const {
    loading,
    meals,
    favourite,
    selectMeal,
    addToFavourite,
    removeFavourite,
  } = useAppContext();

  const isMealInFavourite = useCallback((mealId) => {
    return favourite.some((meal) => meal.idMeal === mealId);
  }, [favourite]);

  return (
    <section className="meals-section">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        meals.map((meal) => {
          const { idMeal, strMeal, strMealThumb } = meal;
          const isFavourite = isMealInFavourite(idMeal);

          return (
            <article key={idMeal} className="meal">
              <div className="img-wrapper">
                <img
                  src={strMealThumb}
                  className="meal-img"
                  alt=""
                  onClick={() => selectMeal(idMeal)}
                />
              </div>
              <footer className="meal-footer">
                <h5 className="meal-title">{strMeal}</h5>
                <button
                  className="like-btn"
                  onClick={() =>
                    isFavourite ? removeFavourite(idMeal) : addToFavourite(idMeal)
                  }
                >
                  {isFavourite ? <FcLike/> : <FcLikePlaceholder/>}
                </button>
              </footer>
            </article>
          );
        })
      )}
    </section>
  );
};

export default Meals;