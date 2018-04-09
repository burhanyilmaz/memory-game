import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../scenes/GameScene/containers/Home'
import store from '../redux/configureStore';
import { Provider } from 'react-redux';

export default(
    <Provider store={store}>
    <BrowserRouter>
        <div>
            <Route path="/" component={Home} />
        </div>
    </BrowserRouter>
    </Provider>
);