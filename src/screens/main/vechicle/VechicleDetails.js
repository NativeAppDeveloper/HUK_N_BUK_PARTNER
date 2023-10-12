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
import Validator from '../../../utils/Validator';
import {errorTost} from '../../../utils/Helper';
import {addVehicleServices} from '../../../services/Services';
import { vechicleId } from '../../../utils/localVariable';

const VechicleDetails = ({route}) => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  const paramData = route?.params?.item;
  const [uploadModal, setUploadModal] = useState(false);

  const [ownerDetails, setOwnerDetails] = useState({
    firstName: '',
    lastName: '',
    vehicleCertificate: '',
  });

  const onChangeHandler = (name, val) => {
    setOwnerDetails(pre => ({
      ...pre,
      [name]: val,
    }));
  };

  const nextHandler = () => {
    Validator.isEmpty(ownerDetails?.firstName)
      ? errorTost('Please enter first name')
      : Validator.isEmpty(ownerDetails?.lastName)
      ? errorTost('Please enter last name')
      : Validator.isEmpty(ownerDetails?.vehicleCertificate)
      ? errorTost('Please upload vehicle photo')
      : 
      // navigation.navigate('RcDetails');
      addOnwerDetails()
  };

  const addOnwerDetails = async () => {
    let objToSend = {
      firstName: ownerDetails.firstName,
      lastName: ownerDetails.lastName,
      is_owner_detail: true,
      vehiclePhoto: ownerDetails.vehicleCertificate,
      // rcNumber: '',
      // rcExpireDate: '',
      // rcCertificate: '',
      // insuranceNumber: '',
      // insuranceExpireDate: '',
      // insuranceCertificate: '',
      // permitNumber: '',
      // permitExpireDate: '',
      // permitCertificate: '',
      // pollutionNumber: '',
      // pollutionExpireDate: '',
      // pollutionCertificate: '',
      // smallLuggage:'' ,
      // mediumLuggage:'' ,
      // largeLuggage:'' ,
      // is_owner_detail:''
      // is_rc_detail
      // is_insurence_detail
      // is_permit_detail
      // is_pollution_detail
      // is_luggage_detail
    };
    try {
      let response = await addVehicleServices(objToSend);
      vechicleId._id=response?.data?.addVehicleData?._id
      navigation.navigate('RcDetails');
      console.log(response.data)
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <SafeAreaView>
      <View style={{width: '90%', alignSelf: 'center'}}>
        {
          //#region header
          <SignupSeteps step={'Step 1/6'} />
          //#endregion
        }

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: moderateScale(100)}}>
          <View>
            {
              //#region  headet text
              <View style={{marginTop: moderateVerticalScale(20)}}>
                <Text24 text={'Owner Details'} />
                <Text14
                  fontFamily={fonts.regular}
                  color={colors.gray}
                  text={`Enter Vehicle Owner Details`}
                />
              </View>
              //#endregion
            }

            <View style={{alignSelf: 'center', width: '100%'}}>
              {
                //#region Name Components
                <View style={{width: '100%'}}>
                  <Input
                    value={ownerDetails?.firstName}
                    placeHolder={'First Name'}
                    mt={moderateVerticalScale(20)}
                    onChangeText={val => onChangeHandler('firstName', val)}
                  />

                  <Input
                    value={ownerDetails?.lastName}
                    placeHolder={'Last Name'}
                    mt={moderateVerticalScale(20)}
                    onChangeText={val => onChangeHandler('lastName', val)}
                  />

                  <View
                    style={{
                      marginTop: moderateScale(20),
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => setUploadModal(true)}
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
                      {ownerDetails.vehicleCertificate == '' ? (
                        <Image
                          style={{
                            height: moderateScale(50),
                            width: moderateScale(50),
                          }}
                          resizeMode="contain"
                          source={icon.upload}
                        />
                      ) : (
                        <Image
                          style={{
                            height: moderateScale(90),
                            width: moderateScale(90),
                          }}
                          resizeMode="cover"
                          source={{uri: ownerDetails?.vehicleCertificate}}
                        />
                      )}
                    </TouchableOpacity>
                    <Text14
                      mt={1}
                      color={colors.placeholderColor}
                      text={'  Upload Vehicle Photo'}
                    />
                  </View>
                </View>
                //#endregion
              }

              {
                //#region  Next Button
                <View style={{marginBottom: moderateScale(80)}}>
                  <Button
                    onPress={() => nextHandler()}
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

      <UploadModal
        uploadModal={uploadModal}
        setUploadModal={setUploadModal}
        inital={ownerDetails}
        update={setOwnerDetails}
        type={'vehicleCertificate'}
      />
    </SafeAreaView>
  );
};

// export default Step5

export default VechicleDetails;
