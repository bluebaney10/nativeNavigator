/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
//import App from './app/AppTabNav'; //success
//import App from './app/AppTabNavIcon'; //error
//import App from './app/AppTabIcon'; //error
import App from './app/AppTabJump'; //success jump between 2 tab with tab and button
//import App from './app/AppDrawNav'; //error
//import App from './app/AppStack'; //success
//import App from './app/AppAuthen'; //error
//import App from './app/AppDraw'; //error

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
