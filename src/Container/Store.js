import {combineReducers, createStore} from 'redux';
import reducers from './reducers/index';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistConfig = {
    key : 'root',
    storage
}

const  Allreducers = combineReducers({

    rootReducer :  reducers,
})



const persistedReducer = persistReducer(persistConfig,Allreducers);
const store = createStore(persistedReducer,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export  const  persistor = persistStore(store);
export default store;
