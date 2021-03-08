import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'

function redirectHandler() {

}

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-rg1k-y55.eu.auth0.com"
      clientId="4zPzSLR0x6tQ7ii1oAHJcKiJaHFQHZXt"
      redirectUri={window.location.origin}
      audience="http://localhost:6001/api"
      scope="read:workouts create:workouts read:exercises"
      onRedirectCallback={redirectHandler}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
