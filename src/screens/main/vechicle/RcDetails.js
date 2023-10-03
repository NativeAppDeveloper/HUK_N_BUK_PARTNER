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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import UploadModal from '../../../component/modal/UploadModal';
import { errorTost } from '../../../utils/Helper';
import { addVehicleServices } from '../../../services/Services';
import { vechicleId } from '../../../utils/localVariable';

const RcDetails = ({route}) => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  const paramData = route?.params?.item;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);

  const [rcDetails, setRcDetails] = useState({
    rcNumber: '',
    rcExpireDate: '',
    rcCertificate: '',
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    let dateFormat=moment(date).format('YYYY/MM/DD')
    onChangeHandler('rcExpireDate',dateFormat)
    hideDatePicker();
  };

  const onChangeHandler = (name,val) => {
    setRcDetails(pre => ({
      ...pre,
      [name]: val,
    }));
  };


  // console.log(vechicleId._id,'rcCertificate')

  const nextHandler=()=>{
    Validator.isEmpty(rcDetails?.rcNumber)
    ?
    errorTost('Please enter registration certificate number')
    :
    Validator.isEmpty(rcDetails?.rcExpireDate)
    ?
    errorTost('Please enter expiry date')
    :
    Validator.isEmpty(rcDetails?.rcCertificate)
    ?
    errorTost('Please upload registration certificate')
    :
    addOnwerDetails()
    // navigation.navigate('InsuranceDetails')

  }


  const addOnwerDetails = async () => {
    let objToSend = {
      rcNumber:rcDetails.rcNumber,
      rcExpireDate:rcDetails.rcExpireDate,
      rcCertificate:rcDetails.rcCertificate,
      is_rc_detail:true,
      vehicleId:vechicleId._id
    };
    try {
      let response = await addVehicleServices(objToSend);
      console.log(response.data)
      navigation.navigate('InsuranceDetails');
    } catch (error) {
      console.log(error);
    }
  };


  // Your custom header style
  const customHeaderStyles = {
    header: {
      backgroundColor: 'blue', // Change this to your desired color
    },
    headerTitle: {
      color: 'white', // Change this to your desired text color
    },
    headerTouchable: {
      padding: 16,
    },
  };

  return (
    <SafeAreaView>
      <View style={{width: '90%', alignSelf: 'center'}}>
        {
          //#region header
          <SignupSeteps step={'Step 2/6'} />
          //#endregion
        }

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: moderateScale(100)}}>
          <View>
            {
              //#region  headet text
              <View style={{marginTop: moderateVerticalScale(20)}}>
                <Text24 text={'RC Details'} />
                <Text14
                  fontFamily={fonts.regular}
                  color={colors.gray}
                  text={`Enter Vehicle Registration Details`}
                />
              </View>
              //#endregion
            }

            <View style={{alignSelf: 'center', width: '100%'}}>
              {
                //#region Name Components
                <View style={{width: '100%'}}>
                  <Input
                    value={rcDetails.rcNumber}
                    placeHolder={'Registration Certificate Number'}
                    mt={moderateVerticalScale(20)}
                    onChangeText={(val)=>onChangeHandler('rcNumber',val)}
                  />

                  <TouchableOpacity onPress={showDatePicker}>
                    <Input
                    // onPress={showDatePicker}
                    disabled={true}
                    // onPressIn={showDatePicker}
                      editable={false}
                      placeHolder={'Enter Expiry Date'}
                      mt={moderateVerticalScale(20)}
                      value={rcDetails.rcExpireDate}
                    />
                  </TouchableOpacity>

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
                     {rcDetails.rcCertificate==''? <Image
                        style={{
                          height: moderateScale(50),
                          width: moderateScale(50),
                        }}
                        resizeMode="contain"
                        source={icon.upload}
                      />
                      :
                      <Image
                        style={{
                          height: moderateScale(90),
                          width: moderateScale(90),
                        }}
                        resizeMode="cover"
                        source={{uri:rcDetails.rcCertificate}}
                      />

                    }
                    </TouchableOpacity>

                    <Text14
                      mt={1}
                      color={colors.placeholderColor}
                      text={'  Upload Registration Certificate'}
                    />
                  </View>
                </View>
                //#endregion
              }

              {
                //#region  Next Button
                <View style={{marginBottom: moderateScale(80)}}>
                  <Button
                    onPress={() =>nextHandler()}
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

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        customHeaderStyles={customHeaderStyles} // Apply your custom styles here

      />

      <UploadModal
        uploadModal={uploadModal}
        setUploadModal={setUploadModal}
        inital={rcDetails}
        update={setRcDetails}
        type={'rcCertificate'}
      />
    </SafeAreaView>
  );
};

// export default Step5

export default RcDetails;
