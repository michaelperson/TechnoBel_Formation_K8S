import {combineReducers} from 'redux' // Combiner les differents reducers en 1!
import qApiReducer from './reducers/reducer-QApi'

//Combiner les différents reducers en 1! pour l'utiliser dans mon createStore

export default combineReducers
(
    {
        qApiReducer 
    }
);

