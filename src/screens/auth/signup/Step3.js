import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import CustomDropDown from '../../../component/common/CustomDropDown';
import Text12 from '../../../component/customText/Text12';
import {CheckIcon} from 'react-native-heroicons/solid';
import {errorTost} from '../../../utils/Helper';
import {getVehicleCategoryServices} from '../../../services/Services';
import {useIsFocused} from '@react-navigation/native';
import {signupData} from '../../../utils/localVariable';
import { useDispatch } from 'react-redux';
import { showLoader } from '../../../utils/Helper';
import { closeLoader } from '../../../utils/Helper';

const Step3 = () => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  const [selectedVechicle, setSelectedVechile] = useState(null);
  const isFocused = useIsFocused();
  const [carCategory, setCarCategory] = useState();
  const dispatch=useDispatch()

  // [
  //   {
  //     name: 'Hatchback',
  //     seat: '4 Seats',
  //     img: icon.car2,
  //   },
  //   {
  //     name: 'Sedan',
  //     seat: '5 Seats',
  //     img: icon.car3,
  //   },
  //   {
  //     name: 'SUV',
  //     seat: '7 Seats',
  //     img: icon.car1,
  //   },
  //   {
  //     name: 'Traveller',
  //     seat: '12 Seats',
  //     img: icon.omini,
  //   },
  //   {
  //     name: 'Bus',
  //     seat: '20 Seats',
  //     img: icon.bus,
  //   },
  // ]

  const categoryList = async () => {
    try {
      dispatch(showLoader)
      let response = await getVehicleCategoryServices();
      setCarCategory(response.data.result);
      dispatch(closeLoader)

    } catch (error) {
      dispatch(closeLoader)
      console.log(error, '=-3030');
      console.log(error.response), '-0-0-0-0';
    }
  };

  const nextHandler = () => {
    if (selectedVechicle == null) {
      errorTost('Please selected vehicle category');
      return;
    }
    signupData.vehicleCategoryId = selectedVechicle;
    navigation.navigate('Step5');
  };

  const images = {
    hatchback: icon.car2,
    sedan: icon.car3,
    suv: icon.car1,
    traveller: icon.omini,
    bus: icon.bus,
  };

  const vehicleImages = item => {
    return images[item];
  };

  useEffect(() => {
    categoryList();
    // if(isFocused){
    //   categoryList()
    // }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{width: '90%', alignSelf: 'center', flex: 1}}>
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
            <Text24 color={colors.theme} text={'Select Vehicle Category'} />
          </View>
          //#endregion
        }
        <ScrollView contentContainerStyle={{paddingBottom: moderateScale(100)}}>
          <View
            style={{
              alignSelf: 'center',
              width: '100%',
              marginTop: moderateScale(20),
            }}>
            {
              //#region  Next Button
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                  }}>
                  {carCategory?.map((ele, ind) => {
                    return (
                      <TouchableOpacity
                        key={ind}
                        onPress={() => setSelectedVechile(ele._id)}
                        style={{
                          backgroundColor:
                            ele._id == selectedVechicle
                              ? colors.theme
                              : colors.white,
                          width: '47%',
                          borderRadius: 8,
                          marginVertical: moderateScale(10),
                          alignItems: 'center',
                          borderWidth: 1,
                          borderColor: colors.borderC,
                          paddingVertical: moderateScale(10),
                        }}>
                        {ele._id == selectedVechicle && (
                          <View
                            style={{
                              height: moderateScale(20),
                              width: moderateScale(20),
                              borderRadius: moderateScale(100),
                              backgroundColor: colors.yellow,
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'absolute',
                              right: moderateScale(10),
                              marginTop: moderateScale(10),
                            }}>
                            <CheckIcon
                              color={colors.white}
                              size={moderateScale(15)}
                            />
                          </View>
                        )}
                        <View style={styles.container2}>
                          <Image
                            resizeMode="contain"
                            style={CommonStyle.img}
                            // source={vehicleImages(ele.categoryTypeName)}
                            source={{uri: ele?.categoryTypeIcon}}
                          />
                        </View>

                        <Text14
                          textAlign={'center'}
                          text={ele.categoryTypeName}
                          fontFamily={fonts.bold}
                          color={
                            ele._id == selectedVechicle
                              ? colors.white
                              : colors.theme
                          }
                          mt={1}
                        />

                        <Text12
                          textAlign={'center'}
                          text={ele.seat}
                          fontFamily={fonts.bold}
                          color={
                            ind == selectedVechicle ? colors.white : colors.gray
                          }
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
              //#region
            }
          </View>
        </ScrollView>

        <View
          style={{
            position: 'absolute',
            width: '100%',
            bottom: moderateScale(10),
          }}>
          <Button
            onPress={() => nextHandler()}
            width={'100%'}
            mt={moderateVerticalScale(40)}
            text={'Next'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Step3;

const styles = StyleSheet.create({
  container2: {
    height: moderateScale(70),
    width: moderateScale(120),
  },
});
