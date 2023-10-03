// import {View, Text, TouchableOpacity, Image} from 'react-native';
// import React, {useState} from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {
//   moderateScale,
//   moderateVerticalScale,
//   scale,
// } from 'react-native-size-matters';
// import Text24 from '../../../component/customText/Text24';
// import Text14 from '../../../component/customText/Text14';
// import {CommonStyle, colors, fonts} from '../../../utils/Styles';
// import Input from '../../../component/customInput/Input';
// import Button from '../../../component/customButton/Button';
// import {icon} from '../../../utils/Image';
// import SignupSeteps from '../../../component/common/SignupSeteps';
// import {useNavigation} from '@react-navigation/core';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// const PollutionDetails = ({route}) => {
//   const [step, setStep] = useState(1);
//   const navigation = useNavigation();
//   const paramData=route?.params?.item
//   return (
//     <SafeAreaView>
//       <View style={{width: '90%', alignSelf: 'center'}}>
//         {
//           //#region header
//           <SignupSeteps step={'Step 5/6'} />
//           //#endregion
//         }

//         <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:moderateScale(100)}} >
//         <View>
//           {
//             //#region  headet text
//             <View style={{marginTop: moderateVerticalScale(20)}}>
//               <Text24 text={'Pollution Details'} />
//               <Text14
//                 fontFamily={fonts.regular}
//                 color={colors.gray}
//                 text={`Enter Vehicle Pollution Details`}
//               />
//             </View>
//             //#endregion
//           }

//           <View style={{alignSelf: 'center', width: '100%'}}>
//             {
//               //#region Name Components
//               <View style={{width: '100%'}}>
//                 <Input
//                   placeHolder={'Pollution Number'}
//                   mt={moderateVerticalScale(20)}
//                 />

//                 <Input
//                   placeHolder={'Pollution Expiry Date'}
//                   mt={moderateVerticalScale(20)}
//                 />

          

//                 <View
//                   style={{
//                     marginTop: moderateScale(20),
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                   }}>
//                   <View
//                     style={{
//                       width: moderateScale(90),
//                       height: moderateScale(90),
//                       justifyContent: 'center',
//                       backgroundColor: colors.white,
//                       alignItems: 'center',
//                       borderRadius: 8,
//                       borderWidth: 1,
//                       borderColor: colors.borderC,
//                     }}>
//                     <Image
//                       style={{
//                         height: moderateScale(50),
//                         width: moderateScale(50),
//                       }}
//                       resizeMode="contain"
//                       source={icon.upload}
//                     />
//                   </View>
//                   <Text14
//                     mt={1}
//                     color={colors.placeholderColor}
//                     text={'  Upload Pollution Documnet'}
//                   />
//                 </View>
//               </View>
//               //#endregion
//             }

//             {
//               //#region  Next Button
//               <View style={{marginBottom:moderateScale(80)}}>
//                 <Button
//                   onPress={() => navigation.navigate('LuggageSpace')}
//                   width={'100%'}
//                   mt={moderateVerticalScale(55)}
//                   text={'Next'}
//                 />
//               </View>
//               //#region
//             }
//           </View>
//         </View>
//         </KeyboardAwareScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default PollutionDetails


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

const PollutionDetails = ({route}) => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  const paramData = route?.params?.item;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);

  const [pollutionDetails, setPollutionDetails] = useState({
    pollutionNumber: '',
    pollutionExpireDate: '',
    pollutionCertificate: '',
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    let dateFormat=moment(date).format('YYYY/MM/DD')
    onChangeHandler('pollutionExpireDate',dateFormat)
    hideDatePicker();
  };

  const onChangeHandler = (name,val) => {
    setPollutionDetails(pre => ({
      ...pre,
      [name]: val,
    }));
  };



  const nextHandler=()=>{
    Validator.isEmpty(pollutionDetails?.pollutionNumber)
    ?
    errorTost('Please enter pollution number')
    :
    Validator.isEmpty(pollutionDetails?.pollutionExpireDate)
    ?
    errorTost('Please enter expiry date')
    :
    Validator.isEmpty(pollutionDetails?.pollutionCertificate)
    ?
    errorTost('Please upload permit certificate')
    :
    addOnwerDetails()
    // navigation.navigate('LuggageSpace')

  }


  const addOnwerDetails = async () => {
    let objToSend = {
      pollutionNumber:pollutionDetails.pollutionNumber,
      pollutionExpireDate:pollutionDetails.pollutionExpireDate,
      permitCertificate:pollutionDetails.pollutionCertificate,
      is_pollution_detail:true,
      vehicleId:vechicleId._id
    };
    try {
      let response = await addVehicleServices(objToSend);
      console.log(response.data)
      navigation.navigate('LuggageSpace');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <View style={{width: '90%', alignSelf: 'center'}}>
        {
          //#region header
          <SignupSeteps step={'Step 5/6'} />
          //#endregion
        }

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: moderateScale(100)}}>
          <View>
            {
              //#region  headet text
              <View style={{marginTop: moderateVerticalScale(20)}}>
               <Text24 text={'Pollution Details'} />
                <Text14
                  fontFamily={fonts.regular}
                  color={colors.gray}
                  text={`Enter Vehicle Pollution Details`}
                />
              </View>
              //#endregion
            }

            <View style={{alignSelf: 'center', width: '100%'}}>
              {
                //#region Name Components
                <View style={{width: '100%'}}>
                  <Input
                    value={pollutionDetails.pollutionNumber}
                    placeHolder={'Pollution Number'}
                    mt={moderateVerticalScale(20)}
                    onChangeText={(val)=>onChangeHandler('pollutionNumber',val)}
                  />

                  <TouchableOpacity onPress={showDatePicker}>
                    <Input
                    // onPress={showDatePicker}
                    disabled={true}
                    // onPressIn={showDatePicker}
                      editable={false}
                      placeHolder={'Pollution Expiry Date'}
                      mt={moderateVerticalScale(20)}
                      value={pollutionDetails.pollutionExpireDate}
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
                     {pollutionDetails.pollutionCertificate==''? <Image
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
                        source={{uri:pollutionDetails.pollutionCertificate}}
                      />

                    }
                    </TouchableOpacity>

                    <Text14
                      mt={1}
                      color={colors.placeholderColor}
                      text={'  Upload Pollution Documnet'}
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
      />

      <UploadModal
        uploadModal={uploadModal}
        setUploadModal={setUploadModal}
        inital={pollutionDetails}
        update={setPollutionDetails}
        type={'pollutionCertificate'}
      />

    </SafeAreaView>
  );
};

// export default Step5

export default PollutionDetails;
