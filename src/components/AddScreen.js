import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Subheading, TextInput, Checkbox} from 'react-native-paper';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as addAction from '../action/eventAction.js';
import {Picker} from '@react-native-picker/picker';
import {Icon} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';
import RNModalPicker from 'rn-modal-picker';
import * as eventAction from '../action/eventAction';

export default function AddScreen({navigation, route}) {
  const [dates, setDates] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState();

  const addReducer = useSelector(({addReducer}) => addReducer);
  const eventReducer = useSelector(({eventReducer}) => eventReducer);
  const authenReducer = useSelector(({authenReducer}) => authenReducer);
  
  const SearchcomponentReducer = useSelector(
    ({SearchcomponentReducer}) => SearchcomponentReducer,
  );

  const type = eventReducer.event.jobtype;
  const line = eventReducer.event.line;
  const component = eventReducer.event.component;
  const [searchcomponent, setSearchcomponent] = useState();

  const [name, setName] = useState({
    name_jobtype: null,
    name_model: null,
    name_line: null,
  });

  const usedispatch = useDispatch();

  console.log(SearchcomponentReducer);

  const [data, setData] = React.useState({
    id_jobtype: 1,
    id_model: SearchcomponentReducer.id_model,
    id_line: 1,
    workorder: '5000',
    barc_rules: true,
    inspec_process: false,
    mach_documents: false,
    assem_documents: false,
    id_creater: '2497',
    bom: null,
    xy_data: null,
    st_laser: null,
    use_bom: false,
    use_xy_data: false,
    use_st_lasermark: false,
    id_creater: authenReducer.account.id_emp,
  });

  return (
    <View style={{display: 'flex', backgroundColor: '#d4d4d4'}}>


      <View
        style={{
          width: 392,
          height: 200,
          backgroundColor: '#fafafa',
          marginTop: 5,
          direction: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        {/* Header */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 394,
            height: 50,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 0.2,
            paddingLeft: 17,
            paddingRight: 17,
          }}>
          <Text style={{fontSize: 15, color: '#0066FF', fontWeight: 'bold'}}>
            Apisit Phunobthong
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#0066FF',
              width: 60,
              height: 29,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 10, fontWeight: 'bold', color: '#ffff'}}>
              Create
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            left: -115,
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 10,
            fontSize: 15,
          }}>
          Plase Select Detail
        </Text>
        {/* Title */}
        <View
          style={{
            width: 392,
            height: 110,
            backgroundColor: '#fafafa',
            marginTop: 2,
            direction: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            diplay: 'flex',
          }}>
          <View
            style={{
              width: 350,
              height: 30,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{width: 105, fontWeight: 'bold'}}>Type : </Text>
            <Picker
              selectedValue={data.id_jobtype}
              style={{width:255, height:30}}
              onValueChange={(itemValue, itemIndex) =>
                setData({...data, id_jobtype: itemValue})
              }>
              {type.map((value, index) => (
                <Picker.Item
                  label={value.name_jobtype}
                  value={value.id_jobtype}
                  key={index}
                  style={{fontSize:13}}
                />
              ))}
            </Picker>
          </View>

          <View
            style={{
              width: 350,
              height: 30,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{width: 105, fontWeight: 'bold'}}>Component : </Text>
            <Text style={{width: 225}}>{name.name_model}</Text>
            <Text style={{width: 20}}>
              <MaterialCommunityIcons
                name="magnify"
                color="#32CD32"
                size={20}
              />
            </Text>
          </View>

          <View
            style={{
              width: 350,
              height: 30,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{width: 105, fontWeight: 'bold'}}>Line : </Text>
            <Picker
              selectedValue={data.id_line}
              style={{width:255, height:30}}
              onValueChange={(itemValue, itemIndex) =>
                setData({...data, id_line: itemValue})
              }>
              {line.map((value, index) => (
                <Picker.Item
                  label={value.name_line}
                  value={value.id_line}
                  key={index}
                  style={{fontSize:13}}
                />
              ))}
            </Picker>
          </View>
        </View>


        <DatePicker
            modal
            mode="date"
            open={open}
            date={dates}
            onConfirm={dates => {
              setOpen(false);
              if (select.select == 'bom') {
                setData({...data, bom: dates.toISOString().split('T')[0]});
              } else if (select.select == 'xy-data') {
                setData({...data, xy_data: dates.toISOString().split('T')[0]});
              } else {
                setData({
                  ...data,
                  st_laser: dates.toISOString().split('T')[0],
                });
              }
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

        <View
          style={{
            width: 392,
            height: 385,
            backgroundColor: '#fafafa',
            marginTop: 5,
            diplay: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>


          <View style={{width:392, height:115, display:'flex', justifyContent:'flex-start', alignItems:'center'}}>

            <View style={{width:350, height: 30, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Text style={{fontWeight:'bold', width:100}}>Work Order : </Text>
              <TextInput 
              value={data.workorder} 
              style={{fontWeight:'bold', 
              width:250, height:29, backgroundColor:'#fafafa', borderWidth: 0, borderColor: '#d3d3d3', color:"#d3d3d3"  }}
              keyboardType="numeric"
              onChangeText={e=> setData({...data,workorder:e}) }
              />
            </View>

            <View style={{width:350, height: 30, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Text style={data.use_bom
                ? {fontWeight:'bold', width:100, color: "#00cc00"}
                : {fontWeight:'bold', width:100, color: "#d3d3d3"}}>Bom : </Text>
              <Text style={
                data.use_bom
                ? {fontWeight:'bold', width:100, color: "#00cc00"}
                : {fontWeight:'bold', width:100, color: "#d3d3d3"}}>{data.bom == "Null" ? " " : data.bom}</Text>
              <MaterialCommunityIcons name="calendar-month" color={
                  data.use_bom
                  ? "#00cc00"
                  : "#d3d3d3" } size={20} style={{width: 20}} 
                  onPress={()=>{
                    setSelect({select:'bom'})
                    setOpen({open:true})
                  }}
                  />
              <MaterialCommunityIcons name={
                data.use_bom
                ? "check-circle"
                : "checkbox-blank-circle-outline" } color={
                  data.use_bom
                  ? "#00cc00"
                  : "#d3d3d3" } size={20} style={{width: 20}}
              onPress={()=> data.use_bom ? setData({...data,use_bom:false}) : setData({...data,use_bom:true}) }
              />
            </View>
 

            <View style={{width:350, height: 30, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Text style={data.use_xy_data
                ? {fontWeight:'bold', width:100, color: "#00cc00"}
                : {fontWeight:'bold', width:100, color: "#d3d3d3"}}>XY-Data : </Text>
              <Text style={
                data.use_xy_data
                ? {fontWeight:'bold', width:100, color: "#00cc00"}
                : {fontWeight:'bold', width:100, color: "#d3d3d3"}}>{data.xy_data == "Null" ? " " : data.xy_data}</Text>
              <MaterialCommunityIcons name="calendar-month" color={
                  data.use_xy_data
                  ? "#00cc00"
                  : "#d3d3d3" } size={20} style={{width: 20}} 
                  onPress={()=>{
                    setSelect({select:'xy-data'})
                    setOpen({open:true})
                  }}
                  />
              <MaterialCommunityIcons name={
                data.use_xy_data
                ? "check-circle"
                : "checkbox-blank-circle-outline" } color={
                  data.use_xy_data
                  ? "#00cc00"
                  : "#d3d3d3" } size={20} style={{width: 20}}
              onPress={()=> data.use_xy_data ? setData({...data,use_xy_data:false}) : setData({...data,use_xy_data:true}) }
              />
            </View>


            <View style={{width:350, height: 30, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Text style={data.use_st_lasermark
                ? {fontWeight:'bold', width:100, color: "#00cc00"}
                : {fontWeight:'bold', width:100, color: "#d3d3d3"}}>Laser mark : </Text>
              <Text style={
                data.use_st_lasermark
                ? {fontWeight:'bold', width:100, color: "#00cc00"}
                : {fontWeight:'bold', width:100, color: "#d3d3d3"}}>{data.st_laser == "Null" ? " " : data.st_laser}</Text>
              <MaterialCommunityIcons name="calendar-month" color={
                  data.use_st_lasermark
                  ? "#00cc00"
                  : "#d3d3d3" } size={20} style={{width: 20}} 
                  onPress={()=>{
                    setSelect({select:'st_lasermark'})
                    setOpen({open:true})
                  }}
                  />
              <MaterialCommunityIcons name={
                data.use_st_lasermark
                ? "check-circle"
                : "checkbox-blank-circle-outline" } color={
                  data.use_st_lasermark
                  ? "#00cc00"
                  : "#d3d3d3" } size={20} style={{width: 20}}
              onPress={()=> data.use_st_lasermark ? setData({...data,use_st_lasermark:false}) : setData({...data,use_st_lasermark:true}) }
              />
            </View>

          </View>

          <View
            style={{
              width: 370,
              height: 205,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              borderWidth: 2,
              marginTop: 20,
              borderColor: '#d3d3d3',
              padding: 5,
            }}>
            <View style={{width: 372, flexDirection: 'row', marginBottom: 25}}>
              <MaterialCommunityIcons
                name="check-circle"
                color="#00CC00"
                size={20}
                style={{marginLeft: 10}}
              />
              <Text style={{fontWeight: 'bold'}}>
                {' '}
                Press check when you use it.
              </Text>
            </View>

            <View
              style={
                data.barc_rules
                  ? {
                      width: 330,
                      height: 25,
                      borderColor: '#00cc00',
                      borderBottomWidth: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 10,
                    }
                  : {
                      width: 330,
                      height: 25,
                      borderColor: '#d3d3d3',
                      borderBottomWidth: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 10,
                    }
              }>
              <Text
                style={
                  data.barc_rules
                    ? {fontWeight: 'bold', color: '#00CC00'}
                    : {fontWeight: 'bold', color: '#d3d3d3'}
                }>
                Barcode rules
              </Text>
              <MaterialCommunityIcons
                name={
                  data.barc_rules
                    ? 'check-circle'
                    : 'checkbox-blank-circle-outline'
                }
                color={data.barc_rules ? '#00cc00' : '#d3d3d3'}
                size={20}
                style={{marginLeft: 10}}
                onPress={() =>
                  data.barc_rules
                    ? setData({...data, barc_rules: false})
                    : setData({...data, barc_rules: true})
                }
              />
            </View>

            <View
              style={
                data.inspec_process
                  ? {
                      width: 330,
                      height: 25,
                      borderColor: '#00cc00',
                      borderBottomWidth: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 10,
                    }
                  : {
                      width: 330,
                      height: 25,
                      borderColor: '#d3d3d3',
                      borderBottomWidth: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 10,
                    }
              }>
              <Text
                style={
                  data.inspec_process
                    ? {fontWeight: 'bold', color: '#00CC00'}
                    : {fontWeight: 'bold', color: '#d3d3d3'}
                }>
                Inspection processes
              </Text>
              <MaterialCommunityIcons
                name={
                  data.inspec_process
                    ? 'check-circle'
                    : 'checkbox-blank-circle-outline'
                }
                color={data.inspec_process ? '#00cc00' : '#d3d3d3'}
                size={20}
                style={{marginLeft: 10}}
                onPress={() =>
                  data.inspec_process
                    ? setData({...data, inspec_process: false})
                    : setData({...data, inspec_process: true})
                }
              />
            </View>

            <View
              style={
                data.mach_documents
                  ? {
                      width: 330,
                      height: 25,
                      borderColor: '#00cc00',
                      borderBottomWidth: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 10,
                    }
                  : {
                      width: 330,
                      height: 25,
                      borderColor: '#d3d3d3',
                      borderBottomWidth: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 10,
                    }
              }>
              <Text
                style={
                  data.mach_documents
                    ? {fontWeight: 'bold', color: '#00CC00'}
                    : {fontWeight: 'bold', color: '#d3d3d3'}
                }>
                Machine documents
              </Text>
              <MaterialCommunityIcons
                name={
                  data.mach_documents
                    ? 'check-circle'
                    : 'checkbox-blank-circle-outline'
                }
                color={data.mach_documents ? '#00cc00' : '#d3d3d3'}
                size={20}
                style={{marginLeft: 10}}
                onPress={() =>
                  data.mach_documents
                    ? setData({...data, mach_documents: false})
                    : setData({...data, mach_documents: true})
                }
              />
            </View>

            <View
              style={
                data.assem_documents
                  ? {
                      width: 330,
                      height: 25,
                      borderColor: '#00cc00',
                      borderBottomWidth: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 10,
                    }
                  : {
                      width: 330,
                      height: 25,
                      borderColor: '#d3d3d3',
                      borderBottomWidth: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 10,
                    }
              }>
              <Text
                style={
                  data.assem_documents
                    ? {fontWeight: 'bold', color: '#00CC00'}
                    : {fontWeight: 'bold', color: '#d3d3d3'}
                }>
                Assembly documentes
              </Text>
              <MaterialCommunityIcons
                name={
                  data.assem_documents
                    ? 'check-circle'
                    : 'checkbox-blank-circle-outline'
                }
                color={data.assem_documents ? '#00cc00' : '#d3d3d3'}
                size={20}
                style={{marginLeft: 10}}
                onPress={() =>
                  data.assem_documents
                    ? setData({...data, assem_documents: false})
                    : setData({...data, assem_documents: true})
                }
              />
            </View>
          </View>

        </View>
      </View>
    </View>
  );
}
