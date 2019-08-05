import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Weather from './components/weather/Weather';

import './app.css';
import 'bulma/css/bulma.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Weather />
      </Provider>
    );
  }
}

export default App;
