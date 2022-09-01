import React from "react";
import classes from "./RecipeList.module.css"
import RecipeItem from "./RecipeItem";

const RecipeList = (props) => {
  return (
    <ul className={classes.ul}>
      {props.recipes.map((recipe) => {
        return (
          <RecipeItem
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            diets={recipe.diets}
            instructions={recipe.instructions}
          />
        );
      })}
    </ul>
  );
};

export default RecipeList;
