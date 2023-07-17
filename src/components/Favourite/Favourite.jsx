import React from "react";
import useAppContext from "../../hooks/useAppContext";

import "./Favoutite.scss";

const Favourite = () => {
  const { favourite, removeFavourite, selectMeal } = useAppContext();

  return (
    <div className="favourite">
      {favourite.map((fav) => {
        return (
          <div key={fav.idMeal} className="favourite-element">
            <div className="favourite-image-wrapper" onClick={() => selectMeal(fav.idMeal, true)}>
              <img className="favourite-image" src={fav.strMealThumb} alt="" />
            </div>
            <button className="favourite-btn" onClick={() => removeFavourite(fav.idMeal)}>x</button>
          </div>
        );
      })}
    </div>
  );
};

export default Favourite;
