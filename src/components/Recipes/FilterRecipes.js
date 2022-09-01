import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const styles = {
  centerFilter: {
    justifyContent: "center",
    flexWrap: "wrap",
  },
  filterBox: {
    margin: ".2rem",
  },
};

const FilterRecipes = (props) => {
  const filterTagHandler = (e) => {
    props.tag(e.target.innerText.toLowerCase());
  };

  return (
    <div>
      <Stack style={styles.centerFilter} direction="row" spacing={1}>
        <Chip
          label="Vegetarian"
          variant="outlined"
          onClick={filterTagHandler}
          style={styles.filterBox}
        />
        <Chip
          label="Gluten Free"
          variant="outlined"
          onClick={filterTagHandler}  style={styles.filterBox}
        />
        <Chip label="Ketogenic" variant="outlined" onClick={filterTagHandler}  style={styles.filterBox}/>
        <Chip
          label="Pescetarian"
          variant="outlined"
          onClick={filterTagHandler} style={styles.filterBox}
        />
        <Chip label="Paleo" variant="outlined" onClick={filterTagHandler} style={styles.filterBox} />
      </Stack>
    </div>
  );
};

export default FilterRecipes;
