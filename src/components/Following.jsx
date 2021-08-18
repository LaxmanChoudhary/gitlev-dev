import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import User from "./display/UserDisplay";

const Following = () => {
  const following = useSelector((state) => state.gitdata.following);
  const isLoading = useSelector((state) => state.gitdata.isLoading);

  return (
    <Container>
      <Typography style={{margin: "20px"}} variant="h4">User follows</Typography>
      <Grid container>
        {isLoading ? (
          <p>Loading...</p>
        ) : following.length ? (
          following.map((each) => <User user={each} key={each.id} />)
        ) : (
          <Typography>No following to show yet!</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Following;
