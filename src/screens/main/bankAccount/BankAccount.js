import { View, Text, Image } from 'react-native'
import React from 'react'
import BackHandler from '../../../component/BackHandler'
import { icon } from '../../../utils/Image'
import { moderateScale } from 'react-native-size-matters'
import { CommonStyle, colors, fonts } from '../../../utils/Styles'
import { width } from '../../../utils/Helper'
import Text18 from '../../../component/customText/Text18'
import Text14 from '../../../component/customText/Text14'
import Button from '../../../component/customButton/Button'

const BankAccount = () => {
  return (
    <View style={{flex:1}}>
     <BackHandler name={'Bank Account'}/>

     <View style={{flex:1,borderWidth:1,justifyContent:'center'}}>
        <View style={{height:moderateScale(150),width:moderateScale(150),alignSelf:"center"}}>
        <Image resizeMode='contain' style={CommonStyle.img} source={icon.Bank}/>
        </View>

        <View style={{width:'80%',alignSelf:'center',alignItems:'center'}}>
            <Text18 color={colors.theme} text={'No Bank Added'}/>
            <Text14 mt={moderateScale(20)} textAlign={'center'} color={colors.theme} fontFamily={fonts.regular} text={'Please add bank to get earning into your bank account.'}/>
        </View>

        <Button mt={moderateScale(40)} text={'Add Bank Account'}/>
     </View>
    </View>
  )
}

export default BankAccount