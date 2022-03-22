import { View, Text, StyleSheet, TurboModuleRegistry, DatePickerAndroidOpenReturn } from 'react-native'
import { Button, Subheading, TextInput, Checkbox  } from 'react-native-paper';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as addAction from '../action/addAction.js'
import {Picker} from '@react-native-picker/picker';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker'

export default function AddScreen() {

  const [dates, setDates] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState()

  const addReducer = useSelector(({addReducer})=>addReducer)

  const [data, setDate] = React.useState({
    type:null,
    model:null,
    line:null,
    workorder:"5000",
    barcode_rules:false,
    inspection_processes:false,
    machine_documents:false,
    assembly_documentes:false,
    bom:null,
    xy_data:null,
    st_lasermark:null,
    use_bom:false,
    use_xy_data:false,
    use_st_lasermark:false
  })

  const dispatch = useDispatch()

  const type = [
    {label:"New model" ,value:"New model"},
    {label:"New rank" ,value:"New rank"},
    {label:"New" ,value:"New "},
  ]
  const model = [
    {label:"10069-10169-8D02HS3S1SMT" ,value:"10069-10169-8D02HS3S1SMT"},
    {label:"10069-10169-8D02HS3S1SMT" ,value:"10069-10169-8D02HS3S1SMT"},
    {label:"10069-10169-8D02HS3S1SMT" ,value:"10069-10169-8D02HS3S1SMT"},
  ]


  const line = [
    {label:"S101" ,value:"S101"},
    {label:"S201" ,value:"S101"},
    {label:"S301" ,value:"S101"},
    {label:"S401" ,value:"S101"},
    {label:"S501" ,value:"S101"},
    {label:"S601" ,value:"S101"},
    {label:"S701" ,value:"S101"},
    {label:"S801" ,value:"S101"},
    {label:"S901" ,value:"S101"},
    {label:"SA01" ,value:"S101"},
    {label:"SB01" ,value:"S101"},
    {label:"SC01" ,value:"S101"},
    {label:"SD01" ,value:"S101"},
    {label:"SE01" ,value:"S101"},
    {label:"SF01" ,value:"S101"},
    {label:"SG01" ,value:"S101"},
    {label:"SH01" ,value:"S101"},
    {label:"SI01" ,value:"S101"},
    {label:"SJ01" ,value:"S101"},
    {label:"Sk01" ,value:"S101"},
    {label:"SL01" ,value:"S101"},
    {label:"SM01" ,value:"S101"},

  ]

  console.log(dates);

  return (
    <View style={style.container}>
      <Text style={style.textbar}>Add</Text>
      <View style={style.from}>
        <View style={style.title}>
          <Text style={style.texttltle}>New Event</Text>
          <Button icon="plus-circle" mode="contained" color='#54c242' loading={addReducer.mod_isFetching?true:false} disabled={addReducer.mod_isFetching?true:false} style={{borderRadius:30, width:90 ,}}
          >
          Add
        </Button>
        </View>
        <View>

          <View style={style.fromgroup}>
            <Text >Job Type :</Text>
              <Picker
                selectedValue={data.type}
                style={style.frombody}
                onValueChange={(itemValue, itemIndex) =>
                  setDate({...data,type:itemValue})
              }>
                {[type.map((value, index)=><Picker.Item label={value.label} value={value.value} key={index} />)]}
          </Picker>
          </View>

          <View style={style.fromgroup}>
            <Text >Component :</Text>
              <Picker
                selectedValue={data.model}
                style={style.frombody}
                onValueChange={(itemValue, itemIndex) =>
                  setDate({...data,model:itemValue})
              }>
                {model.map((value, index)=><Picker.Item label={value.label} value={value.value} key={index} />)}
          </Picker>
          </View>

          <View style={style.fromgroup}>
            <Text >Line :</Text>
              <Picker
                selectedValue={data.line}
                style={style.frombody}
                onValueChange={(itemValue, itemIndex) =>
                  setDate({...data,line:itemValue})
              }>
                {line.map((value, index)=><Picker.Item label={value.label} value={value.value} key={index} />)}
          </Picker>
          </View>

          <View style={style.fromgroup}>
            <Text >workorder :</Text>
              <TextInput 
              value={data.workorder}
              onChangeText={e=> setDate({...data, workorder:e})}
              style={style.frombody}
              maxLength={10}
              keyboardType='numeric'
              />
          </View>
        </View>

        <View style={{marginTop:30, borderBottomWidth:1,marginBottom:10}} >
          <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center', width:333}}>
            <Checkbox 
                  status={data.barcode_rules ? 'checked': 'unchecked'}
                  onPress={()=> data.barcode_rules ? setDate({...data,barcode_rules:false}) : setDate({...data,barcode_rules:true})}
                />
              <Text style={ data.barcode_rules ? {color:'#006600'} : {color:'#000000'}} >Barcode rules</Text>
            </View>

            <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center', width:333}}>
            <Checkbox 
                  status={data.inspection_processes ? 'checked': 'unchecked'}
                  onPress={()=> data.inspection_processes ? setDate({...data,inspection_processes:false}) : setDate({...data,inspection_processes:true})}
                />
              <Text  style={ data.inspection_processes ? {color:'#006600'} : {color:'#000000'}} >Inspection processes</Text>
            </View>

            <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center', width:333}}>
            <Checkbox 
                  status={data.machine_documents ? 'checked': 'unchecked'}
                  onPress={()=> data.machine_documents ? setDate({...data,machine_documents:false}) : setDate({...data,machine_documents:true})}
                />
              <Text style={ data.machine_documents ? {color:'#006600'} : {color:'#000000'}} >Machine documents</Text>
            </View>

            <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center', width:333}} >
            <Checkbox 
                  status={data.assembly_documentes ? 'checked': 'unchecked'}
                  onPress={()=> data.assembly_documentes ? setDate({...data,assembly_documentes:false}) : setDate({...data,assembly_documentes:true})}
                />
              <Text style={ data.assembly_documentes ? {color:'#006600'} : {color:'#000000'}} >Assembly documentes</Text>
            </View>

        </View>

          <View style={{width:330}} >

            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
              <Text style={ data.use_bom ? {color:'#000000'} : {color:'#cccccc'}} >Bom</Text>
              <Text style={ data.use_bom ? {color:'#000000'} : {color:'#cccccc'}} >:</Text>
              <Text style={ data.use_bom ? {color:'#000000'} : {color:'#cccccc'}} >{data.bom}</Text>
              <MaterialCommunityIcons name='calendar-month' color={ data.use_bom ? "#000000" : "#cccccc"} size={26} onPress={()=>{
                setOpen(true)
                setSelect("bom")
              }}
              
              />
              <Checkbox 
                  status={data.use_bom ? 'checked': 'unchecked'}
                  onPress={()=> data.use_bom ? setDate({...data,use_bom:false}) : setDate({...data,use_bom:true})}
                />
            </View>

            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
              <Text style={ data.use_xy_data ? {color:'#000000'} : {color:'#cccccc'}} >XY Data</Text>
              <Text style={ data.use_xy_data ? {color:'#000000'} : {color:'#cccccc'}} >:</Text>
              <Text style={ data.use_xy_data ? {color:'#000000'} : {color:'#cccccc'}} >{data.xy_data}</Text>
              <MaterialCommunityIcons name='calendar-month' color={ data.use_xy_data ? "#000000" : "#cccccc"} size={26} onPress={()=>{
                setOpen(true)
                setSelect("xy-data")
              }}  />

              <Checkbox 
                  status={data.use_xy_data ? 'checked': 'unchecked'}
                  onPress={()=> data.use_xy_data ? setDate({...data,use_xy_data:false}) : setDate({...data,use_xy_data:true})}
                />
            </View>

            <DatePicker
                      modal
                        mode="date"
                        open={open}
                        date={dates}
                        onConfirm={(dates) => {
                          setOpen(false)
                          if(select == "bom") {
                            setDate({...data,bom:dates.toISOString().split('T')[0]})
                          } else if(select == "xy-data") {
                            setDate({...data,xy_data:dates.toISOString().split('T')[0]})
                          } else {
                            setDate({...data,st_lasermark:dates.toISOString().split('T')[0]})
                          }
                          
                        }}
                        onCancel={() => {
            setOpen(false)
            }}/>

            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
              <Text style={ data.use_st_lasermark ? {color:'#000000'} : {color:'#cccccc'}} >Lasermark</Text>
              <Text style={ data.use_st_lasermark ? {color:'#000000'} : {color:'#cccccc'}} >:</Text>
              <Text style={ data.use_st_lasermark ? {color:'#000000'} : {color:'#cccccc'}} >{data.st_lasermark}</Text>
              <MaterialCommunityIcons name='calendar-month' color={ data.use_st_lasermark ? "#000000" : "#cccccc"} size={26} onPress={()=>{
                setOpen(true)
                setSelect("st_lasermark")
              }} />
             
              <Checkbox 
                  status={data.use_st_lasermark ? 'checked': 'unchecked'}
                  onPress={()=> data.use_st_lasermark ? setDate({...data,use_st_lasermark:false}) : setDate({...data,use_st_lasermark:true})}
                />
            </View>

          </View>

      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#73c2fb',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  from:{
    width:358,
    height:580,
    top:10,
    backgroundColor:'#fff',
    borderRadius:25,
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  textbar:{
    fontSize:25,
    borderBottomWidth:2,
    borderBottomColor:"#000000",
  },
  title:{
    width:358,
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10
  },
  texttltle:{
    fontSize:20,
  },
  fromgroup:{
    width:325,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  frombody:{
    width:225,
    height:33,
    borderWidth:0.2,
    fontSize:15
  }

})