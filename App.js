import 'react-native-gesture-handler';
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainRoutes from './src/routes/MainRoutes'
import Onboarding from './src/screens/onboarding/Onboarding';
import CustomCarousel from './src/screens/onboarding/Onboarding';
import AuthRoutes from './src/routes/AuthRoutes';
import { useSelector } from 'react-redux';

export default function App() {
  const {stackName}=useSelector((state)=>state.ChangeStackReducer)

  const carouselData = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ];
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent={true} barStyle={'dark-content'} />
    <NavigationContainer>
      {stackName=="AUTH"&&<MainRoutes/>}
      {stackName=="ONBOARDING"&&<Onboarding/>}
      {stackName=="MAIN"&&<AuthRoutes/>}
    </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({})