import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { moderateScale } from 'react-native-size-matters'
import Text14 from '../customText/Text14'
import { colors, fonts } from '../../utils/Styles'

const NoData = ({name}) => {
  return (
    <View style={{alignSelf:'center',alignItems:'center'}}>
            <LottieView
            height={moderateScale(150)}
            width={moderateScale(150)}
            source={require('../../assets/Nodata.json')}
            autoPlay
            loop
          />
          <Text14  text={`${name?name:'No Data Found'}`} color={colors.theme}  fontFamily={fonts.regular} />
    </View>
  )
}

export default NoData