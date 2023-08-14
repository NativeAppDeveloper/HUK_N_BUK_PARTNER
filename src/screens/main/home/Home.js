import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import Text12 from '../../../component/customText/Text12'
import Text14 from '../../../component/customText/Text14'
import Text16 from '../../../component/customText/Text16'
import Text18 from '../../../component/customText/Text18'
import Text24 from '../../../component/customText/Text24'
import Button from '../../../component/customButton/Button'

export default function Home() {
  const navigation=useNavigation()
  return (
    <SafeAreaView>
      <Text onPress={()=>navigation.openDrawer()}>Home</Text>
      <Text12 text="Text12"/>
      <Text14 text="text14"/>
      <Text16 text="text16"/>
      <Text18 text="text18"/>
      <Text24 text="23"/>
      <Button text="contain"/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})