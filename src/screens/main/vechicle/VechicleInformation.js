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
import {commonPadding} from '../../../utils/Helper';
import Text16 from '../../../component/customText/Text16';
import Text12 from '../../../component/customText/Text12';
import {icon} from '../../../utils/Image';
import Text14 from '../../../component/customText/Text14';

const VechicleInformation = ({route}) => {
  const navigation = useNavigation();
  const paramData=route?.params?.flow

  console.log(paramData,'hehehehe');
  const [toggle, setToggle] = useState(false);
  const vechicleDetails = [
    {
      doc: 'RC Details',
      docDesc: 'Registration Certificate Number',
      docNumber: '65465165165FSA54',
      expiry: '10/09/2023',
    },
    {
      doc: 'Insurance Details',
      docDesc: 'Insurance Number',
      docNumber: '65465165165FSA54',
      expiry: '10/09/2023',
    },
    {
      doc: 'Permit Details',
      docDesc: 'Permit Number',
      docNumber: '65465165165FSA54',
      expiry: '10/09/2023',
    },
    {
      doc: 'Pollution Details',
      docDesc: 'Pollution Number',
      docNumber: '65465165165FSA54',
      expiry: '10/09/2023',
    },
  ];

  const toggleSwitch = index => {
    // const newData = [...notifactionData];
    // newData[index].enabled = !newData[index].enabled;
    // setNotifactionData(newData);
  };
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
                text={'Nandita Sachdeva'}
                color={colors.theme}
                fontFamily={fonts.regular}
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
                      <Image
                        resizeMode="contain"
                        style={{
                          height: moderateScale(40),
                          width: moderateScale(40),
                          marginTop: moderateScale(10),
                        }}
                        source={{uri:'https://etimg.etb2bimg.com/thumb/92831648.cms?width=400&height=300'}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
            {/* driver detaisl */}
           {!paramData&& <View
              style={{
                paddingHorizontal: moderateScale(10),
                backgroundColor: colors.white,
                paddingVertical: moderateScale(20),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: moderateScale(10),
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: moderateScale(30), width: moderateScale(30)}}
                  resizeMode="contain"
                  source={icon.profile}
                />
                <View style={{marginLeft: 10}}>
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
                  <Text12 mt={1} color={colors.theme} text={'Remove Driver'} />
                </TouchableOpacity>
              </View>
            </View>}

            {/* assign driver */}

            {paramData&&<View
              style={{
                paddingHorizontal: moderateScale(10),
                backgroundColor: colors.yellow,
                paddingVertical: moderateScale(7),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop:moderateScale(10)
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
                  navigation.navigate('DriverList', {flow: 'assign'})
                }
                style={{
                  backgroundColor: colors.theme,
                  paddingVertical: moderateScale(7),
                  paddingHorizontal: scale(20),
                  borderRadius: 8,
                }}>
                <Text12 mt={1} color={colors.white} text={'Assign Driver'} />
              </TouchableOpacity>
            </View>}

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
                    thumbColor={toggle ? colors.placeholderColor : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setToggle(!toggle)}
                    value={toggle}
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
                    thumbColor={toggle ? colors.placeholderColor : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setToggle(!toggle)}
                    value={toggle}
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
                    thumbColor={toggle ? colors.placeholderColor : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setToggle(!toggle)}
                    value={toggle}
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
                    thumbColor={toggle ? colors.placeholderColor : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setToggle(!toggle)}
                    value={toggle}
                  />
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
    </View>
  );
};

export default VechicleInformation;
