import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import Subscribe from '../screens/Subscribe';
import Success from '../screens/Success';

enableScreens();
const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Subscribe" component={Subscribe} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
