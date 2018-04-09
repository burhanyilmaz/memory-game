import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import Routes from '../src/config/route/routeConfig';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../src/config/route/routeConfig';

const app = document.getElementById('app');
if (app === null) {
    throw new Error("no app element");
}
render(
    routes,
    app
);