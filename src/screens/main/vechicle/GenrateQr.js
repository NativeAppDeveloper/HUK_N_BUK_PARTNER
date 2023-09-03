import { View, Text, Image } from 'react-native'
import React from 'react'
import BackHandler from '../../../component/BackHandler'
import { CommonStyle, colors } from '../../../utils/Styles'
import { moderateScale } from 'react-native-size-matters'
import Button from '../../../component/customButton/Button'

const GenrateQr = () => {
  return (
    <View style={{flex:1,backgroundColor:colors.theme}}>
        <BackHandler name={'Vehicle QR Code'}/>

        <View style={{height:moderateScale(240),width:moderateScale(240),alignSelf:'center',marginTop:moderateScale(100)}}>
          <Image style={CommonStyle.img} source={require('../../../assets/Qr.png')}/>
        </View>

        <View style={{marginTop:moderateScale(40)}}>
          <Button text={'Download'}/>

          <Button 
          mt={moderateScale(20)}
          backgroundColor={colors.darkGray}
          text={'Print'}/>
        </View>
    </View>
  )
}

export default GenrateQr