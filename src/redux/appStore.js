import userReducer from "../../src/redux/userSlice";
import moviesReducer from "../../src/redux/moviesSlice";

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;
