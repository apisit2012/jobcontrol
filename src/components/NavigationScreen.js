import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as notificationAction from '../action/notificationAction';
import * as eventAction from '../action/eventAction';
import * as detailAction from '../action/detailAction';

export default function NavigationScreen({navigation}) {

  const notigicationReducer = useSelector(
    ({notigicationReducer}) => notigicationReducer,
  );

  const usedispatch = useDispatch();

  const findbypk = (id_event, component) => {
    const data = { id_event }
     usedispatch(detailAction.findEventByPk(data,navigation, component))
  }

  React.useEffect(() => {
    usedispatch(notificationAction.renderNotification());
  }, []);

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#73c2fb',
      }}>

        <ScrollView>

        <View style={{flex: 1, backgroundColor: '#fff', width: 350, marginTop: 10}}>
        <FlatList
          data={notigicationReducer.notification.result}
          renderItem={({item}) => (
            <View
              style={
                item.notification
                  ? {
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 10,
                      borderWidth: 1,
                      borderColor: '#6696c8',
                      backgroundColor: '#83aae5',
                    }
                  : {
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 10,
                      borderWidth: 1,
                      borderColor: '#6696c8',
                      backgroundColor: '#ccffff',
                    }
              }>
              <TouchableOpacity
              onPress={()=>findbypk(item.id_event,item.component)}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 5,
                  width: 330,
                }}>
                <View>
                  <Text
                    style={
                      item.notification
                        ? {color: '#fff', fontSize: 12}
                        : {color: '#000000', fontSize: 12}
                    }>
                    {item.name_jobtype}
                  </Text>
                  <Text
                    style={
                      item.notification
                        ? {color: '#fff', fontSize: 10}
                        : {color: '#000000', fontSize: 10}
                    }>
                    {item.component}
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={
                        item.notification
                          ? {color: '#fff', fontSize: 9}
                          : {color: '#000000', fontSize: 9}
                      }>
                      Creater :{' '}
                    </Text>
                    <Text
                      style={
                        item.notification
                          ? {color: '#fff', fontSize: 9}
                          : {color: '#000000', fontSize: 9}
                      }>
                      {item.creater}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id_event}
        />
      </View>

        </ScrollView>

      
    </View>
  );
}
