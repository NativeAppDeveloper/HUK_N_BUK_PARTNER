import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {commonPadding, height, iphone8, width} from '../../../utils/Helper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text18 from '../../../component/customText/Text18';
import {icon, images} from '../../../utils/Image';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import CustomMapView from '../../../component/CustomMapView';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import Button from '../../../component/customButton/Button';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RideCancelModal from '../../../component/modal/RideCancelModal';
import {PlusIcon, StarIcon} from 'react-native-heroicons/solid';
import {AirbnbRating, Rating} from 'react-native-ratings';
import CancelModal from '../../../component/modal/CancelModal';
import Text10 from '../../../component/customText/Text10';
import Dash from 'react-native-dash-2';

const InterCityRideDetail = ({route}) => {
  const navigation = useNavigation();
  const [outStationIndex, setOutStationIndex] = useState(0);
  const sheetRef = useRef(null);
  const [indexx, setIndex] = useState(0);
  const [cancel, setCancelRide] = useState(false);
  const [cancelStatus, setCancelStatus] = useState(false);
  const rideStatus = route?.params?.rideStatus;
  console.log(rideStatus, '=-==-=ride satus');

  const rideColor = () => {
    switch (rideStatus) {
      case 'Ongoing':
        return colors.orange;
      case 'Upcoming':
        return colors.theme;
      case 'Completed':
        return colors.green;
      case 'Cancelled':
        return colors.red;
    }
  };

  const handleSheetChanges = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
    setIndex(index);
    // updateState({ ...iState, open: false, i: index });
  }, []);
  //   const { toggle, open, i } = iState;
  const snapPoints = useMemo(() => ['55%', '65%', '70%'], []);

  return (
    <View style={{flex: 1}}>
      {
        //#region  map
        <CustomMapView Marker={true} mapStyle={styles.mapStyle} />
        //#endregion
      }
      {Platform.OS == 'android' && <SafeAreaView />}
      <View
        style={{
          backgroundColor: colors.white,
          ...Platform.select({
            ios: {
              paddingTop: iphone8 ? moderateScale(10) : moderateScale(40),
            },
          }),
        }}>
        <StatusBar backgroundColor={colors.theme} barStyle={'light-content'} />
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              left: moderateScale(15),
              zIndex: 999,
              top: 25,
            }}
            onPress={() => navigation.goBack()}>
            <View
              style={{
                height: moderateVerticalScale(30),
                width: moderateVerticalScale(30),
              }}>
              <Image
                style={[CommonStyle.img, {tintColor: colors.theme}]}
                source={icon.backBtn}
              />
            </View>
          </TouchableOpacity>

          <View style={{width: '100%', alignItems: 'center'}}>
            <Text18 color={colors.theme} text={'Ride Details'} />
            <Text
              style={{
                fontSize: 10,
                marginTop: 15,
                fontFamily: fonts.regular,
                color: colors.secondry,
              }}>
              Tue, 23 Feb 2020 12:00PM • ID: 2130812309
            </Text>
          </View>
        </View>

        {
          //#region  ride status
          <View
            style={{
              paddingVertical: moderateScale(7),
              backgroundColor: rideColor(),
              alignItems: 'center',
            }}>
            <Text12 text={rideStatus} color={colors.white} />
          </View>
          //#endregion
        }
      </View>

      <GestureHandlerRootView
        style={{
          flex: 1,
        }}>
        <BottomSheet
          index={indexx}
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enableContentPanningGesture={true}>
          <View
            style={{
              backgroundColor: colors.white,
              // position: 'absolute',
              width: width,
              bottom: 0,
              height: moderateScale(370),
            }}>
            <BottomSheetScrollView>
              <View
                style={{
                  paddingHorizontal: scale(15),
                  marginTop: moderateScale(0),
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    height: moderateScale(40),
                    width: moderateScale(40),
                    borderRadius: moderateScale(20),
                    borderWidth: 1,
                    overflow: 'hidden',
                  }}>
                  <Image
                    resizeMode="contain"
                    style={CommonStyle.img}
                    source={icon.car1}
                  />
                </View>

                <View style={{marginLeft: moderateScale(10)}}>
                  <Text14
                    color={colors.theme}
                    mt={1}
                    fontFamily={fonts.bold}
                    text={'Akshit Kumar'}
                  />
                  <Text12
                    fontFamily={fonts.regular}
                    color={colors.gray}
                    text={'UP16-BV-0000 • Sedan'}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    right: moderateScale(10),
                  }}>
                  <StarIcon color={colors.yellow} size={moderateScale(10)} />
                  <Text12 color={colors.secondry} text={' 2.5'} />
                </View>
              </View>

              <View
                disabled
                // onPress={() => navigate('RdieDetails')}
                style={styles.itemContainer}>
                <View style={styles.bookingIdContainer}>
                  <Text style={styles.bookingIdText}>{`Tue, 23 Feb 2020`}</Text>
                </View>

                {
                  //#region
                  <View
                    style={{
                      paddingHorizontal: scale(15),
                      marginTop: moderateScale(10),
                    }}>
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            height: moderateScale(23),
                            width: moderateScale(23),
                          }}>
                          <Image
                            source={icon.currentLocation}
                            style={CommonStyle.img}
                          />
                        </View>

                        <View style={{marginLeft: moderateScale(10)}}>
                          <Text14
                            color={colors.theme}
                            mt={1}
                            text={'333B, Anchorv  ale Link'}
                          />
                          <Text12
                            fontFamily={fonts.regular}
                            color={colors.gray}
                            text={'Pick up 12:05PM, 23 Feb'}
                          />
                        </View>
                      </View>
                    </View>

                    <View>
                      <Dash
                        style={{
                          width: 1,
                          height: 60,
                          flexDirection: 'column',
                          left: moderateScale(10),
                        }}
                      />

                      <View
                        style={{
                          marginHorizontal: scale(10),
                          // alignItems:'center',
                          justifyContent: 'center',
                          // top: moderateVerticalScale(5),
                          paddingLeft: 20,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            position: 'absolute',
                            bottom: moderateScale(15),
                            paddingHorizontal: moderateScale(15),
                          }}>
                          <Image
                            style={{height: 17, width: 17}}
                            source={icon.Time}
                          />

                          <Text
                            style={{
                              fontSize: 10,
                              fontFamily: fonts.regular,
                              color: colors.theme,
                            }}>
                            {' '}
                            4h50m
                          </Text>
                          <Image
                            style={{
                              height: 17,
                              width: 17,
                              marginHorizontal: scale(10),
                            }}
                            source={icon.distance}
                          />
                          <Text style={{fontSize: 10, color: '#f7954a'}}>
                            456 km
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 8}}>
                      <View
                        style={{
                          height: moderateScale(23),
                          width: moderateScale(23),
                        }}>
                        <Image source={icon.location} style={CommonStyle.img} />
                      </View>

                      <View style={{marginLeft: moderateScale(10)}}>
                        <Text14
                          color={colors.theme}
                          mt={1}
                          text={'East Cost Hill'}
                        />
                        <Text12
                          fontFamily={fonts.regular}
                          color={colors.gray}
                          text={'Drop Off 12:05PM, 23 Feb'}
                        />
                      </View>
                    </View>
                  </View>
                  //#endregion
                }
              </View>

              {
                //#region payment method

                <View
                  style={{
                    paddingHorizontal: commonPadding,
                    paddingVertical: moderateScale(15),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    borderColor: colors.borderC,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    {/* <Text style={{fontSize: 10}}>Payment Method</Text> */}
                    <Image
                      style={{
                        height: moderateScale(30),
                        width: moderateScale(30),
                      }}
                      source={icon.profile}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: moderateScale(10),
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontFamily: fonts.semibold,
                            color: colors.theme,
                          }}>
                          Gregory
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: 2,
                            marginTop: 4,
                          }}>
                          <StarIcon
                            size={moderateScale(10)}
                            color={colors.yellow}
                          />
                          <Text
                            style={{
                              fontSize: 10,
                              fontFamily: fonts.semibold,
                              color: colors.secondry,
                            }}>
                            {' '}
                            4.5
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View>
                    <Text12
                      text={'₹ 150.00'}
                      color={colors.theme}
                      fontFamily={fonts.bold}
                    />
                    <Text
                      style={{
                        fontSize: 10,
                        color: colors.placeholderColor,
                        fontFamily: fonts.regular,
                      }}>
                      <Image source={icon.master} /> 8686
                    </Text>
                  </View>
                </View>
                //#endregion
              }

              {
                rideStatus == 'Completed' && (
                  //#region rate a driver
                  <View
                    style={{
                      paddingHorizontal: commonPadding,
                      paddingVertical: moderateScale(15),
                      borderBottomWidth: 1,
                      borderColor: colors.borderC,
                    }}>
                    <Text14 text={'Customer Rated'} color={colors.theme} />

                    <AirbnbRating
                      size={moderateScale(18)}
                      count={5}
                      reviews={[]}
                      ratingContainerStyle={{
                        alignItems: 'flex-start',
                        //   borderWidth:1,
                        justifyContent: 'space-around',
                        height: moderateScale(20),
                        marginVertical: moderateScale(15),
                      }}
                      defaultRating={5}
                      starContainerStyle={{
                        position: 'absolute',
                        height: moderateScale(20),
                      }}
                      unSelectedColor={colors.borderC}
                    />

                    <View style={{borderRadius: 8}}>
                      <TextInput
                        editable={false}
                        style={{
                          // borderWidth: 1,
                          textAlignVertical: 'top',
                          paddingHorizontal: scale(10),
                          fontFamily: fonts.regular,
                          // borderWidth:1,
                          borderColor: colors.borderC,
                          borderRadius: 8,
                          height: moderateScale(80),
                          color: colors.secondry,
                        }}
                        multiline
                        placeholder="Add Comments"
                        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      />
                    </View>
                  </View>
                )
                //#endregion
              }

              {
                rideStatus == 'Cancelled' && (
                  //#region  for cancelation
                  <View
                    style={{
                      paddingHorizontal: commonPadding,
                      paddingVertical: moderateScale(10),
                      borderBottomWidth: 1,
                      borderColor: colors.borderC,
                    }}>
                    <Text12
                      color={colors.theme}
                      text={'Driver Cancelled This Ride'}
                    />

                    <Text10 mt={10} text={'Reason'} color={colors.secondry} />
                    <Text12
                      color={colors.theme}
                      text={'Rider taking too much time'}
                    />
                  </View>
                )
                //#endregion
              }

              {
                //#region estimated price
                <View
                  style={{
                    paddingHorizontal: commonPadding,
                    marginTop: moderateScale(10),
                  }}>
                  <Text14
                    text={
                      rideStatus !== 'Completed'
                        ? 'Price Breakup'
                        : 'Estimated Price'
                    }
                    color={colors.theme}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: moderateScale(10),
                    }}>
                    <Text12
                      color={colors.secondry}
                      text={'Trip Charges'}
                      fontFamily={fonts.regular}
                    />
                    <Text12
                      color={colors.secondry}
                      text={'15'}
                      fontFamily={fonts.regular}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: moderateScale(10),
                    }}>
                    <Text12
                      color={colors.secondry}
                      text={'GST'}
                      fontFamily={fonts.regular}
                    />
                    <Text12
                      color={colors.secondry}
                      text={'15'}
                      fontFamily={fonts.regular}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: moderateScale(10),
                    }}>
                    <Text12
                      color={colors.theme}
                      text={'Total Fare'}
                      fontFamily={fonts.medium}
                    />
                    <Text12
                      color={colors.theme}
                      text={'150'}
                      fontFamily={fonts.regular}
                    />
                  </View>
                </View>
                //#endregion
              }

              {false && rideStatus !== 'Completed' && (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: commonPadding,
                    marginTop: moderateScale(20),
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#d9d9d9',
                      width: '48%',
                      alignItems: 'center',
                      height: moderateScale(40),
                      justifyContent: 'center',
                      borderRadius: 8,
                    }}>
                    <Text14
                      mt={1}
                      color={colors.theme}
                      text={'Download Receipt'}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.theme,
                      width: '48%',
                      alignItems: 'center',
                      height: moderateScale(40),
                      justifyContent: 'center',
                      borderRadius: 8,
                    }}>
                    <Text14 mt={1} color={colors.white} text={'Need Help'} />
                  </TouchableOpacity>
                </View>
              )}

              {false && rideStatus == 'Cancelled' && (
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.theme,
                    width: '90%',
                    alignItems: 'center',
                    height: moderateScale(45),
                    justifyContent: 'center',
                    borderRadius: 8,
                    alignSelf: 'center',
                  }}>
                  <Text14 mt={1} color={colors.white} text={'Need Help'} />
                </TouchableOpacity>
              )}

              {rideStatus == 'Completed' && (
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.white,
                    width: '90%',
                    alignItems: 'center',
                    height: moderateScale(45),
                    justifyContent: 'center',
                    borderRadius: 8,
                    alignSelf: 'center',
                  }}>
                  <Text14
                    mt={1}
                    color={colors.theme}
                    text={'Download Receipt'}
                  />
                </TouchableOpacity>
              )}
            </BottomSheetScrollView>
          </View>
        </BottomSheet>
      </GestureHandlerRootView>

      <RideCancelModal cancel={cancel} setCancelRide={setCancelRide} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: moderateVerticalScale(26),
    backgroundColor: colors.white,
    paddingHorizontal: scale(10),
    justifyContent: 'center',
  },
  mapStyle: {
    flex: 2,
    position: 'absolute',
    top: moderateScale(16),
    left: 0,
    right: 0,
    bottom: '0%',
    zIndex: -1,
    height: '55%',
  },
  itemContainer: {
    marginTop: moderateScale(20),
    paddingVertical: moderateScale(10),
    borderColor: colors.placeholderColor,
    backgroundColor: colors.white,
    borderWidth: 0.5,
  },
  bookingIdContainer: {
    paddingBottom: moderateScale(10),
    borderColor: colors.placeholderColor,
    paddingHorizontal: scale(15),
  },
  bookingIdText: {
    fontSize: 10,
    color: colors.theme,
    fontFamily: fonts.regular,
  },
});

export default InterCityRideDetail;
