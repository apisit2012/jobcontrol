import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as dashboardAction from '../action/dashboardAction';
import * as detailAction from '../action/detailAction';

export default function DashboardScreen({navigation}) {
  const dashboardReducer = useSelector(
    ({dashboardReducer}) => dashboardReducer,
  );

  const usedispatch = useDispatch();

  React.useEffect(() => {
    usedispatch(dashboardAction.renderpage());
  }, []);

  const findbypk = (id_event, component) => {
    const data = {id_event};
    usedispatch(detailAction.findEventByPk(data, navigation, component));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
      }}>
      {dashboardReducer.das_isFetching ? (
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="#00CCFF" />
        </View>
      ) : dashboardReducer.das_isError ? (
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <MaterialCommunityIcons
            name="alert-circle"
            color="#A52A2A"
            size={15}
          />
          <Text>Inter Net Error</Text>
        </View>
      ) : (
        <View
          style={{
            width: 391,
            height: 55,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#fafafa',
          }}>
          <View
            style={{
              width: 381,
              height: 55,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{
                width: 35,
                height: 35,
                borderRadius: 50,
                marginLeft: 10,
                marginRight: 10,
              }}
              source={{uri: `http://info.th.umc/emp_photo/2498.jpg`}}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('screencreatereport')}>
              <Text>I When To Create Report</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: 391,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#fafafa',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity style={style.buttonPending}>
                <Text style={{fontSize: 11, fontWeight: 'bold'}}>Pending</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: 30,
                  }}>
                  <MaterialCommunityIcons
                    name="clipboard-clock"
                    color="#A52A2A"
                    size={15}
                  />
                  <Text style={{fontSize: 11, fontWeight: 'bold'}}>
                    {dashboardReducer.dashboard.pending}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={style.buttonFollow}>
                <Text style={{fontSize: 11, fontWeight: 'bold'}}>Follow</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: 30,
                  }}>
                  <MaterialCommunityIcons
                    name="bell-plus"
                    color="#1E90FF"
                    size={15}
                  />
                  <Text style={{fontSize: 11, fontWeight: 'bold'}}>
                    {dashboardReducer.dashboard.follow}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={style.buttonClose}>
                <Text style={{fontSize: 11, fontWeight: 'bold'}}>
                  Clase Job
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: 30,
                  }}>
                  <MaterialCommunityIcons
                    name="book-check"
                    color="#32CD32"
                    size={15}
                  />
                  <Text style={{fontSize: 11, fontWeight: 'bold'}}>
                    {dashboardReducer.dashboard.closejob}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={style.buttonTotal}>
                <Text style={{fontSize: 11, fontWeight: 'bold'}}>Total</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: 30,
                  }}>
                  <MaterialCommunityIcons
                    name="briefcase-check"
                    color="#FFA500"
                    size={15}
                  />
                  <Text style={{fontSize: 11, fontWeight: 'bold'}}>
                    {dashboardReducer.dashboard.total}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: 390,
                height: 150,
                backgroundColor: '#fff',
                marginTop: 5,
                marginBottom: 3,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: 390,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Text>Monthly Chart</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="chart-timeline-variant"
                    color="#32CD32"
                    size={14}
                  />
                  <Text>Close Job</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="chart-timeline-variant"
                    color="#FFA500"
                    size={14}
                  />
                  <Text>Tatal</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                width: 390,
                height: 336,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FlatList
                data={dashboardReducer.dashboard.event}
                renderItem={({item}) => (
                  <View
                    style={{
                      width: 380,
                      height: 81,
                      backgroundColor: '#fff',
                      marginTop: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    }}>
                    <TouchableOpacity
                      onPress={() => findbypk(item.id_event, item.component)}
                      style={{
                        width: 380,
                        height: 82,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                      }}>
                      {/* Title Post */}
                      <View
                        style={{
                          width: 380,
                          display: 'flex',
                          flexDirection: 'row',
                          marginTop: 2,
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <Image
                            style={{
                              width: 25,
                              height: 25,
                              borderRadius: 50,
                              marginRight: 5,
                            }}
                            source={{
                              uri: `http://info.th.umc/emp_photo/${item.id_creater}.jpg`,
                            }}
                          />
                          <View>
                            <Text style={{fontWeight: 'bold'}}>
                              {item.name}
                            </Text>
                            <View
                              style={{display: 'flex', flexDirection: 'row'}}>
                              <Text style={{fontSize: 9, fontWeight: 'bold'}}>
                                Create :{' '}
                              </Text>
                              <Text style={{fontSize: 9, fontWeight: 'bold'}}>
                                {item.create_date.substring(0, 10)}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <Text
                          style={{
                            fontSize: 12,
                            display: 'flex',
                            flexDirection: 'row',
                            top: -7,
                            fontWeight: 'bold',
                          }}>
                          {item.status}
                        </Text>
                      </View>

                      {/* Body Post */}
                      <View
                        style={{
                          width: 382,
                          height: 45,
                          display: 'flex',
                          flexDirection: 'row',
                          marginTop: 2,
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          paddingLeft: 5,
                          paddingRight: 5,
                          backgroundColor: '#FFF',
                        }}>
                        <Text style={{fontSize: 15, marginRight: 20}}>
                          {item.name_jobtype}
                        </Text>
                        <Text style={{fontSize: 12}}>{item.component}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item.id_event}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  buttonFollow: {
    borderRadius: 20,
    backgroundColor: '#fff',
    width: 85,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonClose: {
    borderRadius: 20,
    backgroundColor: '#fff',
    width: 85,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonPending: {
    borderRadius: 20,
    width: 85,
    height: 40,
    backgroundColor: '#ffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonTotal: {
    borderRadius: 20,
    width: 85,
    height: 40,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  button: {
    borderRadius: 20,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e2ddeb',
    alignItems: 'flex-start',
    width: 334,
    padding: 10,
    marginTop: 10,
  },
  from: {
    width: 334,
    height: 464,
    backgroundColor: '#fff',
    marginTop: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
