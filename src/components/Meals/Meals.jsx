import React from "react";
import useAppContext from "../../hooks/useAppContext";

import { FcLike } from "react-icons/fc";

import "./Meals.scss";

const Meals = () => {
  const { loading, meals } = useAppContext();

  return (
    <section className="meals-section">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        meals.map((meal) => {
          const { idMeal, strMeal, strMealThumb } = meal;

          return (
            <article key={idMeal} className="meal">
              <div className="img-wrapper">
                <img src={strMealThumb} className="meal-img" alt="" />
              </div>
              <footer className="meal-footer">
                <h5 className="meal-title">{strMeal}</h5>
                <button className="like-btn">
                  <FcLike />
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
