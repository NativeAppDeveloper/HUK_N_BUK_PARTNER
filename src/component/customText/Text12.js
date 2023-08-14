import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { colors, fonts } from '../../utils/Styles'

const Text12=(props)=> {
  let { lineHeight, color, fontFamily, text ,textAlign,mt} = props
  return (
    <Text
      style={{
        fontSize: moderateScale(11),
        lineHeight: lineHeight ? lineHeight :moderateScale(10),
        fontFamily: fontFamily ? fontFamily : fonts.medium,
        color: color ? color : colors.black,
        textAlign:textAlign?textAlign:'left',
        marginTop:mt?mt:5


      }}
    >
      {text}
    </Text>
  )
}

export default Text12

