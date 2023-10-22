import userReducer from "../../src/redux/userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
