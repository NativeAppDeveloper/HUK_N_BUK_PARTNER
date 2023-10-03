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
import {signUpFlow, signupData} from '../../../utils/localVariable';
import {errorTost} from '../../../utils/Helper';
import {checkPhoneEmailSercvies} from '../../../services/Services';

const Step5 = () => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  const [mobile, setMobile] = useState('');

  // const submitHandler=()=>{
  //     if(mobile.length==0){
  //         errorTost('Please enter mobile number')
  //         return
  //     }
  //     signupData.mobile=mobile
  //     signUpFlow.flow='mobile'
  //     navigation.navigate('Otp',{mobile:mobile})
  // }

  const submitHandler = async () => {
    if (mobile == '') {
      errorTost('Please enter mobile number');
      return false;
    }

    let payload = {
      phoneNumber: mobile,
      email: '',
    };
    try {
      let response = await checkPhoneEmailSercvies(payload);
      console.log(response?.data);
      errorTost(response.data.message);
    } catch (error) {
      if (error?.response?.data?.code == 401) {
        signupData.mobile = mobile;
        signUpFlow.flow = 'mobile';
        navigation.navigate('Otp', {mobile: mobile});
      }
      console.log(error.response, 'step4');
    }
  };

  return (
    <SafeAreaView>
      <View style={{width: '90%', alignSelf: 'center'}}>
        {
          //#region header
          <SignupSeteps step={'Step 1/2'} />
          //#endregion
        }

        {
          //#region  headet text
          <View style={{marginTop: moderateVerticalScale(20)}}>
            <Text24 text={'Enter Your Mobile No.'} />
          </View>
          //#endregion
        }

        <View style={{alignSelf: 'center', width: '100%'}}>
          {
            //#region Name Components
            <View style={{width: '100%'}}>
              <Input
                maxLength={10}
                keyboardType={'number-pad'}
                value={mobile}
                onChangeText={val => setMobile(val)}
                placeHolder={'Enter Mobile No.'}
                mt={moderateVerticalScale(30)}
              />
            </View>
            //#endregion
          }

          {
            //#region  Next Button
            <View>
              <Button
                onPress={() => submitHandler()}
                width={'100%'}
                mt={moderateVerticalScale(20)}
                text={'Submit'}
              />
            </View>
            //#region
          }

          <View style={{marginTop: moderateScale(30)}}>
            <Text14
              textAlign="center"
              color={colors.gray}
              fontFamily={fonts.regular}
              text={`By regestering, you are agreeing to Mobox’s `}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontFamily: fonts.regular,
              }}>
              Terms & Conditions <Text14 color={colors.gray} text={' and '} />
              and Privacy and Polcies
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Step5;
