import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { version } from '../package.json';

// eslint-disable-next-line
const signature = `
 _        __  __ __   ____  ______
| |      /  ]|  |  | /    ||      |
| |     /  / |  |  ||  o  ||      |
| |___ /  /  |  _  ||     ||_|  |_|
|     /   \_  |  |  ||  _  |  |  |  
|     \     | |  |  ||  |  |  |  |  
|_____|\____| |__|__||__|__|  |__|  
` ;

printBanner();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// 디버깅 여부
// window._debugging = process.env.REACT_APP_PROFILE !== 'production';


function printBanner() {
    console.log(`%c${signature}`, 'color:#f6782e');
    console.log('%c Linux theme chat application', 'color:#20e4e4;');
    console.log('%c VERSION', 'color:#20e4e4;', version);
    console.log('%c NODE_ENV:', 'color:#20e4e4;', process.env.NODE_ENV);
    window._debugging && console.debug(process.env);
  
    console.log(
      '%c REACT_APP_PROFILE',
      'color:#20e4e4;',
      process.env.REACT_APP_PROFILE,
    );
  
    console.debug('\n');
  }
  
