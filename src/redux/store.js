import { legacy_createStore as createStore,compose, applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistCombineReducers ,persistReducer} from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootreducers from "./reducers/rootReducers";

const config = {
    key: "root",
    storage: AsyncStorage,
  };



  const persistedReducer = persistReducer(config, rootreducers)
let middlewares = [thunk];
const store = createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(...middlewares))
  );
  
  export const persistor = persistStore(store);    // making a store that persist the data into redux. 
  export default store;