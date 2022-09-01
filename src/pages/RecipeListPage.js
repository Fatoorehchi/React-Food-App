import React, { useEffect, useState } from "react";
import RecipeList from "../components/Recipes/RecipeList";
import classes from "./RecipeListPage.module.css";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import FilterRecipes from "../components/Recipes/FilterRecipes";
import CustomButton from "../components/ui/CustomButton";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const styles = {
  alertMessage: {
    margin: "1rem",
    width: "fit-content",
  },
};

const RecipeListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRecipes, setLoadedRecipes] = useState([]);
  const [error, setError] = useState(false);
  let [tagUrl, setTagUrl] = useState("");

  const numberRecipesHandler = () => {
    setTagUrl((prevNumberRecipes) => {
      return (tagUrl = prevNumberRecipes + " ");
    });
  };

  const RecipeUrl = `https://api.spoonacular.com/recipes/random?apiKey=${
    process.env.REACT_APP_API_KEY
  }&number=9${tagUrl.length > 0 ? `&tags=${tagUrl}` : ""}`;

  useEffect(() => {
    fetch(RecipeUrl)
      .then((response) => {
        if (!response.ok) {
          throw Error("Daily request limitation achieved. Come back tomorrow");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setError(false);
        setLoadedRecipes(data.recipes);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [tagUrl, RecipeUrl]);

  if (isLoading) {
    return (
      <Stack
        sx={{ color: "grey.500", justifyContent: "center", marginTop: "8rem" }}
        spacing={2}
        direction="row"
      >
        <CircularProgress color="inherit" />
      </Stack>
    );
  }

  return (
    <section>
      <h3 className={classes.h3}>Find Best Recipe For Cooking</h3>
      <FilterRecipes tag={setTagUrl} />

      <div className={classes.centerButton}>
        <CustomButton onClick={numberRecipesHandler}>
          New set of {tagUrl} Recipes
        </CustomButton>
      </div>
      {error ? (
        <Alert style={styles.alertMessage} severity="warning">
          {error}
        </Alert>
      ) : (
        <RecipeList recipes={loadedRecipes} />
      )}
    </section>
  );
};

export default RecipeListPage;
