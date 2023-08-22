import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStyle, colors, fonts } from '../../../utils/Styles';
import BackHandler from '../../../component/BackHandler';
import { icon } from '../../../utils/Image';
import { moderateScale, scale } from 'react-native-size-matters';
import Text16 from '../../../component/customText/Text16';
import Text14 from '../../../component/customText/Text14';
import Text22 from '../../../component/customText/Text22';
import Text20 from '../../../component/customText/Text20';
import Text12 from '../../../component/customText/Text12';
import { EnvelopeIcon, PhoneIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const RequestCallBack = () => {
  return (
    <View style={[CommonStyle.container, { backgroundColor: '#f6f6f6' }]}>
      <BackHandler name={'Request a Call Back'} />

      {
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: moderateScale(20),
            alignItems: 'center',
            paddingVertical: moderateScale(10),
            borderRadius: scale(7),
          }}>
          <View>
            <Text16
              fontFamily={fonts.regular}
              color={colors.theme}
              text={'Your Callback request has'}
            />
            <Text16
              textAlign="center"
              fontFamily={fonts.regular}
              color={colors.theme}
              text={'been registered'}
            />
          </View>

          {
            //#endregionconstact
            <View style={{ alignItems: 'center' }}>
              <View
                style={{
                  height: moderateScale(100),
                  width: moderateScale(100),
                  borderRadius: moderateScale(50),
                  borderWidth: 2,
                  borderColor: colors.theme,
                  marginTop: moderateScale(20),
                }}>
                <Image
                  style={CommonStyle.img}
                  source={require('../../../assets/support.png')}
                />
              </View>

              <View>
                <Text16
                  textAlign="center"
                  mt={moderateScale(20)}
                  fontFamily={fonts.regular}
                  color={colors.theme}
                  text={`A Huk n Buk representative will call you shortly, please answer your phone`}
                />

                <Text16
                  textAlign="center"
                  mt={moderateScale(20)}
                  fontFamily={fonts.semibold}
                  color={colors.theme}
                  text={`We’ll call you between 9AM - 9PM`}
                />
              </View>
            </View>
            //#endregion
          }
        </View>
      }
    </View>
  );
};
const styles = StyleSheet.create({});

export default RequestCallBack;
