import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './app.css';
import 'bulma/css/bulma.min.css'
import store  from './store';

import Weather from './components/weather/Weather';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className={'app'}>
            <Route exact path={'/'} component={Weather} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  };
};

export default App;
