import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../utils/Image'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import { CommonStyle, colors } from '../../utils/Styles'
import Text22 from '../../component/customText/Text22'
import Text14 from '../../component/customText/Text14'
import Input from '../../component/customInput/Input'
import Button from '../../component/customButton/Button'
import Text12 from '../../component/customText/Text12'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation=useNavigation()
    return (
        <KeyboardAwareScrollView contentContainerStyle={{ width: '100%' ,flex:1}}>
            <SafeAreaView style={styles.container}>
                <View style={{ width: '90%', alignItems: 'center', marginTop: moderateScale(90) }}>
                    <View style={{ height: moderateScale(70), width: scale(70) }}>
                        <Image resizeMode='contain' style={CommonStyle.img} source={images.On1} />
                    </View>

                    <View style={[CommonStyle.alCenter]}>
                        <Text22
                            mt={moderateScale(40)}
                            text={'Hi, Welcome to Huk & Buk'}
                        />
                        <Text14
                            mt={moderateScale(10)}

                            text={'Enter your Mobile or Email to login.'}
                        />
                    </View>

                    <Input
                        mt={moderateScale(30)}
                        placeHolder={'Mobile Number or Email address'}
                    />

                    <Button
                        mt={moderateScale(30)}
                        width={'100%'}
                    />

                    <Text12
                        color={colors.gray}
                        text='By clicking start, you agree to our '
                        mt={moderateScale(25)}
                    />
                    <Text12
                        mt={10}
                        color={colors.black}
                        text='Terms and Conditions '
                    />

                </View>
                    <View style={{position:'absolute',bottom:moderateVerticalScale(40),flexDirection:"row"}}>
                        <Text14 color={colors.gray} text={'Don’t have an account?'}/>
                        <TouchableOpacity onPress={()=>navigation.navigate('Step1')}>
                        <Text14 text={' Sign Up'}/>
                        </TouchableOpacity>
                    </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
})
export default Login