import { createStore } from "redux";

import reducers from "./reducer";

//create store
let store = createStore(
  reducers,
  {},
  process.env.NODE_ENV === "development" && window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
);

export default store;
