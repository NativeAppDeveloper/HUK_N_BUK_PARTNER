import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { images } from '../../../utils/Image'
import Button from '../../../component/customButton/Button'
import { colors } from '../../../utils/Styles'
import { moderateScale } from 'react-native-size-matters'

const RegistrationComplete = () => {
  return (
    <ImageBackground source={images.registrationComplete} style={{flex:1,justifyContent:"flex-end",paddingBottom:moderateScale(30)}}>
        <Button backgroundColor={colors.white} text={'Go to Home'}/>
      </ImageBackground>
  )
}

export default RegistrationComplete