import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/Styles'
import { moderateScale, scale } from 'react-native-size-matters'

export default function Input({
  placeHolder,
  mt
}) {
  return (
    <View style={{
      width: '100%',
      backgroundColor: colors.white,
      paddingHorizontal: scale(10),
      borderRadius: moderateScale(6),
      marginTop:mt?mt:0,
      ...Platform.select({
        ios:{
        paddingVertical:moderateScale(14)
        }
      }),
      
      

    }}>
      <TextInput placeholder={placeHolder} />
    </View>
  )
}

const styles = StyleSheet.create({})