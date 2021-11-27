import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from "./routes"

import "./App.scss"

const App = ({store}) => (
    <Provider store={store}>
        <Router>
            <Routes>
                {routes}
            </Routes>
        </Router>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
