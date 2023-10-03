import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from 'react-native';
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {closeLoader, errorTost, showLoader, width} from '../../../utils/Helper';
import Validator from '../../../utils/Validator';
import {
  addDriverServices,
  assignDriverServices,
} from '../../../services/Services';
import {useDispatch} from 'react-redux';
import toastShow from '../../../utils/Toast';

const AddDriver = () => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [driverDetails, setDriverDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  const onChangeHandler = (name, val) => {
    setDriverDetails(pre => ({
      ...pre,
      [name]: val,
    }));
  };

  console.log(driverDetails, 'un');

  const validationHandler = () => {
    Validator.isEmpty(driverDetails?.firstName)
      ? errorTost('Please enter first name')
      : Validator.isEmpty(driverDetails?.lastName)
      ? errorTost('Please enter last name')
      : Validator.isEmpty(driverDetails?.phoneNumber)
      ? errorTost('Please enter mobile number')
      : addDriverHandler();
  };

  const addDriverHandler = async () => {
    try {
      dispatch(showLoader);
      let response = await addDriverServices(driverDetails);
      console.log(response.data);
      dispatch(closeLoader);
    } catch (error) {
      dispatch(closeLoader);
      errorTost(error.response.data.message);
      console.log(error.response.data);
    }
  };

  
  // const
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{width: '90%', alignSelf: 'center'}}>
        {
          //#region header
          <SignupSeteps

          // step={'Step 1/5'}
          />
          //#endregion
        }

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: moderateScale(200)}}>
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
                  value={driverDetails?.firstName}
                  mt={moderateVerticalScale(30)}
                  onChangeText={val => onChangeHandler('firstName', val)}
                />
                <Input
                  value={driverDetails?.lastName}
                  placeHolder={'Last Name'}
                  mt={moderateVerticalScale(20)}
                  onChangeText={val => onChangeHandler('lastName', val)}
                />

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
                    value={driverDetails?.phoneNumber}
                    onChangeText={val => onChangeHandler('phoneNumber', val)}
                    keyboardType="number-pad"
                    maxLength={10}
                    placeholderTextColor={colors.placeholderColor2223}
                    placeholder="  Contact Number"
                    style={{
                      fontFamily: fonts.medium,
                      width: '90%',
                      paddingVertical:
                        Platform.OS == 'ios' ? moderateScale(10) : 3,
                      color: colors.secondry,
                    }}
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
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: width,
            bottom: moderateScale(30),
          }}>
          <Button
            onPress={
              () => validationHandler()
              // navigation.navigate('DriverList')
            }
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
