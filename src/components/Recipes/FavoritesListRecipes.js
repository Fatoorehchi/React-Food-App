import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import RecipeItem from "./RecipeItem";
import CustomButton from "../ui/CustomButton";
import classes from "../../pages/RecipeListPage.module.css";

const FavoritesListRecipes = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let favoritesRecipe = favoritesCtx.favorites;
  let totalFavorites = favoritesCtx.totalFavorites;

  if (totalFavorites === 0) {
    return (
      <>
        <h3 className={classes.h3}>Your list of recipes is empty...</h3>
        <Link to="/recipes-list">
          <div className={classes.centerButton}>
            <CustomButton>Go Back to the List of Recipe</CustomButton>
          </div>
        </Link>
      </>
    );
  }

  return (
    <ul className={classes.ul}>
      {favoritesRecipe.map((recipe) => {
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

export default FavoritesListRecipes;
