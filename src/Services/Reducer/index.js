import { combineReducers } from "redux";
import Productreducer from "../Reducer/Productreducer"
import Authductreducer from "../Reducer/AuthReducer/Authreducer"


const mainreducer = combineReducers({
    Productreducer,
    Authductreducer
});

export default mainreducer