import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackHandler from '../../../component/BackHandler';
import {moderateScale, scale} from 'react-native-size-matters';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import Text14 from '../../../component/customText/Text14';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomDropDown from '../../../component/common/CustomDropDown';
import Button from '../../../component/customButton/Button';
import {icon, images} from '../../../utils/Image';
import {editProfileServices, myProfileDetailsServices} from '../../../services/Services';
import UploadModal from '../../../component/modal/UploadModal';
import { useDispatch } from 'react-redux';
import { closeLoader, showLoader, sucessTost } from '../../../utils/Helper';

const MyProfile = () => {
  const [edit, setEdit] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);
  const dispatch=useDispatch()
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    gender: 'Male',
    dateOfBirth: '',
    mobileNumber: '',
    profilePic: '',
  });

  const handleChange = (field, value) => {
    setProfileData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const myProfileDetails = async () => {
    try {
      let response = await myProfileDetailsServices();
      let userInfo = response?.data?.activeUser;
      setProfileData(pre => ({
        ...pre,
        firstName: userInfo?.firstName,
        lastName: userInfo?.lastName,
        mobileNumber: userInfo?.phoneNumber,
        profilePic:userInfo?.profilePic
      }));

      dispatch({
        type:'USER_PROFILE',
        payload:response.data.activeUser
      })
    //   console.log(response.data, 'user ka data');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const editProfileHandler=async()=>{
    dispatch(showLoader)
  try { 
    let response= await editProfileServices(profileData)
    myProfileDetails()
    console.log(response.data,'updated data');
    sucessTost("Profile Update Sucessfully")
    setEdit(!edit)
    dispatch(closeLoader)
  } catch (error) {
    dispatch(closeLoader)
    console.log(error);
  }
}


const updateHandler=()=>{
    if(edit){
      editProfileHandler()
    }
    else{
      setEdit(true)
    }
  }

  useEffect(() => {
    myProfileDetails();
  }, []);

  return (
    <View style={CommonStyle.container}>
      <BackHandler name={'My Profile'} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.conatiner}>
          {
            //#region image container
            <TouchableOpacity
              onPress={() => setUploadModal(true)}
              style={styles.imgConatiner}>
              <Image
              resizeMode='contain'
                source={!profileData?.profilePic?images.userIcon:{uri:profileData.profilePic}}
                style={[CommonStyle.img, {borderRadius: 100,},!profileData.profilePic&&{tintColor:colors.white}]}
              />
              <Image
                style={{
                  position: 'absolute',
                  zIndex: 999,
                  height: 30,
                  width: 30,
                  right: 0,
                  bottom: 0,
                }}
                source={icon.edit}
              />
            </TouchableOpacity>
            //#endregion
          }

          {
            //#region  User Details
            <View>
              <InputWithHeading
                onChangeText={val => handleChange('firstName', val)}
                value={profileData.firstName}
                edit={edit}
                heading={'First Name'}
              />

              <InputWithHeading
                onChangeText={val => handleChange('lastName', val)}
                value={profileData.lastName}
                edit={edit}
                heading={'Last Name'}
              />
              <InputWithHeading
                onChangeText={val => handleChange('mobileNumber', val)}
                value={profileData.mobileNumber}
                edit={edit}
                heading={'Phone Number'}
              />

              {/* {edit ? (
                <View style={{marginTop: moderateScale(10)}}>
                  <Text14 color={colors.theme} text={'Gender'} />

                  <CustomDropDown
                    width={'100%'}
                    placeholder={'Select Category'}
                    dropDownData={[
                      {label: 'Male', value: 'male'},
                      {label: 'Female', value: 'female'},
                      {label: 'Other', value: 'other'},
                    ]}
                    labelField="label"
                    valueField="value"
                    value={'hello'}
                    // onChange={(item) => setCategoryId(item?.value)}
                  />
                </View>
              ) : (
                <InputWithHeading
                  edit={edit}
                  heading={'Gender'}
                  value={profileData.gender}
                />
              )} */}

              {/* <InputWithHeading onChangeText={(val) => handleChange('dateOfBirth', val)} value={profileData.dateOfBirth} edit={edit} heading={'Date Of Birth'} /> */}
            </View>
            //#endregion
          }
        </View>
      </KeyboardAwareScrollView>
      <View style={{marginVertical: moderateScale(20)}}>
        <Button onPress={() =>updateHandler()}  text={edit ? 'Save' : 'Edit Profile'} />
      </View>

      <UploadModal
        uploadModal={uploadModal}
        setUploadModal={setUploadModal}
        inital={profileData}
        update={setProfileData}
        type={'profilePic'}
      />
    </View>
  );
};

const InputWithHeading = ({heading, edit, value, onChangeText}) => {
  return (
    <View style={{marginTop: moderateScale(10)}}>
      <Text14 color={colors.theme} text={heading} />
      <View
        style={{
          borderWidth: edit ? 1 : 0,
          paddingVertical:
            Platform.OS == 'ios' ? moderateScale(15) : moderateScale(2),
          borderColor: colors.placeholderColor,
          borderRadius: 8,
          marginTop: moderateScale(12),
          paddingHorizontal: edit ? scale(5) : 0,
        }}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          editable={edit}
          placeholder="Name"
          style={{fontFamily: fonts.regular, color: colors.gray}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    width: '90%',
    alignSelf: 'center',
  },
  imgConatiner: {
    height: moderateScale(90),
    width: moderateScale(90),
    borderWidth: 2,
    borderColor: colors.theme,
    borderRadius: moderateScale(45),
    // overflow: "hidden",
    alignSelf: 'center',
    marginVertical: moderateScale(10),
    backgroundColor:'#dadada'
  },
});
export default MyProfile;
