import { configureStore } from "@reduxjs/toolkit";

import bookmarkReducer from "./bookmarkSlice";

export default configureStore({
  reducer: {
    bookmarks: bookmarkReducer,
  },
});
