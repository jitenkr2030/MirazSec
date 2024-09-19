import { AppRegistry } from 'react-native';
import App from './src/App'; // Make sure this path points to your main App component
import { name as appName } from './app.json';
import { enableScreens } from 'react-native-screens';

enableScreens();

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
