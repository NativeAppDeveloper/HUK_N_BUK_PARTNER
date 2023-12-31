import { View, Text, StyleSheet, Image, TextInput, Platform, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackHandler from '../../../component/BackHandler'
import { moderateScale, scale } from 'react-native-size-matters'
import { CommonStyle, colors, fonts } from '../../../utils/Styles'
import Text14 from '../../../component/customText/Text14'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomDropDown from '../../../component/common/CustomDropDown'
import Button from '../../../component/customButton/Button'
import { icon } from '../../../utils/Image'
import { myProfileDetailsServices } from '../../../services/Services'

const MyProfile = () => {
    const [edit, setEdit] = useState(false)
    const [profileData, setProfileData] = useState({
        firstName: 'Sachin',
        lastName: 'Kumar',
        gender: 'Male',
        dateOfBirth: '13.4-2001',
        mobileNumber: '+91 8178055121'

    })

    const handleChange = (field, value) => {
        setProfileData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    };


    const myProfileDetails=async()=>{
        try {
           let response = await myProfileDetailsServices()
           let userInfo=response?.data?.activeUser
           setProfileData(pre=>({
            ...pre,
            firstName:userInfo?.firstName,
            lastName:userInfo?.lastName,
            mobileNumber:userInfo?.phoneNumber,
            
           }))
           console.log(response.data,'user ka data');
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        myProfileDetails()
    }, [])
    


    return (
        <View style={CommonStyle.container}>
            <BackHandler name={'My Profile'} />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.conatiner}>
                    {
                        //#region image container
                        <View style={styles.imgConatiner}>
                            <Image

                                source={{ uri: 'https://nftcrypto.io/wp-content/uploads/2023/05/2023-05-18-17_57_18-The-Journey-of-an-NFT-Avatar-Word-Product-Activation-Failed.png' }}
                                style={[CommonStyle.img,{borderRadius:100}]}
                            />
                            <Image style={{position:'absolute',zIndex:999,height:30,width:30,right:0,bottom:0}} source={icon.edit}/>
                        </View>
                        //#endregion
                    }

                    {
                        //#region  User Details 
                        <View>
                            <InputWithHeading onChangeText={(val) => handleChange('firstName', val)} value={profileData.firstName} edit={edit} heading={'First Name'} />

                            <InputWithHeading onChangeText={(val) => handleChange('lastName', val)} value={profileData.lastName} edit={edit} heading={'Last Name'} />
                            <InputWithHeading onChangeText={(val) => handleChange('mobileNumber', val)} value={profileData.mobileNumber} edit={edit} heading={'Phone Number'} />

                            {edit ? <View style={{ marginTop: moderateScale(10) }}>
                                <Text14 color={colors.theme} text={'Gender'} />

                                <CustomDropDown
                                    width={'100%'}
                                    placeholder={'Select Category'}
                                    dropDownData={
                                        [
                                            { label: 'Male', value: 'male' },
                                            { label: 'Female', value: 'female' },
                                            { label: 'Other', value: 'other' },
                                        ]}
                                    labelField="label"
                                    valueField="value"
                                    value={'hello'}
                                // onChange={(item) => setCategoryId(item?.value)}
                                />
                            </View>
                                : <InputWithHeading edit={edit} heading={'Gender'} value={profileData.gender} />
                            }

                            <InputWithHeading onChangeText={(val) => handleChange('dateOfBirth', val)} value={profileData.dateOfBirth} edit={edit} heading={'Date Of Birth'} />


                        </View>
                        //#endregion
                    }
                </View>

            </KeyboardAwareScrollView>
            <View style={{ marginVertical: moderateScale(20) }}>
                <Button onPress={() => setEdit(!edit)} text={'Edit Profile'} />
            </View>
        </View>
    )
}


const InputWithHeading = ({ heading, edit, value, onChangeText }) => {
    return (
        <View style={{ marginTop: moderateScale(10) }}>
            <Text14 color={colors.theme} text={heading} />
            <View style={{
                borderWidth: edit ? 1 : 0,
                paddingVertical: Platform.OS == 'ios' ? moderateScale(15) : moderateScale(2),
                borderColor: colors.placeholderColor,
                borderRadius: 8,
                marginTop: moderateScale(12),
                paddingHorizontal: edit ? scale(5) : 0
            }}>
                <TextInput
                    onChangeText={onChangeText}
                    value={value} editable={edit} placeholder='Name' style={{ fontFamily: fonts.regular, color: colors.gray }} />
            </View>
        </View>
    )
}

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
        alignSelf: "center",
        marginVertical: moderateScale(10)
    },


})
export default MyProfile