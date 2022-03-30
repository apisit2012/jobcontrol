import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SearchLineScreen({route}) {
  return (
    <View style={{flex:1, display:'flex', justifyContent:'center', alignItems: 'center'}}>
      {
          route.params.line.map((val, index)=>(
            <TouchableOpacity 
            key={index} 
            style={{width : 200, height: 30, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingLeft: 5, paddingRight: 5 }} 
            >
                <Text>{val.name_line}</Text>
            </TouchableOpacity>
          ))
      }
    </View>
  )
}