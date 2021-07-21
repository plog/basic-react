import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import {useTheme} from "@material-ui/core/styles";
// import { useHistory } from "react-router-dom";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import CssBaseline from "@material-ui/core/CssBaseline";

export default function Layout(props) {
  const theme = useTheme()
//   const menuItems = [
//     { text: "Home", path: "/" },
//     { text: "Services", path: "/services" },
//     { text: "Contact", path: "/contact" },
//   ];
  const style = props.style;
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };
  return (
    <div className={style.root}>
      <AppBar position="fixed" className={style.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            className={style.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            React laboratory
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={style.drawer}
        variant={isMdUp ? "permanent" : "temporary"}
        classes={{paper: style.drawerPaper}}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        {/* <div className={style.toolbar} /> */}
        <div align="center">
        <img src="logo.png" alt="logo" className={style.drawerImage}/>
        </div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <main className={style.content}>
        <Toolbar />
        {props.children}
      </main>
    </div>
  );
}
