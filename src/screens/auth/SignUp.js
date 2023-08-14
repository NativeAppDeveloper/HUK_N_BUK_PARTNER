import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackHandler from '../../component/BackHandler'
import { moderateVerticalScale } from 'react-native-size-matters'
import Text24 from '../../component/customText/Text24'
import Text14 from '../../component/customText/Text14'
import { colors, fonts } from '../../utils/Styles'
import Input from '../../component/customInput/Input'
import Button from '../../component/customButton/Button'

const SignUp = () => {
    const [step,setStep]=useState(2)
    const [SignupData,setSignUpData]=useState({
        firstName:'',
        lastName:'',
        gender:'',
        dateOfBirth:'',
        email:''
    })
    return (
        <SafeAreaView>
            <View style={{width:"90%",alignSelf:'center'}}>
            {
                //#region header
                <View style={{  paddingVertical: moderateVerticalScale(10) }}>
                    <TouchableOpacity >
                        <Text>Back</Text>
                    </TouchableOpacity>
                </View>
                //#endregion
            }

            {
                //#region  headet text
                <View style={{marginTop:moderateVerticalScale(20)}} >
                <Text24 text={'Enter Your Name'}/>
                <Text14 
                fontFamily={fonts.regular}
                color={colors.gray} text={`We have sent you a 6 digit verification code on `}/>

                {/* <View style={{flex:'row'}}>
                    <Text14 color={colors.gray} text={`We have sent you a 6 digit verification code on `}/>
                    <Text14 text={'+91 6556565656'}/>
                </View> */}
                </View>
                //#endregion
            }

            
            <View style={{alignSelf: 'center',width:'100%' }}>
                {
                    step==1&&
                    //#region Name Components
                    <View style={{width:'100%'}}>
                        <Input 
                        placeHolder={'Enter Name'}
                        mt={moderateVerticalScale(40)}

                        />
                        <Input 
                        placeHolder={'Enter Name'}
                        mt={moderateVerticalScale(20)}
                        />

                    </View>
                    //#endregion
                }

                {
                    //#region Gender View

                    //#endregion
                }

                {
                    //#region  Next Button
                    <View>
                        <Button 
                        width={'100%'}
                        mt={moderateVerticalScale(20)}
                        text={'Next'}
                         />
                    </View>
                    //#region 
                }
            </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUp

const Name = () => {
    return (
        <View>

        </View>
    )
}

