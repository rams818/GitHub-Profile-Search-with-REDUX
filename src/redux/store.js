import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root.reducer";
import { composeWithDevTools } from "@redux-devtools/extension"
import { thunk } from 'redux-thunk';


let middleWare = [thunk];
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)));

export { store };