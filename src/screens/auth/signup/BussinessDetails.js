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
import UploadModal from '../../../component/modal/UploadModal';
import {signupServices} from '../../../services/Services';
import { signupData } from '../../../utils/localVariable';

const BussinessDetails = () => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  const [uploadModal, setUploadModal] = useState(false);
  const [url, setUrl] = useState('');
  const [type, setType] = useState('');

  const [bussinessDetails, setBussinessDetails] = useState({
    bussinessName: '',
    location: '',
    bussinessAddress: '',
    gstNumber: '',
    gstCertificate: '',
    panCardNumber: '',
    panCard: '',
  });

  console.log(bussinessDetails);

  const onChangeHandler = (name, val) => {
    setBussinessDetails(pre => ({
      ...pre,
      [name]: val,
    }));
  };

  console.log(signupData)

  const signUpHandeler = async () => {
    
    let payLoad = {
      vehicleCategoryId: signupData.vehicleCategoryId,
      firstName:signupData.step1.firstName,
      city:signupData.city,
      state:signupData.state,
      lastName:signupData.step1.lastName,
      phoneNumber:signupData.mobile,
      businessName:bussinessDetails.bussinessName,
      location:'lslslslslslslslss',
      email:'sac123@gmai.com',
      businessAddress: 'Sachin',
      gstNumber: 'sgtnumber',
      gstCertificate: bussinessDetails.gstCertificate,
      panNumber: '1223333',
      panCertificate:bussinessDetails.panCard,
    };
    try {
      let response = await signupServices(payLoad);
      console.log(response.data)
      navigation.navigate('RegistrationComplete')
      console.log('i  am don')
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const imageHandler = () => {};
  return (
    <SafeAreaView>
      <View style={{width: '90%', alignSelf: 'center'}}>
        {
          //#region header
          <SignupSeteps step={'Step 2/2'} />
          //#endregion
        }

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: moderateScale(100)}}>
          <View>
            {
              //#region  headet text
              <View style={{marginTop: moderateVerticalScale(20)}}>
                <Text24 text={'Business Details'} />
                <Text14
                  fontFamily={fonts.regular}
                  color={colors.gray}
                  text={`Enter Business Details`}
                />
              </View>
              //#endregion
            }

            <View style={{alignSelf: 'center', width: '100%'}}>
              {
                //#region Name Components
                <View style={{width: '100%'}}>
                  <Input
                    value={bussinessDetails.name}
                    onChangeText={(val) => onChangeHandler('bussinessName', val)}
                    placeHolder={'Busines Name'}
                    mt={moderateVerticalScale(20)}
                  />

                  <View style={{}}>
                    <Input
                      placeHolder={'Location'}
                      mt={moderateVerticalScale(25)}
                    />
                    <Image
                      style={{
                        tintColor: colors.black,
                        height: moderateScale(20),
                        width: moderateScale(20),
                        position: 'absolute',
                        alignSelf: 'flex-end',
                        right: moderateScale(10),
                        top: moderateScale(40),
                      }}
                      source={icon.current}
                    />
                  </View>

                  <Input
                    value={bussinessDetails.bussinessAddress}
                    onChangeText={(val) =>
                      onChangeHandler('bussinessAddress', val)
                    }
                    placeHolder={'Business Address'}
                    mt={moderateVerticalScale(20)}
                  />

                  <Input
                    value={bussinessDetails.gstNumber}
                    onChangeText={(val) => onChangeHandler('gstNumber', val)}
                    placeHolder={'GST Number'}
                    mt={moderateVerticalScale(20)}
                  />

                  <View
                    style={{
                      marginTop: moderateScale(20),
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        setType('gstCertificate');
                        setUploadModal(true);
                      }}
                      style={{
                        width: moderateScale(90),
                        height: moderateScale(90),
                        justifyContent: 'center',
                        backgroundColor: colors.white,
                        alignItems: 'center',
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: colors.borderC,
                      }}>
                      <Image
                        style={{
                          height: moderateScale(50),
                          width: moderateScale(50),
                        }}
                        resizeMode="contain"
                        source={
                          bussinessDetails?.gstCertificate == ''
                            ? icon.upload
                            : {uri: bussinessDetails?.gstCertificate}
                        }
                      />
                    </TouchableOpacity>
                    <Text14
                      mt={1}
                      color={colors.placeholderColor}
                      text={'  Upload GST Certificate'}
                    />
                  </View>

                  <Input
                    value={bussinessDetails.panCardNumber}
                    onChangeText={(val) => onChangeHandler('panCardNumber', val)}
                    placeHolder={'PAN Card Number '}
                    mt={moderateVerticalScale(20)}
                  />

                  <View
                    style={{
                      marginTop: moderateScale(20),
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        setType('panCard');
                        setUploadModal(true);
                      }}
                      style={{
                        width: moderateScale(90),
                        height: moderateScale(90),
                        justifyContent: 'center',
                        backgroundColor: colors.white,
                        alignItems: 'center',
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: colors.borderC,
                      }}>
                      <Image
                        style={{
                          height: moderateScale(50),
                          width: moderateScale(50),
                        }}
                        resizeMode="contain"
                        source={
                          bussinessDetails?.panCard == ''
                            ? icon.upload
                            : {uri: bussinessDetails?.panCard}
                        }
                      />
                    </TouchableOpacity>
                    <Text14
                      mt={1}
                      color={colors.placeholderColor}
                      text={'  Upload PAN Card'}
                    />
                  </View>
                </View>
                //#endregion
              }

              {
                //#region  Next Button
                <View style={{marginBottom: moderateScale(80)}}>
                  <Button
                    onPress={() => signUpHandeler()}
                    width={'100%'}
                    mt={moderateVerticalScale(45)}
                    text={'Next'}
                  />
                </View>
                //#region
              }
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>

      <UploadModal
        uploadModal={uploadModal}
        setUploadModal={setUploadModal}
        inital={bussinessDetails}
        update={setBussinessDetails}
        type={type}
      />
    </SafeAreaView>
  );
};

// export default Step5

export default BussinessDetails;
