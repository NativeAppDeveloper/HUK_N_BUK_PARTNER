import { View, Text } from 'react-native'
import React from 'react'
import BackHandler from '../BackHandler'
import { colors } from '../../utils/Styles'

const LuggageAllowance = () => {
  return (
    <View style={{flex:1,backgroundColor:colors.theme}}>
        <BackHandler text={'Luggage Allowance'}/>
    </View>
  )
}

export default LuggageAllowance