import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { moderateVerticalScale } from 'react-native-size-matters'
import { CommonStyle, fonts } from '../../utils/Styles'
import { icon } from '../../utils/Image'
import Text14 from '../customText/Text14'
import { useNavigation } from '@react-navigation/core'

const SignupSeteps = ({step,onPress}) => {
    const navigation=useNavigation()
  return (
    <View style={{  paddingVertical: moderateVerticalScale(10), flexDirection:'row',alignItems:"center",justifyContent:"space-between"}}>
    <TouchableOpacity 
    onPress={()=>navigation.goBack()}
     >
        <View style={{height:moderateVerticalScale(30),width:moderateVerticalScale(30)}}>
        <Image style={[CommonStyle.img]} source={icon.backBtn}/>
        </View>

    </TouchableOpacity>
        <View>
            <Text14 fontFamily={fonts.regular} text={step}/>
        </View>
</View>
  )
}

export default SignupSeteps