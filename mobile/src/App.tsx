// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import GuardManagementScreen from './screens/GuardManagementScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} 
        />
       
        
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ title: 'Dashboard' }} 
        />
        <Stack.Screen 
          name="GuardManagement" 
          component={GuardManagementScreen} 
          options={{ title: 'Guard Management' }} 
        />
        {/* Add more screens as per your app's features */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
