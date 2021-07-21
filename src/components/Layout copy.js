import React from "react";
import { useHistory } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
    Divider,
  Typography,
  Drawer,
  Container,
  AppBar,
  Toolbar,
} from "@material-ui/core";

export default function Layout(props) {
  const history = useHistory();
  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Services", path: "/services" },
    { text: "Contact", path: "/contact" },
  ];
  const style = props.style
  return (
    <div className={style.layout}>
      {/* Top App bar */}
      <AppBar className={style.appbar}>
        <Toolbar>
          <Typography>Welcomesrzerzerzerzertzetzret</Typography>
        </Toolbar>
      </AppBar>

      {/* Left Menu */}
      <Drawer
        variant="permanent"
        className={style.drawer}
        classes={{ paper: style.drawerPaper }}
      >
          {/* Left Menu Title*/}
        <div className={style.toolbar + ' ' + style.toolbar2}>Digital Century</div>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
            >
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Container className={style.page}>
        <div className={style.toolbar}></div>
        {props.children}
      </Container>
    </div>
  );
}
