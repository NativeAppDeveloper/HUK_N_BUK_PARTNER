import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text24 from '../../component/customText/Text24';
import Text14 from '../../component/customText/Text14';
import {colors, fonts} from '../../utils/Styles';
import SignupSeteps from '../../component/common/SignupSeteps';
import Button from '../../component/customButton/Button';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {signUpFlow, signupData} from '../../utils/localVariable';
import {
  getLoginOtpServices,
  getOtpFromEmailServices,
  loginVerifiyServices,
  verifyEmailOtpServices,
} from '../../services/Services';
import {setData} from '../../services/AsyncServices';
import { closeLoader, showLoader } from '../../utils/Helper';

const LoginOtp = ({route}) => {
  const navigation = useNavigation();
  const paramData = route?.params?.flow;
  const mobile = route?.params?.mobile;
  const dispatch = useDispatch();

  console.log(signUpFlow, 'yess');

  console.log(mobile);
  const btnHandler = () => {
    dispatch({
      type: 'CHANGE_STACK',
      payload: 'MAIN',
    });
  };

  const isFocused = useIsFocused();

  // define all state here
  const [openFlag, setOpenFlag] = useState(false);
  const [matchOtp, setMatchOtp] = useState('');
  const [enterOtp, setEnterOtp] = useState('');
  const [seconds, setSeconds] = useState(10);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const getOtpFormEmail = async () => {
    console.log('1234');
    let payLoad = {
      phoneNumber: mobile,
    };
    try {
      let response = await getLoginOtpServices(payLoad);
      console.log(response.data, 'got ir');
      // console.log(response.data);
    } catch (error) {
      console.log(error, '-0-0-0-');
    }
  };

  const handleEmailotp = async () => {
    dispatch(showLoader)
    let payload = {
      phoneNumber: mobile,
      otp: '123456',
    };
    try {
      let response = await loginVerifiyServices(payload);
      console.log(response.data, 'yessssssss');
      setData('token',response.data.token)
      dispatch(closeLoader)
      dispatch({
        type: 'CHANGE_STACK',
        payload: 'MAIN',
      });
      console.log(response);
    } catch (error) {
      dispatch(closeLoader)
      console.log(error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getOtpFormEmail();
    }
  }, [isFocused]);

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

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView bounces={false} extraHeight={moderateScale(100)}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <SignupSeteps step={''} />
          <Text24 mt={30} text={'OTP Verification'} />

          <Text14
            mt={10}
            color={colors.gray}
            text={`We have sent you a 6 digit verification code on `}
          />
          <Text14 text={mobile} />

          <OTPInputView
            style={{
              width: '100%',
              height: moderateScale(100),
              alignSelf: 'center',
            }}
            pinCount={6}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={code => setEnterOtp(code)}
            autoFocusOnLoad={openFlag}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              setEnterOtp(code);
              console.log(`Code is ${code}, you are good to go!`);
            }}
            // clearInputs={}
          />
          <Button
            onPress={() => {
              handleEmailotp();
            }}
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
                text={'Change my mobile number'}
              />
            </TouchableOpacity>
          </View>
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

export default LoginOtp;
