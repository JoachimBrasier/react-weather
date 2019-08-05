import React, { Component } from 'react';
import store  from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './app.css';
import 'bulma/css/bulma.min.css'

import Weather from './components/weather/Weather';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className={'app'}>
            <Route exact path={'/'} component={Weather} />
          </div>
        </Router>
      </Provider>
    );
  };
};

export default App;
