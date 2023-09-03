import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateVerticalScale, scale} from 'react-native-size-matters';
import Text24 from '../../../component/customText/Text24';
import Text14 from '../../../component/customText/Text14';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import Input from '../../../component/customInput/Input';
import Button from '../../../component/customButton/Button';
import {icon} from '../../../utils/Image';
import SignupSeteps from '../../../component/common/SignupSeteps';
import {useNavigation} from '@react-navigation/core';
import CustomDropDown from '../../../component/common/CustomDropDown';

const Step2 = () => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{width: '90%', alignSelf: 'center'}}>
        {
          //#region header
          <SignupSeteps

          // step={'Step 1/5'}
          />
          //#endregion
        }

        {
        //   #region  headet text
          <View style={{marginTop: moderateVerticalScale(20)}}>
            <Text24 color={colors.theme} text={'Select Your City'} />
            <Text14
              fontFamily={fonts.regular}
              color={colors.secondry}
              text={`Please choose your place of residence.`}
            />
        <CustomDropDown
        width={'100%'}
        placeholder={'Select State'}
        onChange={(item)=>console.log('2222')}
        />


        <CustomDropDown
        width={'100%'}
        placeholder={'Select city'}
        onChange={(item)=>console.log('2222')}
        />
        </View>
          //#endregion
        }

        <View style={{alignSelf: 'center', width: '100%'}}>
          {
            //#region  Next Button
            <View>
              <Button
                onPress={() => navigation.navigate('Step3')}
                width={'100%'}
                mt={moderateVerticalScale(40)}
                text={'Next'}
              />
            </View>
            //#region
          }
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Step2;
