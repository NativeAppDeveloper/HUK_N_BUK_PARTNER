import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { CommonStyle, colors, fonts } from '../../../utils/Styles'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import Text18 from '../../../component/customText/Text18'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icon, images } from '../../../utils/Image'
import {useNavigation} from '@react-navigation/native';
import Text14 from '../../../component/customText/Text14'
import Text12 from '../../../component/customText/Text12';
import Dash from 'react-native-dash-2'
import Text16 from '../../../component/customText/Text16'
import Button from '../../../component/customButton/Button'
import DeleteModal from './DeleteModal'
import { commonPadding } from '../../../utils/Helper'


const PreBid_Details = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);


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
                      text={'Pre Bid '}
                      textAlign={'center'}
                    />

                  
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    paddingHorizontal: 4,
                    paddingVertical: 2,
                   
                  }}
                >
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
                    paddingHorizontal: commonPadding,
                    // paddingTop: moderateScale(5),
                    marginTop: moderateScale(0),
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor:colors.white,
                    paddingVertical:moderateScale(10)
                  }}>
                 <View style={styles.imageNameInner}>
                <Image
                  style={[CommonStyle.img]}
                  source={images.registrationComplete}
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
                 
                  <Text14 mt={1} color={colors.theme} text={'Sedan'} />
                </View>
              </View>

                  <View
                    style={{
                      marginLeft: 15,
                      position: 'absolute',
                      right: 18,
                      top: 10,
                    }}>
                    <Text12 color={colors.secondary} mt={1} text={'Total Amount'} />
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
            <View style={styles.listContainer}>
       
            <TouchableOpacity activeOpacity={0.8}
            onPress={()=> navigation.navigate('PreBid_Details')}
             style={styles.itemContainer}>
              <View style={styles.bookingIdContainer}>
                <Text
                  style={
                    styles.bookingIdText
                  }>{`Tue, 23 Feb, 6:00 PM`}</Text>
                  
                  
              </View>

              {
                //#region
                <View
                  style={{
                    paddingHorizontal: scale(10),
                    marginTop: moderateScale(10),
                    left:moderateScale
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

                      <View style={{paddingHorizontal:moderateScale(10)}}>
                        <Text14
                          color={colors.theme}
                          mt={1}
                          text={'333B, Anchorv  ale Link'}
                        />
                        
                      </View>
                    </View>
                  </View>

                  <Dash style={{ width: 1,height: 60, flexDirection: "column" ,left:moderateScale(10),top:moderateScale(5)}} />


<View
  style={{
    marginHorizontal: scale(10),
    // alignItems:'center',
    justifyContent: 'center',
    // top: moderateVerticalScale(5),
    paddingLeft: 20,
  }}>



  <View style={{ flexDirection: 'row', alignItems: 'center',position:'absolute',bottom:moderateScale(15),paddingHorizontal:moderateScale(15) }}>

    <Image
      style={{ height: 17, width: 17 }}
      source={icon.Time}
    />

    <Text style={{ fontSize: 10, fontFamily: fonts.regular,color:colors.theme }}>
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
    <Text style={{ fontSize: 10, color: '#f7954a' }}>
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

                    <View style={{paddingHorizontal:moderateScale(10)}}>
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

              
            </TouchableOpacity>
      </View>
      <View style={{left:moderateScale(20),top:moderateScale(18)}}>
      <Text18
                        color={colors.theme}
                        mt={1}
                        text={'Bidding Details'}
                      />
      </View>
      <View
                      style={{
                        paddingHorizontal: scale(10),
                        backgroundColor:colors.white,
                        paddingVertical:moderateScale(20),
                        marginTop: moderateScale(15),
                        top:moderateScale(18)
                      }}>
                      <Text14 mt={1} text={'Amenities'} />
                      

                      <View style={{flexDirection: 'row'}}>
                        {['Water Bottle', 'Wifi', 'Tissues', 'Newspaper'].map(
                          (data, ind) => {
                            return (
                              <TouchableOpacity
                                style={{
                                  backgroundColor: '#f6f6f6',
                                  padding: moderateScale(8),
                                  marginRight: moderateScale(10),
                                  borderRadius: 2,
                                  marginTop: moderateScale(10),
                                }}>
                                <Text12
                                  text={data}
                                  color={colors.gray}
                                  mt={1}
                                />
                              </TouchableOpacity>
                            );
                          },
                        )}
                      </View>
                    </View>
                    <View
                      style={{
                        paddingHorizontal: scale(10),
                        paddingTop: moderateScale(10),
                        backgroundColor:colors.white,
                        paddingVertical:moderateScale(20),
                        marginTop: moderateScale(15),
                        top:moderateScale(18),
                      }}>
                      <Text14 color={colors.theme} text={'Price Break Up'} />

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: moderateScale(10),
                        }}>
                        <Text12 color={colors.placeholderColor} text={'Basic Fare'} />
                        <Text12 color={colors.placeholderColor} text={'5,275'} />
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: moderateScale(10),
                        }}>
                        <Text12
                          color={colors.placeholderColor}
                          text={'Toll Tax'}
                        />
                        <Text12
                          color={colors.placeholderColor}
                          text={'1,520'}
                        />
                        
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: moderateScale(10),
                        }}>
                        <Text12
                          color={colors.placeholderColor}
                          text={'State Tax'}
                        />
                        <Text12
                          color={colors.placeholderColor}
                          text={'1,250'}
                        />
                        
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: moderateScale(10),
                        }}>
                        <Text12
                          color={colors.placeholderColor}
                          text={'Driver Allowance (Per Night) '}
                        />
                        <Text12
                          color={colors.placeholderColor}
                          text={'500'}
                        />
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: moderateScale(10),
                        }}>
                        <Text12
                          color={colors.placeholderColor}
                          text={'Parking'}
                        />
                        <Text12
                          color={colors.placeholderColor}
                          text={'Excluded'}
                        />
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: moderateScale(10),
                        }}>
                        <Text12
                          color={colors.placeholderColor}
                          text={'Extra Km Charge'}
                        />
                        <Text12
                          color={colors.placeholderColor}
                          text={'20'}
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
                          text={'Estimated Total Fare'}
                        />
                        <Text12
                          color={colors.theme}
                          text={'7,426'}
                        />
                      </View>

                   
                    </View>
                   
          </ScrollView>
          <View
                  style={{
                    backgroundColor: '#f6f6f6',
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                   marginVertical:moderateScale(10),
                   paddingHorizontal:moderateScale(10),
                   paddingVertical:moderateScale(10),
                    ...Platform.select({
                      ios: {
                        paddingBottom: iphone8
                          ? moderateScale(10)
                          : moderateScale(20),
                      },
                    }),
                  }}>
                  <Button
                    onPress={() => {
                      navigation.navigate('Home');
                      setBottomModalVisible(false);
                    }}
                    width={'48%'}
                    text={'Edit'}
                    backgroundColor={'#D9D9D9'}
                  />
                  <Button
                    onPress={() => {
                      setModalVisible(true);
                    }}
                    width={'48%'}
                    btnTextClr={colors.white}
                    text={'Delete'}
                    backgroundColor={colors.theme}
                  />
                </View>
          </>
        
          
      
        }
        <DeleteModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
   
    </>
  )
}

export default PreBid_Details

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
        flexDirection:'row',
        justifyContent:'space-between'
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
})