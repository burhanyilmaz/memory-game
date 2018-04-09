import  { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './configureReducer';

export default createStore(
    reducers,
    undefined,
    compose(
        applyMiddleware(thunk),
    )
);