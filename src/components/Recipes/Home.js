import React from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import HomeSushis from "../../assets/HomeSushis.jpg";
import classes from "./Home.module.css";
import CustomButton from "../ui/CustomButton";

const styles = {
  paperContainer: {
    backgroundImage: `url(${HomeSushis})`,
    backgroundPosition: "center",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 2,
    position: "relative"
  },
};

const Home = () => {
  return (
    <>
      <Paper style={styles.paperContainer}>
        <div className={classes.divContainer}>
          <h2 className={classes.titleText}>Cooking Like a Chef</h2>
          <p className={classes.paragraphText}>
            Let's make a delicious dish with the best recipe for the family
          </p>
          <Link to="/recipes-list">
            <CustomButton>Get Started</CustomButton>
          </Link>
        </div>
        <div className={classes.divOpacity}></div>
      </Paper>
    </>
  );
};

export default Home;
