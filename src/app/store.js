import { configureStore } from "@reduxjs/toolkit";
import gitReducer from "../features/gitSlice"

export default configureStore({
  reducer: {
    gitdata: gitReducer
  }
})