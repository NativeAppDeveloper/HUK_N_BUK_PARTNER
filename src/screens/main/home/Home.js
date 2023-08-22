import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';
import Text16 from '../../../component/customText/Text16';
import Text18 from '../../../component/customText/Text18';
import Text24 from '../../../component/customText/Text24';
import Button from '../../../component/customButton/Button';
import CustomMapView from '../../../component/CustomMapView';
import {moderateScale, scale} from 'react-native-size-matters';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import {icon, images} from '../../../utils/Image';
import {width} from '../../../utils/Helper';
import {TextInput} from 'react-native-gesture-handler';
import {MagnifyingGlassIcon, MapPinIcon} from 'react-native-heroicons/solid';
import BottomSheet from '@gorhom/bottom-sheet';
import CustomDropDown from '../../../component/common/CustomDropDown';

export default function Home() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);
  const sheetRef = useRef(null);
  const [indexx, setIndex] = useState(0);
  const [bookRental, setBookRental] = useState(false);
  const [outStation, setOutStation] = useState(false);
  const [outStationIndex, setOutStationIndex] = useState(0);

  useEffect(() => {
    navigation.closeDrawer();
  }, []);

  const handleSheetChanges = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
    setIndex(index);
    // updateState({ ...iState, open: false, i: index });
  }, []);
  //   const { toggle, open, i } = iState;
  const snapPoints = useMemo(() => ['50%', '55%', '70%'], []);
  return (
    <View style={{flex: 1}}>
      {
        //#region header Start
        <View
          style={{
            width: '90%',
            paddingVertical: moderateScale(15),
            alignSelf: 'center',
            marginTop: moderateScale(40),
            backgroundColor: colors.white,
            elevation: 5,
            padding: moderateScale(10),
            borderRadius: moderateScale(6),
            zIndex: 999,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{height: moderateScale(17), width: moderateScale(17)}}>
              <Image style={CommonStyle.img} source={icon.Vector} />
            </TouchableOpacity>
            <View
              style={{
                height: moderateScale(8),
                width: moderateScale(8),
                marginLeft: scale(10),
              }}>
              <Image style={CommonStyle.img} source={icon.Ellipse} />
            </View>
            <View style={{marginLeft: moderateScale(10)}}>
              <Text14
                color={colors.placeholderColor}
                lineHeight={0}
                mt={moderateScale(1)}
                text={'Your Current Location'}
              />
            </View>
          </View>

          <View
            style={{
              height: moderateScale(17),
              width: moderateScale(17),
              position: 'absolute',
              right: 15,
              top: moderateScale(17),
            }}>
            <Image style={CommonStyle.img} source={icon.current} />
          </View>
        </View>
        //#endregion
      }
      <CustomMapView Marker={true} mapStyle={styles.mapStyle} />
      <BottomSheet
        index={indexx}
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableContentPanningGesture={true}>
        {
          //#region Bottom View
          <View style={styles.bottomContainer}>
            <View style={styles.carContainer}>
              <TouchableOpacity
                onPress={() => setActiveTab(0)}
                style={[
                  {
                    borderBottomWidth: activeTab == 0 ? 2 : 0,
                    width: '33%',
                    alignItems: 'center',
                  },
                ]}>
                <Image
                  style={styles.imgContainer}
                  resizeMode="contain"
                  source={images.intercity}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActiveTab(1)}
                style={[
                  {
                    borderBottomWidth: activeTab == 1 ? 2 : 0,
                    width: '33%',
                    alignItems: 'center',
                  },
                ]}>
                <Image
                  style={styles.imgContainer}
                  resizeMode="contain"
                  source={images.rentel}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActiveTab(2)}
                style={[
                  {
                    borderBottomWidth: activeTab == 2 ? 2 : 0,
                    width: '33%',
                    alignItems: 'center',
                  },
                ]}>
                <Image
                  style={styles.imgContainer}
                  resizeMode="contain"
                  source={images.outStation}
                />
              </TouchableOpacity>
            </View>

            {
              activeTab == 0 && (
                //#region destion View

                <View style={styles.destination}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Location', {name: 'Destination'})
                    }
                    style={styles.searchContainer}>
                    <MagnifyingGlassIcon color={colors.placeholderColor} />
                    <TextInput
                      style={{paddingVertical: moderateScale(5)}}
                      placeholder="Where are you going ?"
                    />
                  </TouchableOpacity>
                  {[1, 1].map((data, ind) => {
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.navigate('BookRide')}
                        key={ind}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingHorizontal: scale(15),
                          marginTop: moderateScale(10),
                          borderBottomWidth: ind == 0 ? 0.5 : 0,
                          borderColor: colors.gray,
                          paddingBottom: moderateScale(10),
                        }}>
                        <MapPinIcon color={colors.yellow} />
                        <View style={{marginLeft: 10}}>
                          <Text14
                            text={'Surat Railway Station'}
                            fontFamily={fonts.semibold}
                          />
                          <Text12
                            text={'Rd road nearXYZ'}
                            color={colors.gray}
                            fontFamily={fonts.regular}
                          />
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              )
              //#endregion
            }

            {
              activeTab == 1 && (
                //#region when rental tab is active
                <>
                  {!bookRental ? (
                    <View style={{paddingHorizontal: scale(10)}}>
                      <Text16
                        mt={moderateScale(15)}
                        text={'How much time do you need ?'}
                        fontFamily={fonts.bold}
                      />

                      {[
                        'Keep a car and driver for upto 24 hours',
                        `Ideal for business meetings, tourist travel and multiple stop trips`,
                        'Book for now to get started',
                      ].map((item, ind) => {
                        return (
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              marginVertical: moderateScale(4),
                            }}>
                            <View
                              style={{
                                height: 10,
                                width: 10,
                                backgroundColor: colors.yellow,
                                marginRight: moderateScale(10),
                              }}></View>
                            <Text14
                              mt={1}
                              fontFamily={fonts.regular}
                              text={item}
                              color={colors.theme}
                            />
                          </View>
                        );
                      })}

                      <Button
                        onPress={() => setBookRental(!bookRental)}
                        mt={moderateScale(10)}
                        width={'100%'}
                        text={'Book Rental'}
                      />
                    </View>
                  ) : (
                    <View style={{paddingHorizontal: scale(10)}}>
                      <Text16
                        mt={moderateScale(15)}
                        text={'How much time do you need ?'}
                        fontFamily={fonts.bold}
                      />
                      <CustomDropDown
                        placeholder={'1 Hour ( 10 km Included )'}
                        width={'100%'}
                      />

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: moderateScale(20),
                        }}>
                        <Text12 color={colors.secondry} text={'Starting at'} />
                        <View style={{flexDirection: 'row'}}>
                          <Text12 color={colors.black} text={'₹199.87/'} />
                          <Text12 color={colors.secondry} text={'hour'} />
                        </View>
                      </View>

                      <Button
                      
                        onPress={() => navigation.navigate('BookRide')}
                        mt={moderateScale(10)}
                        width={'100%'}
                        text={'Choose a Ride'}
                      />
                    </View>
                  )}
                </>
              )
              //#endregion
            }

            {
              //#region when outStatiion tab is active
              activeTab == 2 && (
                //#region when rental tab is active
                <>
                  {!outStation ? (
                    <View
                      style={{
                        paddingHorizontal: scale(10),
                        marginTop: moderateScale(20),
                      }}>
                      {[
                        'For outstations trips all over the india',
                        `You can add multiple cities  `,
                        'Book for now to get started',
                      ].map((item, ind) => {
                        return (
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              marginVertical: moderateScale(4),
                            }}>
                            <View
                              style={{
                                height: 10,
                                width: 10,
                                backgroundColor: colors.yellow,
                                marginRight: moderateScale(10),
                              }}></View>
                            <Text14
                              mt={1}
                              fontFamily={fonts.regular}
                              text={item}
                              color={colors.theme}
                            />
                          </View>
                        );
                      })}

                      <Button
                        onPress={() => setOutStation(!outStation)}
                        mt={moderateScale(10)}
                        width={'100%'}
                        text={'Get Started'}
                      />
                    </View>
                  ) : (
                    <View style={{paddingHorizontal: scale(10)}}>
                      <View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: moderateScale(20),
                          }}>
                          {['One Way', 'Round Trip', 'Multicity'].map(
                            (ele, ind) => {
                              return (
                                <TouchableOpacity
                                  onPress={() => setOutStationIndex(ind)}
                                  style={{flexDirection: 'row'}}>
                                  <Image
                                    source={
                                      outStationIndex == ind
                                        ? icon.currentLocation
                                        : icon.circle
                                    }
                                    resizeMode="contain"
                                    style={{
                                      height:
                                        outStationIndex == ind
                                          ? moderateScale(25)
                                          : moderateScale(18),
                                      width: moderateScale(25),
                                      marginRight: moderateScale(5),
                                    }}
                                  />
                                  <Text14 mt={1} text={ele} />
                                </TouchableOpacity>
                              );
                            },
                          )}
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            // paddingVertical: moderateScale(20),
                          }}>
                          {['One Way', 'Round Trip', 'Multicity'].map(
                            (ele, ind) => {
                              return (
                                <TouchableOpacity
                                  onPress={() => setOutStationIndex(ind)}
                                  style={{
                                    borderWidth: outStationIndex == ind ? 0 : 1,
                                    width: '30%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor:
                                      outStationIndex == ind
                                        ? colors.theme
                                        : colors.white,
                                    borderRadius: 8,
                                    borderColor: colors.borderC,
                                  }}>
                                  {outStationIndex == ind && (
                                    <Image
                                      source={icon.Shape1}
                                      style={{
                                        tintColor: colors.yellow,
                                        height: moderateScale(15),
                                        width: moderateScale(15),
                                        position: 'absolute',
                                        top: 5,
                                        right: 6,
                                        zIndex: 1,
                                      }}
                                    />
                                  )}
                                  <Image
                                    source={
                                      ind == 0
                                        ? icon.car1
                                        : ind == 1
                                        ? icon.omini
                                        : icon.bus
                                    }
                                    style={{
                                      height: moderateScale(63),
                                      width: moderateScale(90),
                                      marginRight: moderateScale(5),
                                    }}
                                    resizeMode="contain"
                                  />
                                  <Text14
                                    color={
                                      outStationIndex == ind
                                        ? colors.white
                                        : colors.theme
                                    }
                                    mt={1}
                                    text={ele}
                                  />
                                </TouchableOpacity>
                              );
                            },
                          )}
                        </View>
                      </View>

                      <Button
                        onPress={() =>
                          navigation.navigate('Location', {
                            name:
                              outStationIndex == 0
                                ? 'One Way'
                                : outStationIndex == 2
                                ? 'Round Trip'
                                : 'Multicity',
                          })
                        }
                        mt={moderateScale(20)}
                        width={'100%'}
                        text={'Get Started'}
                      />
                    </View>
                  )}
                </>
              )
              //#endregion
            }
          </View>
          //#endregion
        }
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    // height: moderateScale(290),
    width: width,
    backgroundColor: colors.white,
    // position: 'absolute',
    // bottom: 0
  },
  imgContainer: {
    width: scale(80),
    height: moderateScale(80),
  },
  mapStyle: {
    flex: 2,
    position: 'absolute',
    top: moderateScale(16),
    left: 0,
    right: 0,
    bottom: '0%',
    zIndex: -1,
  },
  carContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    // paddingHorizontal: scale(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    backgroundColor: colors.white,
  },
  destination: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: moderateScale(10),

    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    marginTop: moderateScale(15),
  },
  searchContainer: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#EDF1F7',
    paddingVertical: moderateScale(1),
    borderRadius: moderateScale(4),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(10),
  },
});
