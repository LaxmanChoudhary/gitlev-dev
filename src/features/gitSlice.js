import { createSlice } from "@reduxjs/toolkit";

export const gitSlice = createSlice({
  name: "gitdata",
  initialState: {
    isLoading: false,
    user: {},
    repos: [],
    following: [],
    starred: [],
  },
  reducers: {
    fetchUser: (state, action) => {
      state.user = action.payload;
    },
    fetchUserRepos: (state, action) => {
      state.repos = action.payload;
    },
    fetchStarred: (state, action) => {
      state.starred = action.payload
    },
    fetchFollowing: (state, action) => {
      state.following = action.payload
    },
    dataLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { fetchUser, fetchUserRepos, fetchStarred, fetchFollowing, dataLoading } = gitSlice.actions;
export default gitSlice.reducer;
