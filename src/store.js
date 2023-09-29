import { applyMiddleware, compose, createStore } from "redux";
import mainreducer from "./Services/Reducer";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
}

  const persistedReducer = persistReducer(persistConfig, mainreducer)

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)));
let persistor = persistStore(store)

export default store
export {persistor}