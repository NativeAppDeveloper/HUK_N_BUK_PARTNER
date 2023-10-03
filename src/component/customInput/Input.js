import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils/Styles'
import { moderateScale, scale } from 'react-native-size-matters'

export default function Input({
  placeHolder,
  mt,
  value,
  onChangeText,
  editable,
  // onPressIn,
  onPress,
  disabled,
  keyboardType,
  maxLength,
  onFocus
}) {
  return (
    <TouchableOpacity 
    disabled={disabled}
    onPress={onPress}
    style={{
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
      borderWidth:1,
      borderColor:colors.borderC,
      // paddingRight:moderateScale(20)
      // paddingVertical:moderateScale(5)
    }}>
      <TextInput
      // onPressIn={onPressIn}
      keyboardType={keyboardType?'number-pad':'default'}
      multiline={true}
      editable={editable}
      value={value}
      onFocus={onFocus}
      onChangeText={onChangeText}
      maxLength={maxLength}
       style={{fontFamily:fonts.medium,color:colors.black,width:'95%'}} placeholderTextColor={colors.placeholderColor} placeholder={placeHolder} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})