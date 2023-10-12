import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import BackHandler from '../../../component/BackHandler';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import {moderateScale, scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {UserIcon} from 'react-native-heroicons/solid';
import {commonPadding, sucessTost} from '../../../utils/Helper';
import Text16 from '../../../component/customText/Text16';
import Text12 from '../../../component/customText/Text12';
import {icon, images} from '../../../utils/Image';
import Text14 from '../../../component/customText/Text14';
import moment from 'moment';
import {changeVehicleStatusService, deleteVehicleServices} from '../../../services/Services';
import FastImage from 'react-native-fast-image';
import DeleteModal from '../../../component/modal/DeleteModal';

const VechicleInformation = ({route}) => {
  const navigation = useNavigation();
  const paramData = route?.params?.flow;
  const item = route?.params?.item;
  const [deleteModal, setDeleteModal] = useState(false);

  const [vechicleStatus, setVechicleStatus] = useState({
    main: item?.is_online,
    intercity: false,
    outsation: false,
    rental: false,
  });

  console.log(item, 'hehehehe');
  const [toggle, setToggle] = useState(false);
  const vechicleDetails = [
    {
      doc: 'RC Details',
      docDesc: 'Registration Certificate Number',
      docNumber: item?.rcNumber,
      expiry: moment(item?.rcExpireDate).format('DD/MM/YYYY'),
      docImg: item?.rcCertificate,
    },
    {
      doc: 'Insurance Details',
      docDesc: 'Insurance Number',
      docNumber: item?.insuranceNumber,
      expiry: moment(item?.insuranceExpireDate).format('DD/MM/YYYY'),
      docImg: item?.insuranceCertificate,
    },
    {
      doc: 'Permit Details',
      docDesc: 'Permit Number',
      docNumber: item?.permitNumber,
      expiry: moment(item?.permitExpireDate).format('DD/MM/YYYY'),
      docImg: item?.permitCertificate,
    },
    {
      doc: 'Pollution Details',
      docDesc: 'Pollution Number',
      docNumber: item?.pollutionNumber,
      expiry: moment(item?.pollutionExpireDate).format('DD/MM/YYYY'),
      docImg: item?.permitCertificate,
    },
  ];

  const toggleSwitch = index => {
    // const newData = [...notifactionData];
    // newData[index].enabled = !newData[index].enabled;
    // setNotifactionData(newData);
  };

  const changeVehicleStatus = async (item, ind) => {
    let objToSend = {
      vehicleId: item?._id,
      status: !vechicleStatus.is_online,
    };
    try {
      let response = await changeVehicleStatusService(objToSend);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };


  const deleteVehicleHadler = async () => {
    let payLoad = {
      vehicleId:item?._id,
    };
    console.log(payLoad);
    try {
      let response = await deleteVehicleServices(payLoad);
      console.log(response.data);
      sucessTost('Vechicle Delete Sucessfully');
      // vechicleListServices();
      navigation.goBack()
      setDeleteModal(false);
    } catch (error) {
      console.log('EROOR---->', error?.response?.data ?? error?.message);
    }
  };

  console.log(paramData, 'paddingBottom');
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('GenrateQr')}
        style={{
          height: 25,
          width: 25,
          position: 'absolute',
          top: moderateScale(65),
          zIndex: 999,
          alignSelf: 'flex-end',
          right: 20,
        }}>
        <Image
          style={CommonStyle.img}
          source={require('../../../assets/genrateQr.png')}
        />
      </TouchableOpacity>
      <BackHandler name={'Vehicle Details'} />
      <ScrollView contentContainerStyle={{paddingBottom: moderateScale(80)}}>
        <View>
          <View
            style={{
              paddingHorizontal: commonPadding,
              backgroundColor: colors.white,
              paddingVertical: moderateScale(20),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <UserIcon color={colors.secondry} />
              <Text16
                ml={6}
                fontFamily={fonts.semibold}
                text={'Owner Details'}
              />
            </View>

            <View style={{marginTop: moderateScale(15)}}>
              <Text12
                text={'Owner Name'}
                color={colors.secondry}
                fontFamily={fonts.regular}
              />

              <Text16
                text={`${item?.firstName} ${item?.lastName}`}
                color={colors.theme}
                fontFamily={fonts.regular}
                textTransform={'capitalize'}
              />
            </View>
          </View>

          <View>
            {vechicleDetails.map((ele, ind) => {
              return (
                <TouchableOpacity>
                  <View
                    style={{
                      paddingHorizontal: commonPadding,
                      backgroundColor: colors.white,
                      paddingVertical: moderateScale(20),
                      marginTop: moderateScale(10),
                    }}>
                    <View
                      style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                      <Image
                        resizeMode="contain"
                        style={{
                          height: moderateScale(30),
                          width: moderateScale(30),
                        }}
                        source={require('../../../assets/icon/documenttext.png')}
                      />
                      {/* <UserIcon color={colors.secondry} /> */}
                      <Text16
                        ml={6}
                        color={colors.theme}
                        fontFamily={fonts.semibold}
                        text={ele.doc}
                      />
                    </View>

                    <View style={{marginTop: moderateScale(15)}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View>
                          <Text12
                            text={ele.docDesc}
                            color={colors.secondry}
                            fontFamily={fonts.regular}
                          />

                          <Text16
                            text={ele.docNumber}
                            color={colors.theme}
                            fontFamily={fonts.regular}
                          />
                        </View>

                        <View>
                          <Text12
                            textAlign={'right'}
                            text={'Expiry'}
                            color={colors.secondry}
                            fontFamily={fonts.regular}
                          />

                          <Text16
                            text={ele.expiry}
                            color={colors.theme}
                            fontFamily={fonts.regular}
                          />
                        </View>
                      </View>

                      <Text12
                        mt={moderateScale(15)}
                        text={'Documnet'}
                        color={colors.secondry}
                        fontFamily={fonts.regular}
                      />
                      <FastImage
                        source={{
                          uri: ele.docImg,
                          priority: FastImage.priority.high,
                        }}
                        style={{
                          height: moderateScale(40),
                          width: moderateScale(40),
                          marginTop: moderateScale(10),
                        }}
                      />
                      {/* <Image
                        resizeMode="contain"
                        style={{
                          height: moderateScale(40),
                          width: moderateScale(40),
                          marginTop: moderateScale(10),
                        }}
                        source={{uri: ele.docImg}}
                      /> */}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
            {/* driver detaisl */}
            {!paramData && (
              <View
                style={{
                  paddingHorizontal: moderateScale(10),
                  backgroundColor: colors.white,
                  paddingVertical: moderateScale(20),
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: moderateScale(10),
                }}>
                {item?.driverId && (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{borderWidth:1,borderRadius:100,overflow:'hidden'}}>
                    <Image
                      style={{
                        height: moderateScale(30),
                        width: moderateScale(30),
                      }}
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
                )}
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('VechicleInformation')}
                    style={{
                      backgroundColor: colors.theme,
                      paddingVertical: moderateScale(7),
                      paddingHorizontal: scale(20),
                      borderRadius: 8,
                      alignItems: 'center',
                    }}>
                    <Text12 mt={1} color={colors.white} text={'View Details'} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('VechicleInformation')}
                    style={{
                      //   backgroundColor: colors.theme,
                      paddingVertical: moderateScale(7),
                      paddingHorizontal: scale(20),
                      borderRadius: 8,
                      marginTop: moderateScale(10),
                    }}>
                    <Text12
                      mt={1}
                      color={colors.theme}
                      text={'Remove Driver'}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* assign driver */}

            {paramData && (
              <View
                style={{
                  paddingHorizontal: moderateScale(10),
                  backgroundColor: colors.yellow,
                  paddingVertical: moderateScale(7),
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: moderateScale(10),
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
                  onPress={() =>
                    navigation.navigate('DriverList', {
                      flow: 'assign',
                      id: item._id,
                    })
                  }
                  style={{
                    backgroundColor: colors.theme,
                    paddingVertical: moderateScale(7),
                    paddingHorizontal: scale(20),
                    borderRadius: 8,
                  }}>
                  <Text12 mt={1} color={colors.white} text={'Assign Driver'} />
                </TouchableOpacity>
              </View>
            )}

            {/* vechile status */}
            <View
              style={{
                paddingHorizontal: commonPadding,
                backgroundColor: colors.white,
                paddingVertical: moderateScale(20),
                marginTop: moderateScale(10),
              }}>
              <View style={{flexDirection: 'column'}}>
                {/* <UserIcon color={colors.secondry} /> */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <Text16
                    color={colors.theme}
                    ml={6}
                    fontFamily={fonts.semibold}
                    text={'Vehicle Status'}
                  />

                  <Switch
                    trackColor={{false: '#767577', true: colors.green}}
                    thumbColor={
                      vechicleStatus.main ? colors.placeholderColor : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() =>
                      // setToggle(!toggle)
                      setVechicleStatus(pre => ({
                        ...pre,
                        main: !pre?.main,
                        // intercity: !pre.outsation,
                      }))
                    }
                    value={vechicleStatus.main}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: moderateScale(10),
                  }}>
                  <Text12
                    color={colors.secondry}
                    // ml={10}
                    fontFamily={fonts.regular}
                    text={'     Intercity'}
                  />

                  <Switch
                    trackColor={{false: '#767577', true: colors.green}}
                    thumbColor={
                      vechicleStatus?.intercity
                        ? colors.placeholderColor
                        : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() =>
                      setVechicleStatus(pre => ({
                        ...pre,
                        intercity: !pre.intercity,
                      }))
                    }
                    value={vechicleStatus.intercity}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: moderateScale(10),
                  }}>
                  <Text12
                    color={colors.secondry}
                    // ml={10}
                    fontFamily={fonts.regular}
                    text={'     Outstation'}
                  />

                  <Switch
                    trackColor={{false: '#767577', true: colors.green}}
                    thumbColor={
                      vechicleStatus?.outsation
                        ? colors.placeholderColor
                        : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() =>
                      setVechicleStatus(pre => ({
                        ...pre,
                        outsation: !pre.outsation,
                      }))
                    }
                    value={vechicleStatus.outsation}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: moderateScale(10),
                  }}>
                  <Text12
                    color={colors.secondry}
                    // ml={10}
                    fontFamily={fonts.regular}
                    text={'     Rental'}
                  />

                  <Switch
                    trackColor={{false: '#767577', true: colors.green}}
                    thumbColor={
                      vechicleStatus?.rental
                        ? colors.placeholderColor
                        : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() =>
                      setVechicleStatus(pre => ({
                        ...pre,
                        rental: !pre.rental,
                      }))
                    }
                    value={vechicleStatus.rental}
                  />

                  {/* <Switch
                    trackColor={{false: '#767577', true: colors.green}}
                    thumbColor={toggle ? colors.placeholderColor : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setToggle(!toggle)}
                    value={toggle}
                  /> */}
                </View>

                {/* bottom detaisl */}
              </View>
            </View>

            <TouchableOpacity>
              <View
                style={{
                  paddingHorizontal: commonPadding,
                  backgroundColor: colors.white,
                  paddingVertical: moderateScale(20),
                  marginTop: moderateScale(10),
                }}>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  {/* <UserIcon color={colors.secondry} /> */}
                  <Text16
                    // ml={6}
                    color={colors.theme}
                    fontFamily={fonts.semibold}
                    text={'Installed Device Details'}
                  />
                </View>

                <View style={{marginTop: moderateScale(15)}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text12
                        text={'Brand'}
                        color={colors.secondry}
                        fontFamily={fonts.regular}
                      />

                      <Text16
                        text={'Samsung'}
                        color={colors.theme}
                        fontFamily={fonts.regular}
                      />
                    </View>

                    <View>
                      <Text12
                        textAlign={'right'}
                        text={'Model'}
                        color={colors.secondry}
                        fontFamily={fonts.regular}
                      />

                      <Text16
                        text={'Tab S'}
                        color={colors.theme}
                        fontFamily={fonts.regular}
                      />
                    </View>
                  </View>

                  <View style={{marginTop: moderateScale(15)}}>
                    <Text12
                      // textAlign={'right'}
                      text={'IMEI'}
                      color={colors.secondry}
                      fontFamily={fonts.regular}
                    />

                    <Text16
                      text={'5465165165165165156'}
                      color={colors.theme}
                      fontFamily={fonts.regular}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* buttons */}
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          marginVertical: moderateScale(20),
        }}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('EditVehicle', {item: item})}
          style={{
            width: '45%',
            backgroundColor: colors.darkGray,
            alignItems: 'center',
            justifyContent: 'center',
            padding: moderateScale(10),
            borderRadius: 10,
          }}>
          <Text14 mt={1} color={colors.theme} text={'Edit'} />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>setDeleteModal(true)}
          style={{
            width: '45%',
            backgroundColor: colors.theme,
            alignItems: 'center',
            justifyContent: 'center',
            padding: moderateScale(10),
            borderRadius: 10,
          }}>
          <Text14 mt={1} color={colors.white} text={'Delete'} />
        </TouchableOpacity>
      </View>

      <DeleteModal
        type={'Vechicle'}
        deleteHandler={deleteVehicleHadler}
        setDeleteModal={setDeleteModal}
        deleteModal={deleteModal}
      />
    </View>
  );
};

export default VechicleInformation;
