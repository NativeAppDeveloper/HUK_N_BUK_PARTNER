import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {signupData} from '../../../utils/localVariable';
import {getCityListServices, getStateListServices} from '../../../services/Services';

import {Country, State, City} from 'country-state-city';
import { errorTost } from '../../../utils/Helper';

const Step2 = () => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  const [stateList, setStateList] = useState([]);
  const [cityList,setCityList]=useState([])
  const [isoCode,setIsoCode]=useState('')
  const [selectedCity,setSelectedCity]=useState('')
  const [stateName,setStateName]=useState('')
  // console.log(signupData);

  // console.log(State.getAllStates())

  console.log(stateName,selectedCity)

  const getStateList = async () => {
    try {
      let response = await getStateListServices();
      console.log(response.data);
      let temp=response.data.states.map((d)=>{
        return {
          label:d.name,
          value:d.isoCode
        }
      })
      setStateList(temp);
    } catch (error) {
      console.log(error, 'tooo');
    }
  };

  const getCityList = async (isoCode) => {
    try {
      let response = await getCityListServices(isoCode);

      console.log(response.data)
      let temp=response.data.cities.map((d)=>{
        return {
          label:d.name,
          value:d.name
        }
      })
      setCityList(temp);
    } catch (error) {
      console.log(error, 'tooo');
    }
  };


  const submitHandler=()=>{
    if(isoCode==''){
      errorTost('Please select state')
      return
    }
    if(selectedCity==''){
      errorTost('Please select city')
      return
    }
    signupData.state=stateName,
    signupData.city=selectedCity
    navigation.navigate('Step5')
    }

  useEffect(() => {
    getStateList();
  }, []);

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
              dropDownData={stateList}
              width={'100%'}
              placeholder={'Select State'}
              value={isoCode}
              onChange={item =>{
                getCityList(item.value)
                setIsoCode(item.value)
                setStateName(item.label)
              }}
            />

            <CustomDropDown
              dropDownData={cityList}
              value={selectedCity}
              width={'100%'}
              placeholder={'Select city'}
              onChange={item =>setSelectedCity(item.value)}
            />
          </View>
          //#endregion
        }

        <View style={{alignSelf: 'center', width: '100%'}}>
          {
            //#region  Next Button
            <View>
              <Button
                onPress={() =>submitHandler()}
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
