import "react-native-gesture-handler"; //this must be at the top of the app as per https://reactnavigation.org/docs/stack-navigator/
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
