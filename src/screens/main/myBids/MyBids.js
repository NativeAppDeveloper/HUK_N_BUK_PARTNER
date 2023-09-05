import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
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
import {useNavigation} from '@react-navigation/native';
import Text10 from '../../../component/customText/Text10';
import { UsersIcon } from 'react-native-heroicons/outline';

const MyBids = () => {
  const [seletedIndex, setSelectedIndex] = useState(0);
  const navigation = useNavigation();
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

      <ScrollView contentContainerStyle={{paddingBottom: moderateScale(300)}}>
        {[1, 1,1].map((ele, ind) => {
          
          if(seletedIndex==0){
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('MyBidRideDetails',{name:ind==0?'One way': ind==1?'Round Trip':'Multple Trip'})}
                style={styles.itemContainer}>
                <View
                  style={{
                    paddingHorizontal: commonPadding,
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderColor: colors.borderC,
                    paddingBottom: moderateScale(10),
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{
                        height: moderateScale(30),
                        width: moderateScale(30),
                        borderRadius: 100,
                      }}
                      source={icon.car1}
                    />
                    <View style={{marginLeft: 5}}>
                  
                      <Text12 color={colors.secondry} text={'Cab Type'} />
                      <Text12
                        mt={1}
                        color={colors.theme}
                        fontFamily={fonts.semibold}
                        text={'Sedan'}
                      />
                    </View>
                  </View>
  
                  <View>
                    <Text10
                      fontFamily={fonts.regular}
                      color={colors.placeholderColor}
                      text={'Time Remaining'}
                    />
                    <Text10
                      fontFamily={fonts.semibold}
                      textAlign={'right'}
                      color={colors.yellow}
                      text={'15:00 m'}
                    />
                  </View>
                </View>
  
                <View
                  style={[
                    styles.bookingIdContainer,
                    {marginTop: moderateScale(10)},
                  ]}>
                  <Text style={[styles.bookingIdText]}>
                    {ind == 0 ? 'Tue, 23 Feb •' : 'Tue, 23 Feb to Wed, 24 Feb •'}
                    <Text
                      style={{color: colors.black, fontFamily: fonts.semibold}}>
                      {ind == 0 ? ' One Way' : ind==1? ' Round Trip':' Multple Trip' }
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
                          <Text12
                            fontFamily={fonts.regular}
                            color={colors.secondry}
                            text={'Pick up 12:05PM'}
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
                        <Image source={icon.location} style={CommonStyle.img} />
                      </View>
  
                      <View
                        style={{
                          paddingHorizontal: moderateScale(10),
                          width: '90%',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{}}>
                          <Text14
                            color={colors.theme}
                            mt={1}
                            text={'East Coast Hill'}
                          />
                          <Text12
                            fontFamily={fonts.regular}
                            color={colors.secondry}
                            text={'Drop off 12:05PM'}
                          />
                        </View>
  
                        <View
                          style={{
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                              resizeMode="contain"
                              style={{
                                height: moderateScale(15),
                                width: moderateScale(15),
                              }}
                              source={icon.adult}
                            />
                            <Text12 color={colors.secondry} mt={1} text={' 2'} />
                          </View>
  
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              marginRight: 10,
                            }}>
                            <Image
                              resizeMode="contain"
                              style={{
                                height: moderateScale(15),
                                width: moderateScale(15),
                              }}
                              source={icon.child}
                            />
                            <Text12 color={colors.secondry} mt={1} text={' 2'} />
                          </View>
                          {/* <Image resizeMode='contain' style={{height:moderateScale(15),width:moderateScale(15),marginLeft:moderateScale(10)}} source={icon.child}/> */}
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
                        <Text12
                          color={colors?.theme}
                          mt={1}
                          text={'Placed Bid'}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  //#endregion
                }
              </TouchableOpacity>
            );
          }


          if(seletedIndex==1&& ind==1){
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('RoundTripDetails')}
                style={styles.itemContainer}>
                <View
                  style={{
                    paddingHorizontal: commonPadding,
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderColor: colors.borderC,
                    paddingBottom: moderateScale(10),
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{
                        height: moderateScale(30),
                        width: moderateScale(30),
                        borderRadius: 100,
                      }}
                      source={icon.car1}
                    />
                    <View style={{marginLeft: 5}}>
                  
                      <Text12 color={colors.secondry} text={'UP16-BV-0000'} />
                      <Text12
                        mt={1}
                        color={colors.theme}
                        fontFamily={fonts.semibold}
                        text={'Sedan'}
                      />
                    </View>
                  </View>
  
                  <View>
                    <Text10
                      fontFamily={fonts.regular}
                      color={colors.placeholderColor}
                      text={'Time Remaining'}
                    />
                    <Text10
                      fontFamily={fonts.regular}
                      textAlign={'right'}
                      color={colors.orange}
                      text={'15:00 m'}
                    />
                  </View>
                </View>
  
                <View
                  style={[
                    styles.bookingIdContainer,
                    {marginTop: moderateScale(10)},
                  ]}>
                  <Text style={[styles.bookingIdText]}>
                    {ind == 0 ? 'Tue, 23 Feb •' : 'Tue, 23 Feb to Wed, 24 Feb •'}
                    <Text
                      style={{color: colors.black, fontFamily: fonts.semibold}}>
                      {ind == 0 ? ' One Way' : ind==1? ' Round Trip':' Multple Trip' }
                    </Text>
                  </Text>
                  <Text12 color={colors.orange} text={'• Pending'} />
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
                          <Text12
                            fontFamily={fonts.regular}
                            color={colors.secondry}
                            text={'Pick up 12:05PM'}
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
                        <Image source={icon.location} style={CommonStyle.img} />
                      </View>
  
                      <View
                        style={{
                          paddingHorizontal: moderateScale(10),
                          width: '90%',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{}}>
                          <Text14
                            color={colors.theme}
                            mt={1}
                            text={'East Coast Hill'}
                          />
                          <Text12
                            fontFamily={fonts.regular}
                            color={colors.secondry}
                            text={'Drop off 12:05PM'}
                          />
                        </View>
  
                        <View
                          style={{
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                              resizeMode="contain"
                              style={{
                                height: moderateScale(15),
                                width: moderateScale(15),
                              }}
                              source={icon.adult}
                            />
                            <Text12 color={colors.secondry} mt={1} text={' 2'} />
                          </View>
  
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              marginRight: 10,
                            }}>
                            <Image
                              resizeMode="contain"
                              style={{
                                height: moderateScale(15),
                                width: moderateScale(15),
                              }}
                              source={icon.child}
                            />
                            <Text12 color={colors.secondry} mt={1} text={' 2'} />
                          </View>
                          {/* <Image resizeMode='contain' style={{height:moderateScale(15),width:moderateScale(15),marginLeft:moderateScale(10)}} source={icon.child}/> */}
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
                      {/* <TouchableOpacity
                        style={{
                          backgroundColor: colors.yellow,
                          paddingHorizontal: scale(10),
                          paddingVertical: moderateScale(10),
                          borderRadius: 8,
                        }}>
                        <Text12
                          color={colors?.theme}
                          mt={1}
                          text={'Placed Bid'}
                        />
                      </TouchableOpacity> */}

                      <Text10 text={'Offer Price'} color={colors.secondry}/>
                      <Text12 text={'  ₹ 1550'} color={colors.theme}/>

                    </View>
                  </View>
                  //#endregion
                }
              </TouchableOpacity>
            );
          }


          if(seletedIndex==2&& ind==1){
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('RoundTripDetails',{name:1})}
                style={styles.itemContainer}>
               
                <View
                  style={[
                    styles.bookingIdContainer,
                    {marginTop: moderateScale(10)},
                  ]}>
                  <Text style={[styles.bookingIdText]}>
                    {'Tue, 23 Feb 2020'}
                    <Text
                      style={{color: colors.black, fontFamily: fonts.semibold}}>
                      {'  • One Way' }
                    </Text>
                  </Text>
                  <Text12 color={colors.red} text={'• Lost'} />
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
                          <Text12
                            fontFamily={fonts.regular}
                            color={colors.secondry}
                            text={'Pick up 12:05PM'}
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
                        <Image source={icon.location} style={CommonStyle.img} />
                      </View>
  
                      <View
                        style={{
                          paddingHorizontal: moderateScale(10),
                          width: '90%',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{}}>
                          <Text14
                            color={colors.theme}
                            mt={1}
                            text={'East Coast Hill'}
                          />
                          <Text12
                            fontFamily={fonts.regular}
                            color={colors.secondry}
                            text={'Drop off 12:05PM'}
                          />
                        </View>
  
                        <View
                          style={{
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                          }}>
                       
  
                       <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft:10
                    }}>

                        <UsersIcon size={moderateScale(20)}  color={colors.secondry}/>
                        <Text12 fontFamily={fonts.medium} color={colors.secondry} text={'  2 Seats'}/>
                        </View>
                          {/* <Image resizeMode='contain' style={{height:moderateScale(15),width:moderateScale(15),marginLeft:moderateScale(10)}} source={icon.child}/> */}
                        </View>
                      </View>
                    </View>
                  </View>
                  //#endregion
                }
  
             
              </TouchableOpacity>
            );
          }


        
        })}
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
    paddingVertical: 10,
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
