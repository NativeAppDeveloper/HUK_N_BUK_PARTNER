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
import CustomDropDown from '../../../component/common/CustomDropDown';
import Text12 from '../../../component/customText/Text12';
import {CheckIcon} from 'react-native-heroicons/solid';

const Step3 = () => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  const [selectedVechicle, setSelectedVechile] = useState(null);
  const [carCategory, setCarCategory] = useState([
    {
      name: 'Hatchback',
      seat: '4 Seats',
      img: icon.car2,
    },
    {
      name: 'Sedan',
      seat: '5 Seats',
      img: icon.car3,
    },
    {
      name: 'SUV',
      seat: '7 Seats',
      img: icon.car1,
    },
    {
      name: 'Traveller',
      seat: '12 Seats',
      img: icon.omini,
    },
    {
      name: 'Bus',
      seat: '20 Seats',
      img: icon.bus,
    },
  ]);

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
            <Text24 color={colors.theme} text={'Select Vehicle Category'} />
          </View>
          //#endregion
        }

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
                {carCategory.map((ele, ind) => {
                  return (
                    <TouchableOpacity
                      onPress={() => setSelectedVechile(ind)}
                      style={{
                        backgroundColor:
                          ind == selectedVechicle ? colors.theme : colors.white,
                        width: '47%',
                        borderRadius: 8,
                        marginVertical: moderateScale(10),
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: colors.borderC,
                        paddingVertical: moderateScale(10),
                      }}>

                      {ind==selectedVechicle&&
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
                      }
                      <View
                        style={{
                          height: moderateScale(70),
                          width: moderateScale(120),
                        }}>
                        <Image
                          resizeMode="contain"
                          style={CommonStyle.img}
                          source={ele.img}
                        />
                      </View>

                      <Text14
                        textAlign={'center'}
                        text={ele.name}
                        fontFamily={fonts.bold}
                        color={
                          ind == selectedVechicle ? colors.white : colors.theme
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
              <Button
                onPress={() => navigation.navigate('Login',{flow:'Signup'})}
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

export default Step3;
