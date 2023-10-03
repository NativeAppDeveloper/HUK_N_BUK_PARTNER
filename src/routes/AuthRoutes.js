import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import VerifyOtp from '../screens/auth/VerifyOtp';
import SignUp from '../screens/auth/SignUp';
import Step1 from '../screens/auth/signup/Step1';
import Step2 from '../screens/auth/signup/Step2';
import Step3 from '../screens/auth/signup/Step3';
import Step4 from '../screens/auth/signup/Step4';
import Step5 from '../screens/auth/signup/Step5';
import RegistrationComplete from '../screens/auth/signup/RegistrationComplete';
import BussinessDetails from '../screens/auth/signup/BussinessDetails';
import LoginOtp from '../screens/auth/LoginOtp';
import GooglePlacesInput from '../screens/common/GooglePlacesInput';
import { useSelector } from 'react-redux';
import EmailOtp from '../screens/auth/EmailOtp';

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
    const {screenName}=useSelector((state)=>state.setIntialScreenAuthReducres)
    console.log(screenName,'screenName');

    return (
        <Stack.Navigator
        // initialRouteName='BussinessDetails'
            initialRouteName={!screenName?"Login":"Step1"}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="LoginOtp" component={LoginOtp} />

            <Stack.Screen name="EmailOtp" component={EmailOtp} />

            <Stack.Screen name="Otp" component={VerifyOtp} />
            <Stack.Screen name="Step1" component={Step1} />
            <Stack.Screen name="Step2" component={Step2} />
            <Stack.Screen name="Step3" component={Step3} />
            <Stack.Screen name="Step4" component={Step4} />
            <Stack.Screen name="Step5" component={Step5} />
            <Stack.Screen name="RegistrationComplete" component={RegistrationComplete} />
            <Stack.Screen name="BussinessDetails" component={BussinessDetails} />
            <Stack.Screen name="GooglePlacesInput" component={GooglePlacesInput} />
            
        </Stack.Navigator>
    )
}

export default AuthRoutes