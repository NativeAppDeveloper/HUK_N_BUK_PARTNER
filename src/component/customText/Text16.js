import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { colors, fonts } from '../../utils/Styles'

const Text16=(props)=> {
  let { lineHeight, color, fontFamily, text,textAlign,mt,ml } = props
  return (
    <Text
      style={{
        fontSize: moderateScale(15),
        lineHeight: lineHeight ? lineHeight :moderateScale(20),
        fontFamily: fontFamily ? fontFamily : fonts.medium,
        color: color ? color : colors.black,
        textAlign:textAlign?textAlign:'left',
        marginTop:mt?mt:5,
        marginLeft:ml?ml:0

      }}
    >
      {text}
    </Text>
  )
}

export default Text16

