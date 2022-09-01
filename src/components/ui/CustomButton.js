import { Button } from '@mui/material'
import React from 'react'

const styles = {
    root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        fontWeight: "bold",
      }
}

const CustomButton = (props) => {
  return (
    <Button style={styles.root} href="#" variant="contained" onClick={props.onClick} >
        {props.children}
    </Button>
  )
}

export default CustomButton