import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: theme.spacing(2),
  },
  cover: {
    width: 100,
    height: 100,
    overflow: "hidden",
    borderRadius: "50%",
  },
  image: {
    width: "100%",
  },
  content: {
    alignSelf: "center",
    margin: theme.spacing(2)
  },
  github: {
  },
}));

const User = ({ user }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <div className={classes.root}>
        <div className={classes.cover}>
          <img
            className={classes.image}
            src={user.avatar_url}
            alt={user.login}
          />
        </div>
        <div className={classes.content}>
          <Typography>{user.login}</Typography>
        </div>
      </div>
    </Grid>
  );
};

export default User;
