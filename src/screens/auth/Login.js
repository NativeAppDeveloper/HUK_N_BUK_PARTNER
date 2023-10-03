import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icon, images} from '../../utils/Image';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {CommonStyle, colors, fonts} from '../../utils/Styles';
import Text14 from '../../component/customText/Text14';
import Input from '../../component/customInput/Input';
import Button from '../../component/customButton/Button';
import Text12 from '../../component/customText/Text12';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {commonPadding, errorTost} from '../../utils/Helper';
import Text18 from '../../component/customText/Text18';
import Text10 from '../../component/customText/Text10';
import Text24 from '../../component/customText/Text24';
import { checkPhoneEmailSercvies } from '../../services/Services';
import { signUpFlow } from '../../utils/localVariable';

const Login = ({route}) => {
  const navigation = useNavigation();
  const paramData = route?.params?.flow;
  const [mobile,setMobile]=useState('')

  const SubmitHandler=async()=>{

    // navigation.navigate('Otp', {mobile:mobile})

    if(mobile==""){
      errorTost('Please enter mobile number')
      return
    }
    if(mobile.length<9){
      errorTost('Please enter valid mobile number')
      return
    }

    signUpFlow.flow='login'


    let payload={
      phoneNumber:mobile,
      email:''
    }

    console.log(payload)
    try {
      let response = await checkPhoneEmailSercvies(payload)
      console.log(response.data)
      // return
    navigation.navigate('LoginOtp', {flow: paramData,mobile:mobile})

    } catch (error) {
      // navigation.navigate('LoginOtp', {flow: paramData,mobile:mobile})

      console.log(error.response.data,'checkPhoneEmailSercvies')
    }
  }


  console.log(signUpFlow,'dskjfhsjkdfhsdjf')
  
  
  return (
    <>
    <SafeAreaView  style={{
      backgroundColor:colors.theme
    }}/>
        <KeyboardAwareScrollView contentContainerStyle={{width: '100%', flex: 1,}}>
      <StatusBar backgroundColor={colors.theme} barStyle={'light-content'} />
      <View style={styles.container}>
        <View
          style={{
            width: '100%',
            // alignItems: 'center',
            // marginTop: moderateScale(90),
          }}>
          <View
            style={styles.innercontainer}>
            {signUpFlow.flow == 'Signup' && (
              <TouchableOpacity>
                <Image
                  source={icon.backBtn}
                  style={styles.text}
                />
              </TouchableOpacity>
            )}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{height: moderateScale(50), width: scale(50)}}>
                <Image
                  resizeMode="contain"
                  style={CommonStyle.img}
                  source={require('../../assets/icon/logo.png')}
                />
              </View>
              <Text18 color={colors.white} text={'  Huk n Buk'} />
              {/* <Text10 text={''} */}
            </View>

            <View style={{paddingTop: moderateScale(20)}}>
              <Text24 text={'Mobile Number'} color={colors.white} />
              <Text14

                text={'Enter your mobile number'}
                fontFamily={fonts.regular}
                color={colors.secondry}
              />
            </View>
          </View>

          {
            //#region input container
            <View style={{marginTop: moderateScale(20)}}>
              <View
                style={styles.box}>
                <Text14 text={'+91'} color={colors.theme} mt={1} />
                <TextInput
                onChangeText={(val)=>setMobile(val)}
                value={mobile}
                keyboardType='number-pad'
                  maxLength={10}
                  placeholderTextColor={colors.gray}
                  placeholder="  Mobile no."
                  style={{
                    fontFamily: fonts.medium,
                    color: colors.black,
                    width: '90%',
                    paddingVertical:Platform.OS=='ios'?moderateScale(14):moderateScale(5)
                  }}
                />
              </View>

              <Button
                onPress={() => SubmitHandler()}
                mt={moderateScale(40)}
                text={'Submit'}
              />

              <View style={{marginTop: moderateScale(30)}}>
                <Text14
                  textAlign="center"
                  color={colors.gray}
                  fontFamily={fonts.regular}
                  text={`By regestering, you are agreeing to Huk n Buk’s `}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontFamily: fonts.regular,
                  }}>
                  Terms & Conditions{' '}
                  <Text14 color={colors.gray} text={' and '} />
                   Privacy and Polcies
                </Text>
              </View>
            </View>
            //#endregion
          }

          
        </View>
       
      </View>

      <View
          style={{
            position: 'absolute',
            bottom: moderateVerticalScale(10),
            flexDirection: 'row',
            alignSelf:"center"
          }}>
          <Text14
            color={colors.secondry}
            fontFamily={fonts.regular}
            text={'New user ?'}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Step1')}>
            <Text14
              color={colors.theme}
              fontFamily={fonts.regular}
              text={' Register here'}
            />
          </TouchableOpacity>
        </View>
    </KeyboardAwareScrollView>
    </>

  );
};

const styles = StyleSheet.create({
  text: {
    height: moderateScale(35),
    width: moderateScale(35),
    tintColor: colors.white,
    marginBottom: moderateScale(20),
  },
  innercontainer: {
    backgroundColor: colors.theme,
    paddingHorizontal: commonPadding,
    paddingVertical: moderateScale(15),
  },
  box: {
    backgroundColor: colors.white,
    marginTop: moderateScale(20),
    paddingVertical: moderateScale(5),
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.borderC,
    paddingHorizontal: scale(10),
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
export default Login;
