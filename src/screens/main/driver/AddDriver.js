import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
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
import { width } from '../../../utils/Helper';

const AddDriver = () => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{width: '90%', alignSelf: 'center'}}>
        {
          //#region header
          <SignupSeteps

          // step={'Step 1/5'}
          />
          //#endregion
        }

        <KeyboardAwareScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:moderateScale(200)}}>

        {
          //#region  headet text
          <View style={{marginTop: moderateVerticalScale(20)}}>
            <Text24 color={colors.theme} text={'Add Driver'} />
            <Text14
              fontFamily={fonts.regular}
              color={colors.secondry}
              text={`Enter Driver Details`}
            />
          </View>
          //#endregion
        }

        <View style={{alignSelf: 'center', width: '100%'}}>
          {
            //#region Name Components
            <View style={{width: '100%'}}>
              <Input
                placeHolder={'First Name'}
                mt={moderateVerticalScale(30)}
              />
              <Input placeHolder={'Last Name'} mt={moderateVerticalScale(20)} />

  



              <View
                style={{
                  backgroundColor: colors.white,
                  marginTop: moderateScale(20),
                  paddingVertical: moderateScale(5),
                  width: '100%',
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderColor: colors.borderC,
                  paddingHorizontal: scale(10),
                  borderRadius: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text14 text={'+91'} color={colors.theme} mt={1} />
                <TextInput
                  maxLength={10}
                  placeholderTextColor={colors.gray}
                  placeholder="  Mobile no."
                  style={{fontFamily: fonts.medium}}
                />
              </View>
            </View>
            //#endregion
          }

    
        </View>


        </KeyboardAwareScrollView>
   
      </View>

      {
            //#region  Next Button
            <View style={{position:'absolute',bottom:0,width:width,bottom:moderateScale(30)}}>
              <Button
                onPress={() => navigation.navigate('DriverList')}
                width={'90%'}
                mt={moderateVerticalScale(20)}
                text={'Send Link'}
              />
            </View>
            //#region
          }
    </SafeAreaView>
  );
};

export default AddDriver;
