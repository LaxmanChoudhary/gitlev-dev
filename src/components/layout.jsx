import {
  AppBar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FolderRoundedIcon from "@material-ui/icons/FolderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    width: "100%",
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  img: {
    width: "100%",
    padding: theme.spacing(3),
  },
  activePath: {
    background: "#f4f4f4",
  },
}));

const Layout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const user = useSelector((state) => state.gitdata.user);

  const paths = [
    {
      name: "root",
      path: "/gitlev/",
      icon: <HomeRoundedIcon />,
    },
    {
      name: "about",
      path: "/gitlev/about",
      icon: <PersonRoundedIcon />,
    },
    {
      name: "repos",
      path: "/gitlev/repos",
      icon: <FolderRoundedIcon />,
    },
    {
      name: "starred",
      path: "/gitlev/starred",
      icon: <StarRoundedIcon />,
    },
    {
      name: "following",
      path: "/gitlev/following",
      icon: <AttachFileIcon />,
    },
  ];

  return (
    <div className={classes.nav}>
      {/* Appbar */}
      <AppBar elevation={1} position="fixed" className={classes.appbar}>
        <Toolbar>
          {location.pathname == "/gitlev/" ? null : (
            <Typography variant="h6">
              {user ? user.login : "Search user first!"}
            </Typography>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <Typography className={classes.toolbar} variant="h5" align="center">
          Gitlev
        </Typography>
        <Divider />
        <List>
          {paths.map((each) => (
            <ListItem
              className={
                location.pathname === each.path ? classes.activePath : null
              }
              button
              onClick={() => history.push(each.path)}
              key={each.name}
            >
              <ListItemIcon>{each.icon}</ListItemIcon>
              <ListItemText primary={each.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* children */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
