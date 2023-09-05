import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import BackHandler from '../../../component/BackHandler';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {icon, images} from '../../../utils/Image';
import Text10 from '../../../component/customText/Text10';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';
import {StarIcon} from 'react-native-heroicons/solid';
import {commonPadding} from '../../../utils/Helper';

const DriverDetails = () => {
  return (
    <View>
      <BackHandler name={'Driver Detail'} />

      <TouchableOpacity
        // onPress={() => navigation.navigate('My Request')}
        style={styles.card}>
        <View style={{flexDirection: 'row', paddingHorizontal: scale(15)}}>
          <TouchableOpacity
            // onPress={()=>navigation.navigate('DriverDetails')}
            style={{
              height: moderateScale(50),
              width: moderateScale(50),
              borderWidth: 1,
              borderRadius: 40,
            }}>
            <Image
              source={icon.profile}
              resizeMode="contain"
              style={CommonStyle.img}
            />
          </TouchableOpacity>

          <View style={{marginLeft: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text14 color={colors.theme} mt={1} text={'Akshit Kumar •'} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 5,
                }}>
                <StarIcon color={colors.yellow} size={moderateScale(10)} />
                <Text10 mt={1} text={'4.5'} color={colors.placeholderColor} />
              </View>
            </View>
            <Text12
              fontFamily={fonts.regular}
              color={colors.gray}
              text={'Kanpur, Uttar Pradesh'}
            />



          </View>


          <View style={{flexDirection: 'row',position:'absolute',right:10,top:moderateScale(15)}}>
              <TouchableOpacity
                style={{
                  height: moderateScale(20),
                  width: moderateScale(20),
                  marginRight: moderateScale(10),
                }}>
                <Image style={CommonStyle.img} source={images.edit1} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{height: moderateScale(20), width: moderateScale(20)}}>
                <Image style={CommonStyle.img} source={images.trash} />
              </TouchableOpacity>
            </View>
        </View>

        <View
          style={{
            borderTopWidth: 1,
            marginTop: moderateScale(15),
            borderColor: colors.borderC,
            paddingHorizontal: commonPadding,
            paddingTop: moderateScale(10),
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CommonText heading={'Contact Number'} value={'+91 5656565655'} />
            <CommonText num={1} heading={'DOB'} value={'15/04/1995'} />
          </View>
          <CommonText
            mt={moderateScale(20)}
            heading={'Email ID'}
            value={'Akshit@yourmail.com'}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: moderateScale(20),
            }}>
            <CommonText heading={'License Number'} value={'885656565655'} />
            <CommonText num={1} heading={'Expiry'} value={'15/04/1995'} />
          </View>

          <View style={{marginTop:moderateScale(20)}}>
            <Text12
              text={'License Documnet'}
              fontFamily={fonts.regular}
              color={colors.secondry}
            />

            <Image style={{height:moderateScale(40),width:moderateScale(50),borderRadius:8,marginTop:moderateScale(10)}} source={{uri:'https://i.pinimg.com/550x/43/fe/14/43fe149f6994999a1c1f39b0e979777e.jpg'}}/>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderTopColor: colors.placeholderColor,
    marginTop: 8,
    backgroundColor: colors.white,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: moderateVerticalScale(12),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderC,
    marginTop: moderateScale(25),
  },
});

export default DriverDetails;

const CommonText = ({heading, value, num, mt}) => {
  return (
    <View style={{marginTop: mt ? mt : 0}}>
      <Text12
        textAlign={num ? 'right' : ''}
        text={heading}
        fontFamily={fonts.regular}
        color={colors.secondry}
      />
      <Text12 text={value} color={colors.theme} />
    </View>
  );
};
