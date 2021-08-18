import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { url } from "../config";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUser,
  fetchUserRepos,
  dataLoading,
  fetchStarred,
  fetchFollowing,
} from "../features/gitSlice";

const Root = (props) => {
  const [login, setLogin] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.gitdata.isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(dataLoading());
    fetch(url + login)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(fetchUser(data));
        Promise.all([
          fetch(data.repos_url),
          fetch(url + login + "/starred"),
          fetch(url + login + "/following"),
        ])
          .then((res) => Promise.all(res.map((r) => r.json())))
          .then((data) => {
            console.log(data)
            dispatch(fetchUserRepos(data[0]));
            dispatch(fetchStarred(data[1]));
            dispatch(fetchFollowing(data[2]));
            dispatch(dataLoading());
          });
      })
      .then(() => props.history.push("/gitlev/about"));
  };
  return (
    <Container>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          fullWidth
          label="username"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="type in the user name"
        />
      </form>
    </Container>
  );
};
export default Root;
