import React, {useState} from 'react';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Text18 from '../../../component/customText/Text18';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icon, images} from '../../../utils/Image';
import {useNavigation} from '@react-navigation/native';
import Text14 from '../../../component/customText/Text14';
import Text12 from '../../../component/customText/Text12';
import Dash from 'react-native-dash-2';
import Text16 from '../../../component/customText/Text16';
import Button from '../../../component/customButton/Button';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Text10 from '../../../component/customText/Text10';

const MyBidRideDetails = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor={colors.theme} />
      <View style={[CommonStyle.container, {backgroundColor: '#f6f6f6'}]}>
        {
          //#region header Start
          <>
            {Platform.OS == 'android' && <SafeAreaView />}
            <View
              style={{
                backgroundColor: colors.white,
                ...Platform.select({
                  ios: {
                    paddingTop: iphone8 ? moderateScale(10) : moderateScale(0),
                  },
                }),
              }}></View>
            <ScrollView>
              <View
                style={{
                  width: '100%',
                  paddingVertical: moderateScale(20),
                  alignSelf: 'center',
                  backgroundColor: colors.theme,
                  elevation: 5,
                  zIndex: 1,
                  top: 0,
                  padding: moderateScale(10),
                }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    padding: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    ...Platform.select({
                      ios: {
                        paddingTop: iphone8
                          ? moderateScale(10)
                          : moderateScale(40),
                      },
                    }),
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}>
                    <View
                      style={{
                        height: moderateVerticalScale(30),
                        width: moderateVerticalScale(30),
                      }}>
                      <Image
                        style={[CommonStyle.img, {tintColor: colors.white}]}
                        source={icon.backBtn}
                      />
                    </View>
                  </TouchableOpacity>

                  <View
                    style={{marginLeft: moderateScale(0), alignSelf: 'center'}}>
                    <Text18
                      color={colors.white}
                      lineHeight={0}
                      mt={moderateScale(1)}
                      text={'Round Trip'}
                      textAlign={'center'}
                    />
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      paddingHorizontal: 4,
                      paddingVertical: 2,
                    }}>
                    <Text14
                      color={'#23A949'}
                      lineHeight={0}
                      mt={moderateScale(1)}
                      text={'Active '}
                      //   textAlign={'center'}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {
                //#region  bottom View
                <View
                  style={{
                    paddingHorizontal: scale(10),
                    // paddingTop: moderateScale(5),
                    marginTop: moderateScale(0),
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: colors.white,
                    paddingVertical: moderateScale(10),
                  }}>
                  <View style={styles.imageNameInner}>
                    <Image style={[CommonStyle.img]} source={icon.Car} />
                  </View>

                  <View>
                    <Text12 color={colors.secondry} text={'Cab Type'} />

                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text14 mt={1} color={colors.theme} text={'Sedan'} />
                    </View>
                  </View>

                  <View
                    style={{
                      marginLeft: 15,
                      position: 'absolute',
                      right: 8,
                      top: 10,
                    }}>
                    <View
                      style={{flexDirection: 'row', top: moderateScale(10)}}>
                      <Image
                        source={icon.face}
                        style={{
                          height: moderateScale(15),
                          width: moderateScale(14),
                          marginRight: moderateScale(5),
                        }}
                      />

                      <Text style={styles.bookingIdText}>{`2`}</Text>
                      <Image
                        source={icon.Men}
                        style={{
                          height: moderateScale(15),
                          width: moderateScale(12),
                          marginRight: moderateScale(5),
                          marginLeft: moderateScale(5),
                        }}
                      />

                      <Text style={styles.bookingIdText}>{`3`}</Text>
                    </View>
                  </View>
                </View>

                //#endregion
              }
              {
                //#region  bottom View
                <View
                  style={{
                    paddingHorizontal: scale(10),
                    // paddingTop: moderateScale(5),
                    marginTop: moderateScale(0),
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: colors.white,
                    paddingVertical: moderateScale(10),
                    borderTopColor: colors.placeholderColor,
                    borderTopWidth: 0.5,
                  }}>
                  <View style={styles.imageNameInner}>
                    <Image style={[CommonStyle.img]} source={icon.profile} />
                  </View>

                  <View>
                    <Text12 color={colors.secondry} text={'Rider'} />

                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text14
                        mt={1}
                        color={colors.theme}
                        text={'Akshit Kumar'}
                      />
                    </View>
                  </View>
                </View>

                //#endregion
              }

              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: moderateScale(15),
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    height: moderateScale(30),
                    width: moderateScale(30),
                    backgroundColor: colors.white,
                    right: moderateScale(10),
                    alignItems:'center'

                  }}>
                  <Text16
                    fontFamily={fonts.bold}
                    color={colors.yellow}
                    text={'15'}

                  />
                </View>
                <Text16
                  fontFamily={fonts.bold}
                  color={colors.secondry}
                  text={':'}
                />
                <View
                  style={{
                    height: moderateScale(30),
                    width: moderateScale(30),
                    backgroundColor: colors.white,
                    left: moderateScale(10),
                    alignItems:'center'
                    
                  }}>
                  <Text16
                    fontFamily={fonts.bold}
                    color={colors.yellow}
                    text={'46'}
                  />
                </View>
              </View>
              <Text12
                color={colors.secondary}
                textAlign={'center'}
                text={'Time Remaining'}
              />

              <View style={styles.listContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('PreBid_Details')}
                  style={styles.itemContainer}>
                  {/* <View style={styles.bookingIdContainer}>
                    <Text
                      style={
                        styles.bookingIdText
                      }>{`Tue, 23 Feb, 6:00 PM`}</Text>
                  </View> */}

                  <Text10 color={colors.secondry} text={'     Tue, 23 Feb, 6:00 PM'}/>

                  {
                    //#region
                    <View
                      style={{
                        paddingHorizontal: scale(10),
                        marginTop: moderateScale(10),
                        left: moderateScale,
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

                          <View style={{paddingHorizontal: moderateScale(10)}}>
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

                      <Dash
                        style={{
                          width: 1,
                          height: 60,
                          flexDirection: 'column',
                          left: moderateScale(10),
                          top: moderateScale(5),
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

                      <View style={{flexDirection: 'row', marginTop: 8}}>
                        <View
                          style={{
                            height: moderateScale(23),
                            width: moderateScale(23),
                          }}>
                          <Image
                            source={icon.location}
                            style={CommonStyle.img}
                          />
                        </View>

                        <View style={{paddingHorizontal: moderateScale(10)}}>
                          <Text14
                            color={colors.theme}
                            mt={1}
                            text={'East Coast Hill'}
                          />
                          <Text12
                            fontFamily={fonts.regular}
                            color={colors.gray}
                            text={'Drop off Tue, 12:05PM, 23 Feb'}
                          />
                        </View>
                      </View>
                      <Dash
                        style={{
                          width: 1,
                          height: 60,
                          flexDirection: 'column',
                          left: moderateScale(10),
                          top: moderateScale(5),
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

                      <View style={{flexDirection: 'row', marginTop: 8}}>
                        <View
                          style={{
                            height: moderateScale(23),
                            width: moderateScale(23),
                          }}>
                          <Image
                            source={icon.location}
                            style={CommonStyle.img}
                          />
                        </View>

                        <View style={{paddingHorizontal: moderateScale(10)}}>
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
                    //#endregion
                  }
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View
              style={{
                position: 'absolute',
                width: '100%',
                bottom: moderateVerticalScale(20),
              }}>
              <Button
                onPress={() => navigation.navigate('AssignVechicle')}
                width={'90%'}
                // mt={moderateVerticalScale(20)}
                text={'Place Bid'}
              />
            </View>
          </>
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(20),
  },
  tabButton: {
    width: scale(90),
    alignItems: 'center',
    paddingVertical: moderateScale(10),
    marginRight: 10,
    borderRadius: 8,
  },
  listContainer: {
    width: '100%',
    alignSelf: 'center',
  },
  itemContainer: {
    marginTop: moderateScale(20),
    paddingVertical: moderateScale(20),
    backgroundColor: colors.white,
  },
  bookingIdContainer: {
    paddingBottom: moderateScale(10),
    paddingHorizontal: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookingIdText: {
    fontSize: 12,
    color: colors.secondary,
    fontFamily: fonts.regular,
  },
  imageNameInner: {
    height: moderateScale(32),
    width: moderateScale(32),
    marginRight: moderateScale(10),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
  },
});
export default MyBidRideDetails;
