import { createStore } from "redux";
import rootReducer from "./reducers/mainReducer";

const loadFromLocalStorage = () => {
  try {
    const serializedData = localStorage.getItem("inventoryData");
    if (!serializedData) {
      return undefined;
    }

    return JSON.parse(serializedData);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const configureStore = () =>
  createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configureStore;
