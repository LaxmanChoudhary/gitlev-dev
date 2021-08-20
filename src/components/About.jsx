import { Container, Divider, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { borderRadius } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  cover: {
    width: "150px",
    borderRadius: "50%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
  },
}));

const About = () => {
  const user = useSelector((state) => state.gitdata.user);
  console.log(user);
  const isLoading = useSelector((state) => state.gitdata.isLoading);

  const classes = useStyles();

  return (
    <Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : user.login ? (
        <>
          <div className={classes.cover}>
            <img
              className={classes.image}
              src={user.avatar_url}
              alt={user.login}
            />
          </div>
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="body2">@{user.login}</Typography>
          <Typography variant="caption">{user.bio}</Typography>
        </>
      ) : (
        <p>not defined</p>
      )}
    </Container>
  );
};

export default About;
