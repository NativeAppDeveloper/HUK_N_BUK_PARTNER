import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { colors, fonts } from '../../utils/Styles'

const Text10=(props)=> {
  let { lineHeight, color, fontFamily, text ,textAlign,mt} = props
  return (
    <Text
      style={{
        fontSize:10,
        lineHeight: lineHeight ? lineHeight :moderateScale(12),
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

export default Text10

