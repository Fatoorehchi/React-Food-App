import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import classes from "./RecipeList.module.css";
import CustomButton from "../ui/CustomButton";
import IconButton from "@mui/material/IconButton";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import FavoritesContext from "../../store/favorites-context";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const styles = {
  cardContainer: {
    marginBottom: "2rem",
    paddingBottom: "1rem",
  },
  cardActionsDiv: {
    justifyContent: "space-around",
  },
  modaleBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    padding: ".8rem",
  },
};

const RecipeItem = (props) => {
  const [open, setOpen] = useState(false);
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        diets: props.diets,
        instructions: props.instructions,
      });
    }
  };

  const openModalHandler = () => {
    setOpen(true);
  };

  const closeModalHandler = () => {
    setOpen(false);
  };

  return (
    <Card
      sx={{ maxWidth: 345, margin: "auto" }}
      key={props.id}
      style={styles.cardContainer}
    >
      <CardHeader title={props.title} />
      <CardActions></CardActions>
      <CardMedia component="img" image={props.image} alt={props.title} />

      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
          boxShadow: "none",
        }}
        component="ul"
      >
        {props.diets.map((diet) => (
          <ListItem key={diet} direction="row" spacing={1}>
            <Chip label={diet} />
          </ListItem>
        ))}
      </Paper>

      <CardActions style={styles.cardActionsDiv}>
        <CustomButton onClick={openModalHandler}>
          Cooking instructions
        </CustomButton>
        <Tooltip
          title={itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          placement="top"
          arrow
        >
          <IconButton
            aria-label="add to favorites"
            onClick={toggleFavoriteStatusHandler}
          >
            {itemIsFavorite ? (
              <BookmarkIcon fontSize="large" />
            ) : (
              <BookmarkBorderIcon fontSize="large" />
            )}
          </IconButton>
        </Tooltip>
      </CardActions>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box style={styles.modaleBox}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {props.title}
            </Typography>
            <p
              className={classes.summary}
              dangerouslySetInnerHTML={{
                __html: props.instructions,
              }}
            ></p>
          </Box>
        </Fade>
      </Modal>
    </Card>
  );
};

export default RecipeItem;
