import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Switch,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {checkArray, iphone8, sucessTost} from '../../../utils/Helper';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Text18 from '../../../component/customText/Text18';
import {icon, images} from '../../../utils/Image';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';
import {
  changeVehicleStatusService,
  deleteVehicleServices,
  vechicleListServices,
} from '../../../services/Services';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import NoData from '../../../component/common/NoData';
import DeleteModal from '../../../component/modal/DeleteModal';

const Vechicle = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const isFocused = useIsFocused();
  const [isLoding, setIsLoading] = useState(false);
  const [initalState, setInitialState] = useState({
    vechicleList: null,
    deleteModal: false,
    vechicleId: null,
  });
  const [deleteModal, setDeleteModal] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const vechicleList = async () => {
    setIsLoading(true);
    try {
      let response = await vechicleListServices();
      console.log(response.data.askedData, 'mera data');
      setInitialState(pre => ({
        ...pre,
        vechicleList: response?.data?.askedData,
      }));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.response);
    }
  };

  const changeVehicleStatus = async (item, ind) => {
    let temp = [...initalState.vechicleList];
    temp[ind].is_online = !temp[ind].is_online;
    setInitialState(pre => ({...pre, vechicleList: temp}));
    let objToSend = {
      vehicleId: item?._id,
      status: !item?.is_online,
    };

    try {
      let response = await changeVehicleStatusService(objToSend);
      console.log(response.data);
    } catch (error) {
      temp[ind].is_online = temp[ind].is_online;
      setInitialState(pre => ({...pre, vechicleList: temp}));
      console.log(error.response.data);
    }
  };

  const deleteVehicleHadler = async () => {
    let payLoad = {
      vehicleId: initalState.vechicleId,
    };
    console.log(payLoad);
    try {
      let response = await deleteVehicleServices(payLoad);
      // console.log(response.data);
      sucessTost('Vechicle Delete Sucessfully');
      vechicleListServices();
      setDeleteModal(false);
    } catch (error) {
      console.log('EROOR---->', error?.response?.data ?? error?.message);
    }
  };

  useEffect(() => {
    if (isFocused) {
      vechicleList();
    }
  }, [isFocused]);

  return (
    <>
      {Platform.OS == 'android' && <SafeAreaView />}
      <View style={[styles.container]}>
        <StatusBar backgroundColor={colors.theme} barStyle="light-content" />
        <View style={[styles.header, {alignItems: 'center'}]}>
          <Text18 color={colors.white} text={'Vehicle'} />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('AddVechicle')}
          style={{
            zIndex: 999,
            position: 'absolute',
            right: moderateScale(20),
            top: Platform.OS == 'ios' ? moderateScale(65) : moderateScale(25),
          }}>
          <Text14 color={colors.yellow} text={'+Add'} />
        </TouchableOpacity>
      </View>

      {isLoding &&
        [1, 1, 1, 1, 1].map((data, ind) => {
          return (
            <SkeletonPlaceholder
              speed={1000}
              highlightColor={'#222E50' + 50}
              borderRadius={moderateScale(10)}>
              <SkeletonPlaceholder.Item
                marginTop={moderateScale(10)}
                flexDirection="row"
                alignSelf="center"
                alignItems="center"
                height={moderateScale(200)}
                width={'90%'}></SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
          );
        })}

      <FlatList
        data={initalState.vechicleList}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                height: moderateScale(500),
                width: '100%',
                justifyContent: 'center',
              }}>
              <NoData name={'No Vechicle Found'} />
            </View>
          );
        }}
        keyExtractor={item => item?._id}
        renderItem={({item, index}) => {
          console.log(item, index);
          return (
            <View style={styles.vehicleContainer}>
              <View
                style={[
                  styles.vehicleStatus,
                  {
                    backgroundColor: item?.is_online
                      ? colors.lightGreen
                      : colors.lightGray,
                  },
                ]}>
                <View style={styles.statusInfo}>
                  <Text12
                    text={
                      item?.is_online ? 'Vehicle Online' : 'Vehicle Offline'
                    }
                    color={
                      item?.is_online ? colors.green : colors.placeholderColor
                    }
                  />
                  <Switch
                    // height={100}
                    // width={200}
                    // style={{height:100,width:100}}

                    trackColor={{false: '#767577', true: colors.green}}
                    thumbColor={item?.is_online ? colors.lightGreen : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => changeVehicleStatus(item, index)}
                    value={item?.is_online}
                  />
                </View>
              </View>

              <View style={styles.vehicleInfo}>
                <View style={styles.vehicleImageContainer}>
                  <View
                    style={[
                      styles.vehicleImage,
                      {overflow: 'hidden', borderRadius: 100},
                    ]}>
                    <Image
                      resizeMode="stretch"
                      style={CommonStyle.img}
                      source={
                        item?.vehiclePhoto
                          ? {uri: item?.vehiclePhoto}
                          : icon.car1
                      }
                    />
                  </View>
                </View>

                <View style={styles.box}>
                  <View>
                    <Text14 mt={1} color={colors.theme} text={item?.rcNumber} />
                    <Text12
                      mt={1}
                      color={colors.placeholderColor}
                      text={'Taxi'}
                    />
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('EditVehicle', {item: item})
                      }
                      style={styles.edit}>
                      <Image style={CommonStyle.img} source={images.edit1} />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setDeleteModal(true);
                        setInitialState(pre => ({
                          ...pre,
                          vechicleId: item?._id,
                        }));
                      }}
                      style={styles.delete}>
                      <Image style={CommonStyle.img} source={images.trash} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.VechicleLocation}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text12 color={colors.blue} text={'Vehicle Location'} />
                  <Image
                    style={styles.location}
                    resizeMode="contain"
                    source={icon.aman}
                  />
                </View>
              </View>

              {!item?.is_assign && (
                <View style={styles.driverLocation}>
                  <Image
                    style={styles.ddd}
                    resizeMode="contain"
                    source={icon.diverIcon}
                  />
                  <Text12
                    fontFamily={fonts.bold}
                    color={colors.theme}
                    text={'Driver not assigned yet'}
                  />

                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('VechicleInformation', {
                        flow: '1',
                        item: item,
                      })
                    }
                    style={styles.assignbth}>
                    <Text12
                      mt={1}
                      color={colors.white}
                      text={'Assign Driver'}
                    />
                  </TouchableOpacity>
                </View>
              )}

              {item?.is_assign && (
                <View
                  style={{
                    paddingHorizontal: moderateScale(10),
                    backgroundColor: colors.white,
                    paddingVertical: moderateScale(10),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        borderWidth: 1,
                        height: moderateScale(30),
                        width: moderateScale(30),
                        borderRadius: 100,
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        style={{height: '90%', width: '90%'}}
                        resizeMode="contain"
                        source={images.userIcon}
                      />
                    </View>
                    <View style={{marginLeft: 10}}>
                      <Text12
                        fontFamily={fonts.regular}
                        color={colors.secondry}
                        text={'Assigned Driver'}
                      />
                      <Text12
                        fontFamily={fonts.bold}
                        color={colors.theme}
                        text={`${item?.driverId?.firstName} ${item?.driverId?.lastName}`}
                      />
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('VechicleInformation', {item: item})
                    }
                    style={{
                      backgroundColor: colors.theme,
                      paddingVertical: moderateScale(7),
                      paddingHorizontal: scale(10),
                      borderRadius: 8,
                    }}>
                    <Text12 mt={1} color={colors.white} text={'View Details'} />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        }}
      />

      {/* <View style={styles.vehicleContainer}>
        <View style={styles.vehicleStatus}>
          <View style={styles.statusInfo}>
            <Text12 text={'Vehicle Online'} color={colors.green} />
            <Switch
            // height={100}
            // width={200}
            // style={{height:100,width:100}}
            
              trackColor={{false: '#767577', true: colors.green}}
              thumbColor={isEnabled ? colors.lightGreen : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <View style={styles.vehicleInfo}>
          <View style={styles.vehicleImageContainer}>
            <View style={styles.vehicleImage}>
              <Image
                resizeMode="contain"
                style={CommonStyle.img}
                source={icon.car2}
              />
            </View>
          </View>

          <View
            style={{
              marginLeft: moderateScale(5),
              flexDirection: 'row',
              width: '80%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text14 mt={1} color={colors.theme} text={'UP-78-DY-8451'} />
              <Text12 mt={1} color={colors.placeholderColor} text={'Taxi'} />
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  height: moderateScale(20),
                  width: moderateScale(20),
                  marginRight: moderateScale(10),
                }}>
                <Image style={CommonStyle.img} source={images.edit1} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{height: moderateScale(20), width: moderateScale(20)}}>
                <Image style={CommonStyle.img} source={images.trash} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.VechicleLocation}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text12 color={colors.blue} text={'Vehicle Location'} />
            <Image
              style={{height: moderateScale(30), width: moderateScale(30)}}
              resizeMode="contain"
              source={icon.aman}
            />
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: moderateScale(10),
            backgroundColor: colors.yellow,
            paddingVertical: moderateScale(7),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{height: moderateScale(30), width: moderateScale(30)}}
            resizeMode="contain"
            source={icon.diverIcon}
          />
          <Text12
            fontFamily={fonts.bold}
            color={colors.theme}
            text={'Driver not assigned yet'}
          />

          <TouchableOpacity
          onPress={()=>navigation.navigate('VechicleInformation',{flow:'1'})}
          style={{
              backgroundColor: colors.theme,
              paddingVertical: moderateScale(7),
              paddingHorizontal: scale(20),
              borderRadius: 8,
            }}>
            <Text12 mt={1} color={colors.white} text={'Assign Driver'} />
          </TouchableOpacity>
        </View>
      </View> */}

      {/* second card */}

      {/* <View style={[styles.vehicleContainer, {marginTop: moderateScale(5)}]}>
        <View style={[styles.vehicleStatus, {backgroundColor: '#f0f0f3'}]}>
          <View style={styles.statusInfo}>
            <Text12 text={'Vehicle Offline'} color={colors.secondry} />
            <Switch
              trackColor={{false: '#767577', true: colors.green}}
              thumbColor={isEnabled ? colors.lightGreen : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <View style={styles.vehicleInfo}>
          <View style={styles.vehicleImageContainer}>
            <View style={styles.vehicleImage}>
              <Image
                resizeMode="contain"
                style={CommonStyle.img}
                source={icon.car2}
              />
            </View>
          </View>

          <View
            style={{
              marginLeft: moderateScale(5),
              flexDirection: 'row',
              width: '80%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text14 mt={1} color={colors.theme} text={'UP-78-DY-8451'} />
              <Text12 mt={1} color={colors.placeholderColor} text={'Taxi'} />
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  height: moderateScale(20),
                  width: moderateScale(20),
                  marginRight: moderateScale(10),
                }}>
                <Image style={CommonStyle.img} source={images.edit1} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{height: moderateScale(20), width: moderateScale(20)}}>
                <Image style={CommonStyle.img} source={images.trash} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.VechicleLocation}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text12 color={colors.blue} text={'Vehicle Location'} />
            <Image
              style={{height: moderateScale(30), width: moderateScale(30)}}
              resizeMode="contain"
              source={icon.aman}
            />
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: moderateScale(10),
            backgroundColor: colors.white,
            paddingVertical: moderateScale(10),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{height: moderateScale(30), width: moderateScale(30)}}
              resizeMode="contain"
              source={icon.profile}
            />
            <View style={{marginLeft:10}}>
            <Text12
              fontFamily={fonts.regular}
              color={colors.secondry}
              text={'Assigned Driver'}
            />
            <Text12
              fontFamily={fonts.bold}
              color={colors.theme}
              text={'Akshit Kumar'}
            />
            </View>
          </View>

          <TouchableOpacity
          onPress={()=>navigation.navigate('VechicleInformation')}
            style={{
              backgroundColor: colors.theme,
              paddingVertical: moderateScale(7),
              paddingHorizontal: scale(20),
              borderRadius: 8,
            }}>
            <Text12 mt={1} color={colors.white} text={'View Details'} />
          </TouchableOpacity>
        </View>
      </View> */}

      <DeleteModal
        type={'Vechicle'}
        deleteHandler={deleteVehicleHadler}
        setDeleteModal={setDeleteModal}
        deleteModal={deleteModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  ddd: {
    height: moderateScale(30),
    width: moderateScale(30),
  },
  assignbth: {
    backgroundColor: colors.theme,
    paddingVertical: moderateScale(7),
    paddingHorizontal: scale(20),
    borderRadius: 8,
  },
  delete: {
    height: moderateScale(20),
    width: moderateScale(20),
  },
  driverLocation: {
    paddingHorizontal: moderateScale(10),
    backgroundColor: colors.yellow,
    paddingVertical: moderateScale(7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  location: {
    height: moderateScale(30),
    width: moderateScale(30),
  },
  edit: {
    height: moderateScale(20),
    width: moderateScale(20),
    marginRight: moderateScale(10),
  },
  box: {
    marginLeft: moderateScale(5),
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    backgroundColor: colors.theme,
    paddingTop:
      Platform.OS === 'ios' &&
      (iphone8 ? moderateScale(10) : moderateScale(40)),
  },
  header: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: moderateVerticalScale(26),
    backgroundColor: colors.theme,
    paddingHorizontal: scale(10),
    justifyContent: 'center',
  },
  vehicleContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(20),
    backgroundColor: colors.white,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: colors.borderC,
  },
  vehicleStatus: {
    padding: moderateScale(10),
  },
  statusInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusIcon: {
    height: moderateScale(20),
    width: scale(40),
  },
  vehicleInfo: {
    padding: moderateScale(10),
    flexDirection: 'row',
  },
  vehicleImageContainer: {
    width: moderateScale(46),
    height: moderateScale(46),
    borderWidth: 1,
    borderRadius: moderateScale(23),
    borderColor: colors.secondry,
  },
  vehicleImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  VechicleLocation: {
    backgroundColor: '#ecf2ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(8),
  },
});

export default Vechicle;
