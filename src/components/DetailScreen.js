import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Button, Subheading, TextInput, Checkbox} from 'react-native-paper';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as addAction from '../action/eventAction.js';
import {Picker} from '@react-native-picker/picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';
import RNModalPicker from 'rn-modal-picker';
import * as eventAction  from '../action/eventAction'

export default function DetailScreen({route}) {

  const [dates, setDates] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState();

  const addReducer = useSelector(({addReducer}) => addReducer);
  const eventReducer = useSelector(({eventReducer}) => eventReducer);
  const detailReducer = useSelector(({detailReducer}) => detailReducer);

  const type = eventReducer.event.jobtype;
  const line = eventReducer.event.line;
  const component = eventReducer.event.component;
  const [text, setText] = useState(route.params.component);

  const usedispatch = useDispatch();

  const [data, setDate] = React.useState({
    id_jobtype:detailReducer.detail.id_jobtype,
    id_model:detailReducer.detail.id_model,
    id_line: detailReducer.detail.id_line,
    workorder: detailReducer.detail.workorder,
    barc_rules: detailReducer.detail.barc_rules,
    inspec_process: detailReducer.detail.inspec_process,
    mach_documents: detailReducer.detail.mach_documents,
    assem_documents: detailReducer.detail.assem_documents,
    id_creater: detailReducer.detail.id_creater,
    bom: detailReducer.detail.bom == "null" ? "" : detailReducer.detail.bom ,
    xy_data: detailReducer.detail.xy_data == "null" ? "" : detailReducer.detail.xy_data,
    st_laser: detailReducer.detail.st_laser == "null" ? "" : detailReducer.detail.st_laser,
    use_bom: detailReducer.detail.bom == "null" ? false : true,
    use_xy_data: detailReducer.detail.xy_data == "null" ? false : true,
    use_st_lasermark: detailReducer.detail.st_laser == "null" ? false : true,
  });

  return (
    <View style={style.container}>
      <View style={style.from}>
        <View style={style.title}>
          <Text style={style.texttltle}>Detail Event</Text>
          <Button
            icon="plus-circle"
            mode="contained"
            color="#54c242"
            onPress={()=>usedispatch(eventAction.add(data))}
            style={{borderRadius: 30, width: 150}}>
            Update
          </Button>
        </View>
        <View>
          <View style={style.fromgroup}>
            <Text>Job Type :</Text>
            <Picker
              selectedValue={data.id_jobtype}
              style={style.frombody}
              onValueChange={(itemValue, itemIndex) =>
                setDate({...data, id_jobtype: itemValue})
              }>
              {type.map((value, index) => (
                <Picker.Item
                
                  label={value.name_jobtype}
                  value={value.id_jobtype}
                  key={index}
                />
              ))}
            </Picker>
          </View>

          <View style={style.fromgroup}>
            <Text>Component :</Text>
            <View style={style.frombody}>
              <RNModalPicker
                data={component}
                pickerTitle={'Search Component'}
                // labelText={'Select Component'}
                showSearchBar={true}
                placeHolderText={"okok"}
                showPickerTitle={true}
                selectedText={text}
                searchBarPlaceHolder={"Search Component..."}
                searchBarPlaceHolderColor={'#9d9d9d'}
                listTextStyle={style.listTextStyle}
                selectedTextStyle={style.selectedTextStyle}
                dropDownIconStyle={style.dropDownIconStyle}
                onKeyPress={()=> console.log("OK") }
                selectedValue={(index, item) => {
                  setDate({...data,id_model:item.id});
                  setText(item.name);
                }} />
            </View>
          </View>

          <View style={style.fromgroup}>
            <Text>Line :</Text>
            <Picker
              selectedValue={data.id_line}
              style={style.frombody}
              onValueChange={(itemValue, itemIndex) =>
                setDate({...data, id_line: itemValue})
              }>
              {line.map((value, index) => (
                <Picker.Item
                  label={value.name_line}
                  value={value.id_line}
                  key={index}
                />
              ))}
            </Picker>
          </View>

          <View style={style.fromgroup}>
            <Text>workorder :</Text>
            <TextInput
              value={data.workorder}
              onChangeText={e => setDate({...data, workorder: e})}
              style={style.frombody}
              maxLength={10}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={{marginTop: 30, borderBottomWidth: 1, marginBottom: 10}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: 333,
            }}>
            <Checkbox
              status={data.barc_rules ? 'checked' : 'unchecked'}
              onPress={() =>
                data.barc_rules
                  ? setDate({...data, barc_rules: false})
                  : setDate({...data, barc_rules: true})
              }
            />
            <Text
              style={
                data.barc_rules ? {color: '#006600'} : {color: '#000000'}
              }>
              Barcode rules
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: 333,
            }}>
            <Checkbox
              status={data.inspec_process ? 'checked' : 'unchecked'}
              onPress={() =>
                data.inspec_process
                  ? setDate({...data, inspec_process: false})
                  : setDate({...data, inspec_process: true})
              }
            />
            <Text
              style={
                data.inspec_process
                  ? {color: '#006600'}
                  : {color: '#000000'}
              }>
              Inspection processes
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: 333,
            }}>
            <Checkbox
              status={data.mach_documents ? 'checked' : 'unchecked'}
              onPress={() =>
                data.mach_documents
                  ? setDate({...data, mach_documents: false})
                  : setDate({...data, mach_documents: true})
              }
            />
            <Text
              style={
                data.mach_documents ? {color: '#006600'} : {color: '#000000'}
              }>
              Machine documents
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: 333,
            }}>
            <Checkbox
              status={data.assem_documents ? 'checked' : 'unchecked'}
              onPress={() =>
                data.assem_documents
                  ? setDate({...data, assem_documents: false})
                  : setDate({...data, assem_documents: true})
              }
            />
            <Text
              style={
                data.assem_documents
                  ? {color: '#006600'}
                  : {color: '#000000'}
              }>
              Assembly documentes
            </Text>
          </View>
        </View>

        <View style={{width: 330}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={data.use_bom ? {color: '#000000'} : {color: '#cccccc'}}>
              Bom
            </Text>
            <Text
              style={data.use_bom ? {color: '#000000'} : {color: '#cccccc'}}>
              :
            </Text>
            <Text
              style={data.use_bom ? {color: '#000000'} : {color: '#cccccc'}}>
              {data.bom}
            </Text>
            <MaterialCommunityIcons
              name="calendar-month"
              color={data.use_bom ? '#000000' : '#cccccc'}
              size={26}
              onPress={() => {
                setOpen(true);
                setSelect('bom');
              }}
            />
            <Checkbox
              status={data.use_bom ? 'checked' : 'unchecked'}
              onPress={() =>
                data.use_bom
                  ? setDate({...data, use_bom: false})
                  : setDate({...data, use_bom: true})
              }
            />
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={
                data.use_xy_data ? {color: '#000000'} : {color: '#cccccc'}
              }>
              XY Data
            </Text>
            <Text
              style={
                data.use_xy_data ? {color: '#000000'} : {color: '#cccccc'}
              }>
              :
            </Text>
            <Text
              style={
                data.use_xy_data ? {color: '#000000'} : {color: '#cccccc'}
              }>
              {data.xy_data}
            </Text>
            <MaterialCommunityIcons
              name="calendar-month"
              color={data.use_xy_data ? '#000000' : '#cccccc'}
              size={26}
              onPress={() => {
                setOpen(true);
                setSelect('xy-data');
              }}
            />

            <Checkbox
              status={data.use_xy_data ? 'checked' : 'unchecked'}
              onPress={() =>
                data.use_xy_data
                  ? setDate({...data, use_xy_data: false})
                  : setDate({...data, use_xy_data: true})
              }
            />
          </View>

          <DatePicker
            modal
            mode="date"
            open={open}
            date={dates}
            onConfirm={dates => {
              setOpen(false);
              if (select == 'bom') {
                setDate({...data, bom: dates.toISOString().split('T')[0]});
              } else if (select == 'xy-data') {
                setDate({...data, xy_data: dates.toISOString().split('T')[0]});
              } else {
                setDate({
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
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={
                data.use_st_lasermark ? {color: '#000000'} : {color: '#cccccc'}
              }>
              Lasermark
            </Text>
            <Text
              style={
                data.use_st_lasermark ? {color: '#000000'} : {color: '#cccccc'}
              }>
              :
            </Text>
            <Text
              style={
                data.use_st_lasermark ? {color: '#000000'} : {color: '#cccccc'}
              }>
              {data.st_laser}
            </Text>
            <MaterialCommunityIcons
              name="calendar-month"
              color={data.use_st_lasermark ? '#000000' : '#cccccc'}
              size={26}
              onPress={() => {
                setOpen(true);
                setSelect('st_lasermark');
              }}
            />

            <Checkbox
              status={data.use_st_lasermark ? 'checked' : 'unchecked'}
              onPress={() =>
                data.use_st_lasermark
                  ? setDate({...data, use_st_lasermark: false})
                  : setDate({...data, use_st_lasermark: true})
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73c2fb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  from: {
    width: 358,
    height: 580,
    backgroundColor: '#fff',
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textbar: {
    fontSize: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
  },
  title: {
    width: 358,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  texttltle: {
    fontSize: 20,
  },
  fromgroup: {
    width: 325,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  frombody: {
    width: 225,
    height: 33,
    borderWidth: 0.2,
    fontSize: 15,
  },
  selectedTextStyle: {
    height: 50,
    borderColor: 'gray',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width: '100%',
    color: 'black',
    fontSize: 12,
    paddingLeft: 0,
    marginTop: -25,
  },
  listTextStyle: {
    color: '#000',
    marginVertical: 10,
    flex: 0.9,
    marginLeft: 20,
    marginHorizontal: 10,
    textAlign: 'left',
  },
  searchBarStyle: {
    marginBottom: 10,
    flexDirection: 'row',
    height: 40,
    shadowRadius: 1,
    shadowOpacity: 1.0,
    borderWidth: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderColor: '#303030',
    shadowColor: '#303030',
    borderRadius: 5,
    elevation: 1,
    marginHorizontal: 10,
  },
  placeHolderTextStyle: {
    color: 'red',
    padding: 10,
    textAlign: 'left',
    width: '99%',
    flexDirection: 'row',
  },
  dropDownIconStyle: {
    width: 10,
    height: 10,
    left: -14,
    marginTop: -20,
    // marginTop: 20,
  },
  pickerStyle: {
    shadowRadius: 0.5,
    shadowOpacity: 0.5,
    borderWidth: 0.5,
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    height: 60,
    borderColor: '#303030',
    shadowColor: '#303030',
    borderRadius: 2,
    elevation: 0.5,
  },
  pickerStyle1: {
    height: 60,
    borderBottomColor: 'dodgerblue',
    borderBottomWidth: 2,
  },
});
