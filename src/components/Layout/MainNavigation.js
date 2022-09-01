import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Badge from "@mui/material/Badge";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/recipes-list">
              <Tooltip title="Recipes List" placement="top" arrow>
                <IconButton aria-label="Recipes">
                  <RestaurantIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <Tooltip title="List of Favorites" placement="top" arrow>
                <IconButton aria-label="favorites">
                  <Badge
                    badgeContent={favoritesCtx.totalFavorites}
                    color="primary"
                  >
                    <BookmarkBorderIcon fontSize="large" />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
