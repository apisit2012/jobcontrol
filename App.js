import * as React from 'react';
import { View, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Navigator from './src/components/Navigator';


const Tab = createMaterialBottomTabNavigator()


const App = (props) => (
    <NavigationContainer>
      <SafeAreaView />
        <Navigator />
    </NavigationContainer>
);

export default App;