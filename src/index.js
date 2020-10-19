import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles';
import 'normalize.css';
import { firebase } from './lib/firebase.prod';
import { firebaseContext } from './context/firebase';

ReactDOM.render(
  <>
    <firebaseContext.Provider value={{firebase}}>
      <GlobalStyles /> 
      <App />
    </firebaseContext.Provider>
  </>, 
  document.getElementById('root'));
