import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {height, iphone8, width} from '../../../utils/Helper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text18 from '../../../component/customText/Text18';
import {icon} from '../../../utils/Image';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import CustomMapView from '../../../component/CustomMapView';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';

const RdieDetails = () => {
  const navigation = useNavigation();

  return (
    <>
      {Platform.OS == 'android' && <SafeAreaView />}
      <View
        style={{
          backgroundColor: colors.white,
          ...Platform.select({
            ios: {
              paddingTop: iphone8 ? moderateScale(10) : moderateScale(10),
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
              style={{fontSize: 10, marginTop: 10, fontFamily: fonts.regular}}>
              Tue, 23 Feb 2020 12:00PM • ID: 2130812309 • Round Trip
            </Text>
          </View>
        </View>
      </View>

      {
        //#region  map
        <CustomMapView Marker={true} mapStyle={styles.mapStyle} />
        //#endregion
      }

      <View
        style={{
          backgroundColor: colors.white,
          position: 'absolute',
          width: width,
          bottom: 0,
          height: moderateScale(370),
        }}>
        <TouchableOpacity
          onPress={() => navigate('RdieDetails')}
          style={styles.itemContainer}>
          <View style={styles.bookingIdContainer}>
            <Text
              style={
                styles.bookingIdText
              }>{`Booking ID #41651651561 • One Way`}</Text>
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

                  <View>
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

              <View
                style={{
                  height: 50,
                  borderColor: 'black',
                  borderLeftWidth: 1,
                  borderStyle: 'dashed',
                  marginHorizontal: scale(10),
                  // alignItems:'center',
                  justifyContent: 'center',
                  paddingLeft: 20,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image style={{height: 17, width: 17}} source={icon.Time} />
                  <Text style={{fontSize: 10, fontFamily: fonts.regular}}>
                    {' '}
                    456 km
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
                  <Image
                    source={icon.currentLocation}
                    style={CommonStyle.img}
                  />
                </View>

                <View>
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

          {
            //#region  bottom View
            <View
              style={{
                borderTopWidth: 0.5,
                paddingHorizontal: scale(10),
                borderTopColor: colors.placeholderColor,
                paddingTop: moderateScale(15),
                marginTop: 8,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  overflow: 'hidden',
                }}>
                <Image
                  source={{
                    uri: 'https://nftcrypto.io/wp-content/uploads/2023/05/2023-05-18-17_57_18-The-Journey-of-an-NFT-Avatar-Word-Product-Activation-Failed.png',
                  }}
                  resizeMode="cover"
                  style={CommonStyle.img}
                />
              </View>

              <View style={{marginLeft: 15}}>
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

              <View
                style={{
                  marginLeft: 15,
                  position: 'absolute',
                  right: 8,
                  top: 15,
                }}>
                <Text12
                  textAlign={'right'}
                  fontFamily={fonts.bold}
                  color={colors.black}
                  text={'₹ 150.00'}
                  mt={1}
                />
                <Text12
                  color={colors.theme}
                  mt={1}
                  fontFamily={fonts.regular}
                  textAlign={'right'}
                  text={'8268'}
                />
              </View>
            </View>
            //#endregion
          }

          {
            //#region  amnities
            <View style={{paddingHorizontal:scale(10)}}>
              <Text14 text={'Amenities'}/>

              <View style={{flexDirection:"row"}}>  
                {
                  ['Water Bottle','Wifi','Tissues','Newspaper'].map((data,ind)=>{
                    return(
                      <TouchableOpacity style={{backgroundColor:colors.bg,padding:moderateScale(8),marginRight:moderateScale(10),borderRadius:8,marginTop:moderateScale(10)}}>
                        <Text12 text={data} color={colors.placeholderColor} mt={1}/>
                 </TouchableOpacity>
                    )
                  })
                }
              </View>
            </View>
            //#endregion
          }
        </TouchableOpacity>
      </View>
    </>
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
    // heigh
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

export default RdieDetails;
