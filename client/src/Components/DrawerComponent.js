import React, { useState } from "react";
import IconButton from"@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(()=>({
  link:{
      textDecoration:"none",
      color: "blue",
      fontSize: "20px",
  },
  icon:{
      color: "white"
  }
}));

function DrawerComponent({setOpenDrawer, openDrawer}) {
  
  return (
    <>
     <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
      <Drawer>
        <List>
         <ListItem>
            <ListItemText onClick={() => setOpenDrawer(false)}>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText onClick={() => setOpenDrawer(false)}>
              <Link to="/create-restaurant">Create Restaurant</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText onClick={() => setOpenDrawer(false)}>
              <Link to="/myfavorites">My Favorites</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      </>
  );
}
export default DrawerComponent;
