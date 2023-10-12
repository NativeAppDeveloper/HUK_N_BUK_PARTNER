import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/Styles';
import {moderateVerticalScale} from 'react-native-size-matters';
import Text18 from '../customText/Text18';

export default function Button(props) {
  let {text, width, mt, onPress, backgroundColor, btnTextClr,disabled} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        width: width ? width : '90%',
        backgroundColor: backgroundColor ? backgroundColor : colors.yellow,
        paddingVertical: moderateVerticalScale(14),
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: moderateVerticalScale(8),
        marginTop: mt ? mt : 0,
      }}>
      <Text18 mt={1} color={btnTextClr} text={text ? text : 'Continue'} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
