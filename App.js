import * as React from 'react';
import { View, SafeAreaView } from 'react-native'
import { Button , Text  } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Navigator from './src/components/Navigator';
import DashboardScreen from './src/components/DashboardScreen';

const Tab = createMaterialBottomTabNavigator()


const App = () => (
    <NavigationContainer>
      <SafeAreaView />
        <Navigator />
    </NavigationContainer>
);

export default App;