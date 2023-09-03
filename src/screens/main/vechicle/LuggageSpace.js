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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {MinusIcon, PlusIcon} from 'react-native-heroicons/solid';
import Text12 from '../../../component/customText/Text12';

const LuggageSpace = ({route}) => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  const paramData = route?.params?.item;
  const [prefrence,setPrefrence]=useState(1)
  return (
    <SafeAreaView>
      <View style={{width: '90%', alignSelf: 'center'}}>
        {
          //#region header
          <SignupSeteps step={'Step 6/6'} />
          //#endregion
        }

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: moderateScale(100)}}>
          <View>
            {
              //#region  headet text
              <View style={{marginTop: moderateVerticalScale(20)}}>
                <Text24 text={'Luggage Space'} />
                <Text14
                  fontFamily={fonts.regular}
                  color={colors.gray}
                  text={`Enter Vehicle luggage space`}
                />
              </View>
              //#endregion
            }

            <View style={{alignSelf: 'center', width: '100%'}}>
              {
                //#region Name Components
                <View style={{width: '100%', marginTop: moderateScale(40)}}>
                  <View>
                    <Text14
                      color={colors.secondry}
                      text={'Small ( 55 cm * 30 cm )'}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: moderateScale(20),
                      }}>
                      <TouchableOpacity
                        style={{
                          height: moderateScale(35),
                          width: moderateScale(35),
                          borderWidth: 1,
                          borderRadius: 100,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <MinusIcon color={colors.black} />
                      </TouchableOpacity>
                      <View style={{marginHorizontal: scale(15)}}>
                        <Text24 text={1} fonts={fonts.bold} />
                      </View>

                      <TouchableOpacity
                        style={{
                          height: moderateScale(35),
                          width: moderateScale(35),
                          borderWidth: 1,
                          borderRadius: 100,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <PlusIcon color={colors.black} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{marginTop: moderateScale(20)}}>
                    <Text14
                      color={colors.secondry}
                      text={'Medium ( 65 cm * 40 cm )'}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: moderateScale(20),
                      }}>
                      <TouchableOpacity
                        style={{
                          height: moderateScale(35),
                          width: moderateScale(35),
                          borderWidth: 1,
                          borderRadius: 100,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <MinusIcon color={colors.black} />
                      </TouchableOpacity>
                      <View style={{marginHorizontal: scale(15)}}>
                        <Text24 text={1} fonts={fonts.bold} />
                      </View>

                      <TouchableOpacity
                        style={{
                          height: moderateScale(35),
                          width: moderateScale(35),
                          borderWidth: 1,
                          borderRadius: 100,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <PlusIcon color={colors.black} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{marginTop: moderateScale(20)}}>
                    <Text14
                      color={colors.secondry}
                      text={'Large ( 75 cm * 45.5 cm )'}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: moderateScale(20),
                      }}>
                      <TouchableOpacity
                        style={{
                          height: moderateScale(35),
                          width: moderateScale(35),
                          borderWidth: 1,
                          borderRadius: 100,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <MinusIcon color={colors.black} />
                      </TouchableOpacity>
                      <View style={{marginHorizontal: scale(15)}}>
                        <Text24 text={1} fonts={fonts.bold} />
                      </View>

                      <TouchableOpacity
                        style={{
                          height: moderateScale(35),
                          width: moderateScale(35),
                          borderWidth: 1,
                          borderRadius: 100,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <PlusIcon color={colors.black} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                //#endregion
              }

              {
                //#region  carrer Carrier Preference:
                <View style={{marginTop:moderateScale(30)}}>
                    <Text14 text={'Carrier Preference:'}/>

                    <View style={{flexDirection:'row',alignItems:'center',marginTop:moderateScale(20)}}>
                        <TouchableOpacity 
                        onPress={()=>setPrefrence(1)}
                        style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={{height:22,width:22}}>
                            <Image style={CommonStyle.img}  source={prefrence==1?icon.off:icon.on}/>
                            </View>
                            <Text12 color={colors.secondry} text={'   With Carrier'}/>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={()=>setPrefrence(2)}
                        style={{flexDirection:'row',alignItems:'center',marginLeft:moderateScale(20)}}>
                            <View style={{height:22,width:22}}>
                            <Image style={CommonStyle.img}  source={prefrence==2?icon.off:icon.on}/>
                            </View>
                            <Text12 color={colors.secondry} text={'   Without Carrier'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                //#endregion
              }

              {
                //#region  Next Button
                <View style={{marginBottom: moderateScale(80)}}>
                  <Button
                    onPress={() => navigation.navigate('AddVechicle',{flow:1})}
                    width={'100%'}
                    mt={moderateVerticalScale(55)}
                    text={'Next'}
                  />
                </View>
                //#region
              }
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LuggageSpace;
