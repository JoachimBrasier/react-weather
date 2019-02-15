import React, { Component } from 'react';
import store  from './store';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './app.css';
import 'bulma/css/bulma.min.css'

import Weather from './components/weather/Weather';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Helmet>
          <meta name="description" content="Météo construite avec OpenWeatherMap, Bulma et React par Joachim Brasier" />
          <meta property="og:title" content="Météo" />
          <meta property="og:url" content="https://meteo.jbrasier.fr/" />
          <meta property="og:description" content="Météo construite avec OpenWeatherMap, Bulma et React par Joachim Brasier" />
          <meta property="og:image" content="https://meteo.jbrasier.fr/og.svg" />
          <meta property="og:image:secure_url" content="https://meteo.jbrasier.fr/og.svg" />
          <meta property="og:image:alt" content="Météo" />
          <meta property="og:image:type" content="image/svg" />
          <meta property="og:site_name" content="Météo" />
          <meta property="og:locale" content="fr_FR" />
          <link rel="canonical" href="https://meteo.jbrasier.fr" />
        </Helmet>
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
