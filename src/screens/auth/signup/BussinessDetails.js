import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Text24 from '../../../component/customText/Text24';
import Text14 from '../../../component/customText/Text14';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import Input from '../../../component/customInput/Input';
import Button from '../../../component/customButton/Button';
import {icon} from '../../../utils/Image';
import SignupSeteps from '../../../component/common/SignupSeteps';
import {useNavigation} from '@react-navigation/core';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const BussinessDetails = () => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{width: '90%', alignSelf: 'center'}}>
        {
          //#region header
          <SignupSeteps step={'Step 2/2'} />
          //#endregion
        }

        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:moderateScale(100)}} >
        <View>
          {
            //#region  headet text
            <View style={{marginTop: moderateVerticalScale(20)}}>
              <Text24 text={'Business Details'} />
              <Text14
                fontFamily={fonts.regular}
                color={colors.gray}
                text={`Enter Business Details`}
              />
            </View>
            //#endregion
          }

          <View style={{alignSelf: 'center', width: '100%'}}>
            {
              //#region Name Components
              <View style={{width: '100%'}}>
                <Input
                  placeHolder={'Busines Name'}
                  mt={moderateVerticalScale(20)}
                />

                <Input
                  placeHolder={'Location'}
                  mt={moderateVerticalScale(20)}
                />

                <Input
                  placeHolder={'Business Address'}
                  mt={moderateVerticalScale(20)}
                />

                <Input
                  placeHolder={'GST Number'}
                  mt={moderateVerticalScale(20)}
                />

                <View
                  style={{
                    marginTop: moderateScale(20),
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: moderateScale(90),
                      height: moderateScale(90),
                      justifyContent: 'center',
                      backgroundColor: colors.white,
                      alignItems: 'center',
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: colors.borderC,
                    }}>
                    <Image
                      style={{
                        height: moderateScale(50),
                        width: moderateScale(50),
                      }}
                      resizeMode="contain"
                      source={icon.upload}
                    />
                  </View>
                  <Text14
                    mt={1}
                    color={colors.placeholderColor}
                    text={'  Upload GST Certificate'}
                  />
                </View>

                <Input
                  placeHolder={'PAN Card Number '}
                  mt={moderateVerticalScale(20)}
                />

                <View
                  style={{
                    marginTop: moderateScale(20),
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: moderateScale(90),
                      height: moderateScale(90),
                      justifyContent: 'center',
                      backgroundColor: colors.white,
                      alignItems: 'center',
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: colors.borderC,
                    }}>
                    <Image
                      style={{
                        height: moderateScale(50),
                        width: moderateScale(50),
                      }}
                      resizeMode="contain"
                      source={icon.upload}
                    />
                  </View>
                  <Text14
                    mt={1}
                    color={colors.placeholderColor}
                    text={'  Upload PAN Card'}
                  />
                </View>
              </View>
              //#endregion
            }

            {
              //#region  Next Button
              <View style={{marginBottom:moderateScale(80)}}>
                <Button
                  onPress={() => navigation.navigate('RegistrationComplete')}
                  width={'100%'}
                  mt={moderateVerticalScale(45)}
                  text={'Next'}
                />
              </View>
              //#region
            }
          </View>
        </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

// export default Step5

export default BussinessDetails;
