import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import BackHandler from '../../../component/BackHandler';
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
import { iphone8 } from '../../../utils/Helper';

const PreBid_Create = () => {
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
                    text={'Pre Bid '}
                    textAlign={'center'}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('CreatePrebid');
                  }}
                  activeOpacity={0.8}
                  style={{
                    paddingHorizontal: 4,
                    paddingVertical: 2,
                  }}>
                  <Text14
                    color={colors.yellow}
                    lineHeight={0}
                    mt={moderateScale(1)}
                    text={'Create '}
                    //   textAlign={'center'}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.listContainer}>
              <FlatList
                contentContainerStyle={{
                  paddingBottom: moderateVerticalScale(200),
                }}
                showsVerticalScrollIndicator={false}
                data={[1, 1, 1, 1, 1, 1]}
                renderItem={() => (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('PreBid_Details')}
                    style={styles.itemContainer}>
                    <View style={styles.bookingIdContainer}>
                      <Text
                        style={
                          styles.bookingIdText
                        }>{`Tue, 23 Feb, 6:00 PM`}</Text>
                      <Text12 color={'#23A949'} text={'• Active'} />
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

                            <View
                              style={{paddingHorizontal: moderateScale(10)}}>
                              <Text14
                                color={colors.theme}
                                mt={1}
                                text={'333B, Anchorv  ale Link'}
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
                          paddingTop: 5,
                          marginTop: 8,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <View style={[styles.imageNameInner,{borderWidth:1,borderColor:colors.borderC}]}>
                          <Image
                          resizeMode='contain'
                            style={[CommonStyle.img]}
                            source={icon.car1}
                          />
                        </View>

                        <View>
                          <Text12
                            color={colors.secondary}
                            text={'UP16-BV-0000'}
                          />

                          <View
                            style={{
                              flexDirection: 'row',
                            }}>
                            <Text14
                              mt={1}
                              color={colors.theme}
                              text={'Sedan'}
                            />
                          </View>
                        </View>

                        <View
                          style={{
                            marginLeft: 15,
                            position: 'absolute',
                            right: 8,
                            top: 10,
                          }}>
                          <Text12
                            color={colors.secondary}
                            mt={1}
                            text={'Total Amount'}
                          />
                          <Text12
                            textAlign={'right'}
                            fontFamily={fonts.regular}
                            color={colors.black}
                            text={'7,325'}
                          />
                        </View>
                      </View>
                      //#endregion
                    }
                  </TouchableOpacity>
                )}
              />
            </View>
          </>
        }
      </View>
    </>
  );
};

export default PreBid_Create;

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
    paddingVertical: moderateScale(10),
    borderColor: colors.placeholderColor,
    backgroundColor: colors.white,
    borderRadius: 8,
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
