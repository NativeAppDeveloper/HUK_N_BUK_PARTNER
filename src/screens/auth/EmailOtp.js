import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text24 from '../../component/customText/Text24';
import Text14 from '../../component/customText/Text14';
import {CommonStyle, colors, fonts} from '../../utils/Styles';
import SignupSeteps from '../../component/common/SignupSeteps';
import Button from '../../component/customButton/Button';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {signUpFlow, signupData} from '../../utils/localVariable';
import {
  getOtpFromEmailServices,
  getOtpFromMobileServices,
  verifyEmailOtpServices,
  verifyMobileOtpServices,
} from '../../services/Services';
import {icon} from '../../utils/Image';
import {errorTost, sucessTost} from '../../utils/Helper';

const EmailOtp = ({route, navigation}) => {
  // const navigation = useNavigation();
  const paramData = route?.params?.flow;
  const mobile = route?.params?.mobile;
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  // define all state here
  const [openFlag, setOpenFlag] = useState(false);
  const [matchOtp, setMatchOtp] = useState('');
  const [enterOtp, setEnterOtp] = useState('');
  const [seconds, setSeconds] = useState(10);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const [clearOtp,setClearOtp]=useState(false)
  useEffect(() => {
    // if(paramData=='e')
    // getOtp1()
  }, []);

  // verify otp form firebase
  const handleFirebaseOTP = async () => {
    if (code == '') {
      errorTost('Please enter otp');
      return;
    }
    if (code.length < 6) {
      errorTost('Please enter valid');
      return;
    }
    try {
      const cred = auth.PhoneAuthProvider.credential(verificationCode, code);
      let userData = await auth().signInWithCredential(cred);
      dispatch({
        type: 'CHANGE_STACK',
        payload: 'MAIN',
      });
      console.log('******&&&check new uid', userData);
      // handleEmailotp()
    } catch (error) {
      if (error.code == 'auth/invalid-verification-code') {
        errorTost('Otp does not match');
      } else {
        toastShow(error.code);
      }
    }
  };

  // This api use for sent otp user email
  const getOtpFormEmail = async () => {
    console.log('in')
    let payLoad = {
      email: signupData.email,
      phoneNumber: signupData.mobile,
    };

    console.log(payLoad)
    try {
      let response = await getOtpFromEmailServices(payLoad);
      sucessTost('123456')
      console.log(response.data, 'got ir');
      // console.log(response.data);
    } catch (error) {s
      console.log(error, '-0-0-0-');
    }
  };

  // This api used for sent otp user mobile
  const getOtpFormMobile = async () => {
    let payLoad = {
      phoneNumber: signupData.mobile,
    };
    try {
      let response = await getOtpFromMobileServices(payLoad);
      sucessTost(response?.data?.user?.otp)
      
      // console.log(response.data);
    } catch (error) {
      console.log(error, '-0-0-0-');
    }
  };

  // This api verify emil otp
  const handleEmailotp = async () => {
    let payload = {
      email: signupData.email,
      otp: enterOtp,
    };

    console.log(payload);
    try {
      let response = await verifyEmailOtpServices(payload);
      console.log(response.data,'=-=-=-');
      setOpenFlag(true)
      setEnterOtp('')
      navigation.navigate('BussinessDetails');
      console.log(response);
    } catch (error) {
      console.log(error);

      errorTost(
        error?.response?.data.code == 409
          ? error?.response?.data?.message
          : 'Some thing went wrong',
      );
    }
  };

  const handleMobileotp = async () => {
    let payload = {
      phoneNumber: signupData.mobile,
      otp: enterOtp,
    };
    try {
      let response = await verifyMobileOtpServices(payload);
      setEnterOtp('')
      setOpenFlag(false)
      setClearOtp(true)
      console.log(response.data);
      navigation.navigate('Step4');
      // navigation.navigate('BussinessDetails');
      console.log(response);
    } catch (error) {
      console.log(payload)
      errorTost(
        error?.response?.data.code == 409
          ? error?.response?.data?.message
          : 'Some thing went wrong',
      );
      console.log(error.response.data);
    }
  };

  const verfiyHandler = async () => {
    {
      setEnterOtp('');
      if (signUpFlow.flow == 'mobile') {
        handleMobileotp();
      }
      if (signUpFlow.flow == 'email') {
        handleEmailotp();
      }
    }
  };

  const checkFlow = () => {
    if (signUpFlow.flow == 'email') {
      getOtpFormEmail();
    } else {
      getOtpFormMobile();
    }
  };

  useEffect(() => {
    if (isFocused) {
      checkFlow();
      setClearOtp(false)
    }
  }, [isFocused]);

  console.log(signUpFlow);

  // timer start
  // timer start
  //   useEffect(() => {
  //     if (isFocused) {
  //         let interval = null;
  //         if (isTimerRunning) {
  //             interval = setInterval(() => {
  //                 setSeconds((seconds) => {
  //                     if (seconds === 0) {
  //                         clearInterval(interval);
  //                         setIsTimerRunning(false);
  //                         return 10;
  //                     }
  //                     return seconds - 1;
  //                 });
  //             }, 1000);
  //         }
  //         return () => clearInterval(interval);
  //     }
  // }, [isTimerRunning, isFocused]);

  console.log(enterOtp)

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView bounces={false} extraHeight={moderateScale(100)}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <View
            style={{
              paddingVertical: moderateVerticalScale(10),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => {
                // if (signUpFlow.flow == 'email') {
                //   navigation.navigate('Step4');
                // } else {
                  navigation.goBack();
                // }
              }}>
              <View
                style={{
                  height: moderateVerticalScale(30),
                  width: moderateVerticalScale(30),
                }}>
                <Image style={[CommonStyle.img]} source={icon.backBtn} />
              </View>
            </TouchableOpacity>
            <View>
              {/* <Text14 fontFamily={fonts.regular} text={step} /> */}
            </View>
          </View>
          <Text24 mt={30} text={'OTP Verification'} />
          <Text14
            mt={10}
            color={colors.gray}
            text={`We have sent you a 6 digit verification code on `}
          />
          <Text14
            text={
              signUpFlow.flow == 'email' ? signupData.email : `+91 ${mobile}`
            }
          />
          <OTPInputView
            style={{
              width: '100%',
              height: moderateScale(100),
              alignSelf: 'center',
            }}
            pinCount={6}
            
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged = {code => {setEnterOtp(code)}}
            autoFocusOnLoad={openFlag}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            // clearInputs={openFlag}
            onCodeFilled={code => {
              setEnterOtp(code);
              console.log(`Code is ${code}, you are good to go!`);
            }}
            clearInputs={clearOtp}
          />
          <Button
            onPress={() => verfiyHandler()}
            width={'100%'}
            mt={moderateVerticalScale(20)}
            text={'Verify'}
          />
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text14
                textAlign={'center'}
                mt={25}
                color={colors.secondry}
                text={
                  paramData == 'email'
                    ? 'Change my email id'
                    : 'Change my mobile number'
                }
              />
            </TouchableOpacity>
          </View>
          {/* <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
            <Text14 fontFamily={fonts.regular} color={colors.secondry}  text={'Resend Otp ? '}/>
            <Text14 text={seconds}/>
          </View> */}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: scale(45),
    height: moderateVerticalScale(53),
    borderRadius: moderateScale(8),
    color: 'black',
    fontFamily: 'PlusJakartaSans-ExtraBold',
    backgroundColor: colors.white,
  },

  underlineStyleHighLighted: {
    // borderColor: colors.theme,
  },
});

export default EmailOtp;
