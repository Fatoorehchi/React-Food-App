import { createContext, useEffect, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteRecipe) => {},
  removeFavorite: (recipeId) => {},
  itemIsFavorite: (recipeId) => {},
});

const LOCAL_STORAGE_KEY = "recipe";

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  useEffect(() => {
    localStorage.setItem("recipe", JSON.stringify(userFavorites));
  }, [userFavorites]);

  const addFavoriteHandler = (favoriteRecipe) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteRecipe);
    });
  };

  const removeFavoriteHandler = (recipeId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((recipe) => recipe.id !== recipeId);
    });
  };

  const itemIsFavoriteHandler = (recipeId) => {
    return userFavorites.some((recipe) => recipe.id === recipeId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
