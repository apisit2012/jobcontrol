import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function DashboardScreen() {

  const dashboardReducer = useSelector(({dashboardReducer})=>dashboardReducer)

  return (
    <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',backgroundColor:'#73c2fb',paddingTop:10}}>
      <Text style={{fontSize:24, borderBottomWidth:2, borderBottomColor:"#000000",left:-80,marginBottom:10}}>DashboardScreen</Text>
      <View style={{width:350,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <TouchableOpacity style={style.buttonClose}
          onPress={()=>alert("OK","3333333333")}   
        >
          <Text>Clase Job</Text>
          <Text>{dashboardReducer.dashboard.closejob}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonPending}>
          <Text>Pending</Text>
          <Text>{dashboardReducer.dashboard.pending}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonTotal}>
          <Text>Total</Text>
          <Text>{dashboardReducer.dashboard.total}</Text>
        </TouchableOpacity>
      </View>

      <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={style.button}>
          <Text>
            Follow up today
          </Text>
          <Text>{dashboardReducer.dashboard.follow}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text>
            Create Report
          </Text>
        </TouchableOpacity>
      </View>

      <View style={style.from}>
        <View style={{width:300,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:20}}>
          <Text>Event</Text>
          <Text>See more....</Text>
        </View>
      </View>      
    </View>
  )
}

const style = StyleSheet.create({
  buttonClose:{
    borderRadius:20,
    backgroundColor:'green',
    width:100,
    height:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:5
  },
  buttonPending:{
    borderRadius:20,
    width:100,
    height:50,
    backgroundColor:'red',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:5
  },
  buttonTotal:{
    borderRadius:20,
    width:100,
    backgroundColor:'blue',
    height:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:5
  },
  button:{
    borderRadius:20,
    borderWidth:1,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
    width:334,
    padding:10,
    marginTop:10
  },
  from:{
    width:334,
    height:464,
    backgroundColor:'#fff',
    marginTop:20,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center'
  }
})