import { View, Text, TouchableOpacity } from 'react-native'
import {useSelector, useDispatch} from 'react-redux';
import * as eventAction from '../action/eventAction'
import React from 'react'

export default function SearchcomponentScreen({navigation, route}) {

  console.log(route.params.name);
  return (
    <View style={{flex:1}}>
      {route.params.name.map((val, index)=>(
        <View key={index}>
          <TouchableOpacity>
            <Text>
            {val.name_line}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}