import { configureStore } from "@reduxjs/toolkit";

import { bookmarkSlice } from "./bookmarkSlice";

const store = configureStore({
  bookmarks: bookmarkSlice,
});

export default store;
