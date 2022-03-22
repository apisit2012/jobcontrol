import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen'
import DashboardScreen from './DashboardScreen'
import AccountScreen from './AccountScreen'
import AddScreen from './AddScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationScreen from './NavigationScreen'

const Tab = createMaterialBottomTabNavigator()

export default function Navigator() {

  const [isLoggedIn , setIsloggedIn] = React.useState(true)

  const option = {
      dashboard:{
          tabBarLabel:"Dashboard",
          tabBarIcon: ({color}) =>  <MaterialCommunityIcons name='view-dashboard' color={color} size={26} /> 
      },
      add:{
        tabBarLabel:"Add",
        tabBarIcon: ({color}) => <MaterialCommunityIcons name='plus-circle-outline' color={color} size={26} />
       },
       navigation:{
        tabBarLabel:"Notification",
        tabBarIcon: ({color}) => <MaterialCommunityIcons name='bell' color={color} size={26} />
       },
       account:{
        tabBarLabel:"Account",
        tabBarIcon: ({color}) => <MaterialCommunityIcons name='account-circle' color={color} size={26} />
       },
  }



  return (
        isLoggedIn
        ?(
        <Tab.Navigator 
        initialRouteName='Dashboard' 
        activeColor="#000000"
        inactiveColor="#c0c0c0"
        barStyle={{ backgroundColor: '#fffafa', borderWidth:0.5 }}
        >
            <Tab.Screen name="Dashboard" component={DashboardScreen} options={option.dashboard} />
            <Tab.Screen name="Add" component={AddScreen} options={option.add} />
            <Tab.Screen name="Navigation" component={NavigationScreen} options={option.navigation} />
            <Tab.Screen name="Account" component={AccountScreen} options={option.account}  />
        </Tab.Navigator>
        ) : LoginScreen
  )
}