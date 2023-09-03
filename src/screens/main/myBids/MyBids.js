import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import BackHandler from '../../../component/BackHandler';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import {commonPadding} from '../../../utils/Helper';
import {moderateScale, scale} from 'react-native-size-matters';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';
import {AdjustmentsHorizontalIcon} from 'react-native-heroicons/solid';
import {icon, images} from '../../../utils/Image';
import Dash from 'react-native-dash-2';
import { useNavigation } from '@react-navigation/native';

const MyBids = () => {
  const [seletedIndex, setSelectedIndex] = useState(0);
  const navigation=useNavigation()
  return (
    <View>
      <BackHandler drawer={1} name={'Outstation Rides'} />

      {
        //#region  tabs
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: commonPadding,
            // backgroundColor: colors.white,
            paddingTop: moderateScale(20),
          }}>
          {['New Requests', 'Placed Bid', 'Rejected'].map((ele, ind) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedIndex(ind)}
                style={{
                  width: '32%',
                  backgroundColor:
                    seletedIndex == ind ? colors.yellow : colors.white,
                  borderWidth: seletedIndex == ind ? 0 : 1,
                  borderColor: colors.borderC,
                  padding: moderateScale(8),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: moderateScale(8),
                  alignItems: 'center',
                  paddingVertical: moderateScale(13),
                }}>
                <Text12 mt={1} color={colors.theme} text={ele} />
              </TouchableOpacity>
            );
          })}
        </View>
        //#endregion
      }

      <View
        style={{
          paddingHorizontal: commonPadding,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: moderateScale(10),
        }}>
        <Text14
          text={'13 Requests'}
          color={colors.theme}
          fontFamily={fonts.semibold}
        />

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.white,
            paddingHorizontal: scale(15),
            borderRadius: 6,
            marginRight: 10,
            paddingVertical: moderateScale(7),
            borderWidth: 1,
            borderColor: colors.borderC,
          }}>
          <AdjustmentsHorizontalIcon color={colors.placeholderColor} />
          <Text12 text={'Filter'} />
        </TouchableOpacity>
      </View>

      {/* card lsist */}

          <ScrollView contentContainerStyle={{paddingBottom:moderateScale(300)}}>
          {
            [1,1,].map((ele)=>{
                return(
                    <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('MyBidRideDetails')}
                    style={styles.itemContainer}>
            
                      <View style={{paddingHorizontal:commonPadding,flexDirection:'row',borderBottomWidth:1,borderColor:colors.borderC,paddingBottom:moderateScale(10)}}>
                            <Image style={{height:moderateScale(30),width:moderateScale(30),borderRadius:100}} source={icon.car1}/>
                            <View style={{marginLeft:5}}>
                                <Text12 color={colors.secondry} text={'Cab Type'}/>
                                <Text12 mt={1} color={colors.theme} fontFamily={fonts.semibold} text={'Sedan'}/>
                            </View>
                      </View>
            
            
            
                    <View style={[styles.bookingIdContainer,{marginTop:moderateScale(10)}]}>
                      <Text style={[styles.bookingIdText,]}>
                        Tue, 23 Feb •{' '}
                        <Text style={{color: colors.black, fontFamily: fonts.semibold}}>
                          One Way
                        </Text>
                      </Text>
                      <Text12 color={'#23A949'} text={'Active'} />
                    </View>
            
                    {
                      //#region
                      <View
                        style={{
                          paddingHorizontal: scale(10),
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
            
                            <View style={{paddingHorizontal: moderateScale(10)}}>
                              <Text14
                                color={colors.theme}
                                mt={1}
                                text={'333B, Anchorv  ale Link'}
                              />
                              <Text12 fontFamily={fonts.regular} color={colors.secondry} text={'Pick up 12:05PM'}/>
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
                            color: colors.secondry,
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
                            <Image style={{height: 17, width: 17}} source={icon.Time} />
            
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
                            <Text style={{fontSize: 10, color: '#f7954a'}}>456 km</Text>
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
            
                          <View style={{paddingHorizontal: moderateScale(10)}}>
                            <View>
                            <Text14 color={colors.theme} mt={1} text={'East Coast Hill'} />
                            <Text12 fontFamily={fonts.regular} color={colors.secondry} text={'Drop off 12:05PM'}/>
                          </View>
                          </View>
                        </View>
                      </View>
                      //#endregion
                    }
            
                    {
                      //#region  bottom View
                      <View
                        style={{
                          borderTopWidth: 0.5,
                          paddingHorizontal: scale(10),
                          borderTopColor: colors.borderC,
                          paddingTop: 5,
                          marginTop: 8,
                          flexDirection: 'row',
                          alignItems: 'center',
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
                            <Text14 mt={1} color={colors.theme} text={'Sachin'} />
                          </View>
                        </View>
            
                        <View
                          style={{
                            marginLeft: 15,
                            position: 'absolute',
                            right: 8,
                            top: 10,
                          }}>
                          <TouchableOpacity
                            style={{
                              backgroundColor: colors.yellow,
                              paddingHorizontal: scale(10),
                              paddingVertical: moderateScale(10),
                              borderRadius: 8,
                            }}>
                            <Text12 color={colors?.theme} mt={1} text={'Placed Bid'} />
                          </TouchableOpacity>
                        </View>
                      </View>
                      //#endregion
                    }
                  </TouchableOpacity>
                )
            })
          }
          </ScrollView>
    </View>
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
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  itemContainer: {
    borderWidth: 0.5,
    marginTop: moderateScale(20),
    paddingVertical: (10),
    borderColor: colors.placeholderColor,
    backgroundColor: colors.white,
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
  },
  bookingIdContainer: {
    // borderBottomWidth: 0.5,
    paddingBottom: moderateScale(10),
    borderColor: colors.placeholderColor,
    paddingHorizontal: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookingIdText: {
    fontSize: 12,
    color: colors.secondry,
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

export default MyBids;
