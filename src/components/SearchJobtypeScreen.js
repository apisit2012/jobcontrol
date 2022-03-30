import { View, Text, TouchableOpacity , FlatList} from 'react-native'
import React from 'react'

export default function SearchJobtypeScreen({route}) {
  return (
    <View style={{flex:1, display:'flex', justifyContent:'center', alignItems: 'center'}}>
            <FlatList 
            data={route.params.line}
            renderItem={ ({item}) => (
              <TouchableOpacity style={{width: 100, height: 100, backgroundColor:'#00cc00', margin:5}} >
                <Text>55555555555</Text>
              </TouchableOpacity>
            )}/>
    </View>
  )
}