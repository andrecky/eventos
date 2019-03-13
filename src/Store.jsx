import { combineReducers, createStore} from "redux";
import ClientDoashboardReducer from "./Redux/ClientDoashboardReducer";

const superReducer = combineReducers({
    ClientDoashboard: ClientDoashboardReducer,

});

const store = createStore(superReducer);


export default store;