import {View, Text} from 'react-native';
import React, { useState } from 'react';
import {Badge, TextInput} from 'react-native-paper';

import LoginScreen from './LoginScreen';
import DashboardScreen from './DashboardScreen';
import AccountScreen from './AccountScreen';
import AddScreen from './AddScreen';
import DetailScreen from './DetailScreen';
import CreatereportScreen from './CreatereportScreen';
import EventScreen from './EvenScreen';
import NavigationScreen from './NavigationScreen';
import SearchScreen from './SearchScreen';
import SearchcomponentScreen from './SearchcomponentScreen';
import SearchLineScreen from './SearchLineScreen'

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';

import * as notificationAction from '../action/notificationAction';
import * as eventAction from '../action/eventAction';
import * as searchcomponentAction from '../action/searchcomponentAction'

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const ScreenDashboard = ({navigation}) => (
  <Stack.Navigator initialRouteName="screendashboard">
    <Stack.Screen name="screendashboard" component={DashboardScreen} options={
      {title:"IT Task Monitoring",
      headerTintColor: '#0066FF',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => (<MaterialCommunityIcons name="magnify" color="#708090" size={24} 
                        style={{marginRight:25, borderWidth:1, borderRadius:200, backgroundColor:'#FFF0F5', width:29, height:29, display:'flex',borderColor:'#D3D3D3',
                        justifyContent:'center', alignItems:'center', textAlign:'center'}}
                        onPress={()=> navigation.navigate('screensearch') }
                        />)
      
      }} />
    <Stack.Screen name="screenevent" component={EventScreen} />
    <Stack.Screen name="screendetail" component={DetailScreen} />
    <Stack.Screen name="screencreatereport" component={CreatereportScreen} options={{title:"Report"}}/>
    <Stack.Screen name="screensearch" component={SearchScreen} options={{
      title:"",
      headerRight: () => (
        <TextInput 
        placeholder='Search ......'
        style={{borderWidth:0.5, width: 300, height: 24, borderRadius: 50, borderTopRightRadius:50, borderTopLeftRadius: 50, right: 25, fontSize:12, paddingLeft: 10,}} >

        </TextInput>
      )
    }} />
  </Stack.Navigator>
);

const ScreenAdd = props => {

  const usedispatch = useDispatch();
  
  var components = {}

  return(
    <Stack.Navigator initialRouteName="screenadd">
      <Stack.Screen name="screenadd" component={AddScreen} options={{title:"Create Job"}} />
      <Stack.Screen name="screensearchline" component={SearchLineScreen} options={{title:"Search Line"}} />
      <Stack.Screen name="screensearchcomponent" component={SearchcomponentScreen} options={{title:"",
        headerRight: () => (
          <TextInput 
          placeholder='Search ......'
          value={components.component}
          onChangeText={async (text)=>{
            components={component:text}
            usedispatch(searchcomponentAction.autosearchcomponent(components))
          }}
          style={{borderWidth:0.5, width: 300, height: 24, borderRadius: 50, borderTopRightRadius:50, borderTopLeftRadius: 50, right: 25, fontSize:12, paddingLeft: 10,}} >
          </TextInput>
        )}} />
    </Stack.Navigator>
  );

}
  
  

const ScreenNotification = props => (
  <Stack.Navigator initialRouteName="screennotification">
    <Stack.Screen name="screennotification" component={NavigationScreen} options={{title:"Notifications"}} />
    <Stack.Screen name="screendetail" component={DetailScreen} />
  </Stack.Navigator>
);

const ScreenAccount = props => (
  <Stack.Navigator initialRouteName="screenaccount">
    <Stack.Screen name="screenaccount" component={AccountScreen} options={
      {title:"Profile"}} />
  </Stack.Navigator>
);

export default function Navigator(props) {
  const notigicationReducer = useSelector(
    ({notigicationReducer}) => notigicationReducer,
  );
  const appReducer = useSelector(({appReducer}) => appReducer);

  const usedispatch = useDispatch();

  React.useEffect(() => {
    usedispatch(notificationAction.renderNotification());
    usedispatch(eventAction.getEvent());
  }, []);



  const option = {
    dashboard: {
      tabBarLabel: 'Dashboard',
      tabBarIcon: ({color}) => (
        <MaterialCommunityIcons name="view-dashboard" color={color} size={26} />
      ),
    },
    add: {
      tabBarLabel: 'Add',
      tabBarIcon: ({color}) => (
        <MaterialCommunityIcons
          name="plus-circle-outline"
          color={color}
          size={26}
        />
      ),
    },
    navigation: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({color}) => (
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <MaterialCommunityIcons name="bell" color={color} size={26} />
          <Badge
            style={{left: -13, top: -7}}
            visible={
              notigicationReducer.notification.badge == 0 ? false : true
            }>
            {notigicationReducer.notification.badge}
          </Badge>
        </View>
      ),
    },
    account: {
      tabBarLabel: 'Account',
      tabBarIcon: ({color}) => (
        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
      ),
    },
  };

  return appReducer.isLoggedIn ? (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="#000000"
      inactiveColor="#c0c0c0"
      barStyle={{backgroundColor: '#fffafa', borderWidth: 0.5}}>
      <Tab.Screen
        name="Dashboard"
        component={ScreenDashboard}
        options={option.dashboard}
      />
      <Tab.Screen name="Add" component={ScreenAdd} options={option.add} />
      <Tab.Screen
        name="Navigation"
        component={ScreenNotification}
        options={option.navigation}
      />
      <Tab.Screen
        name="Account"
        component={ScreenAccount}
        options={option.account}
      />
    </Tab.Navigator>
  ) : (
    LoginScreen
  );
}
