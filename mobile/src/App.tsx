import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './store';
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import GuardManagementScreen from './screens/GuardManagementScreen';
import ClientManagementScreen from './screens/ClientManagementScreen';
import FieldOfficerFeaturesScreen from './screens/FieldOfficerFeaturesScreen';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Guard Management" component={GuardManagementScreen} />
        <Stack.Screen name="Client Management" component={ClientManagementScreen} />
        <Stack.Screen name="Field Officer Features" component={FieldOfficerFeaturesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
