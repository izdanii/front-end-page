import { DefaultIcon } from '@chakra-ui/react';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

function saveToLocalStorage(state) {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
}

function loadFromLocalStorage() { 
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
}

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;
const presistedState = loadFromLocalStorage()

const store = createStore(
    rootReducer,
    presistedState,
    composeEnhancers(applyMiddleware(thunk))
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;