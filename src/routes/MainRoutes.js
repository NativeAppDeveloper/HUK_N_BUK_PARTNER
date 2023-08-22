import { Platform, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { moderateScale } from 'react-native-size-matters';
import Home from '../screens/main/home/Home';
import DrawerScreen from '../screens/drawerScreen/DrawerScreen';
import { colors, fonts } from '../utils/Styles';
import MyProfile from '../screens/main/profile/MyProfile';
import Notifaction from '../screens/main/notifaction/Notifaction';
import Notification from '../screens/main/notifaction/Notifaction';
import AboutApp from '../screens/main/term_about_privacy/AboutApp';
import Faq from '../screens/main/term_about_privacy/Faq';
import MyRide from '../screens/main/myRide/MyRide';
import { width } from '../utils/Helper';
import Setting from '../screens/main/setting/Setting';
import Language from '../screens/main/setting/Language';
import PushNotifaction from '../screens/main/setting/PushNotifaction';
import Payments from '../screens/main/setting/Payments';
import HelpAndSupport from '../screens/main/help_support/HelpAndSupport';
import RequestCallBack from '../screens/main/help_support/RequestCallBack';
import Wallet from '../screens/main/wallet/Wallet';
import AddMoney from '../screens/main/wallet/AddMoney';
import RideType from '../screens/main/myRide/RideType';
import RdieDetails from '../screens/main/myRide/RideDetails';
import BookRide from '../screens/main/home/BookRide';
import ConfirmRide from '../screens/main/home/ConfirmRide';
import RideStatus from '../screens/main/home/RideStatus';
import { icon } from '../utils/Image';
import Location from '../screens/common/Location';



const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()


const TabStack = ({route}) => {
   

    return(
        <>
                <Tab.Navigator
        backBehavior='history'
        initialRouteName='SellerHome'

        screenOptions={({ route: { name } }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                switch (name) {
                    case 'Home':
                        return <Image source={icon.home} style={{ tintColor: focused ? colors.white : colors.gray,height:moderateScale(30),width:moderateScale(30) }} resizeMode="contain"  />

                    case 'My Request':
                        return <Image source={icon.Ride} style={{ tintColor: focused ? colors.white : colors.gray,height:moderateScale(30),width:moderateScale(30) }} resizeMode="contain"  />

                    case 'My Ride':
                        return <Image source={icon.Ride} style={{ tintColor: focused ? colors.white : colors.gray,height:moderateScale(30),width:moderateScale(30) }} resizeMode="contain"  />
                    case 'Wallet':
                        return <Image source={icon.wallet2} style={{ tintColor: focused ? colors.white : colors.gray,height:moderateScale(30),width:moderateScale(30) }} resizeMode="contain"  />

                    case '':
                        return <Image source={icon.wallet2} style={{ tintColor: focused ? colors.white : colors.gray,height:moderateScale(30),width:moderateScale(30) }} resizeMode="contain"  />


                }
            },

            keyboardHidesTabBar: false,
            tabBarActiveTintColor: colors.white,
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {
                fontSize: moderateScale(12),
                fontFamily:fonts.medium
            },
            tabBarStyle: {
                borderTopWidth: 0,
                width:width,
                height: moderateScale(60),
                paddingBottom: Platform.OS == "ios" ? moderateScale(15) : moderateScale(6),
                backgroundColor:colors.theme

            }

        })}

    >
        <Tab.Screen name={'Home'} options={{ headerShown: false }} component={Home} />
        <Tab.Screen name={'My Request'} options={{ headerShown: false }} component={Home} />
        <Tab.Screen name={'My Ride'} options={{ headerShown: false }} component={MyRide} />
        <Tab.Screen name={'Wallet'} options={{ headerShown: false }} component={Wallet} />


    </Tab.Navigator>

    </>
    )
}

const DrawerStack = () => {
    return(
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                initialRouteName: 'Home',
                drawerStyle: {
                    width: Platform.OS == 'ios' ? '100%' : '100%',
                    height: '100%',
                    backgroundColor:colors.white,
                },
            }}
            drawerContent={props => <DrawerScreen {...props}  />}>
            <Drawer.Screen name="Tab" component={TabStack} />
        </Drawer.Navigator>
    )
        }

const MainRoutes = () => {
    return (
        <>
            <Stack.Navigator
                initialRouteName="DrawerStack"
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="DrawerStack" component={DrawerStack} />
                <Stack.Screen name="Ab" component={DrawerScreen} />

                <Stack.Screen name="MyProfile" component={MyProfile} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="AboutApp" component={AboutApp} />
                <Stack.Screen name="Faq" component={Faq} />
                <Stack.Screen name="MyRide" component={MyRide} />
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="Language" component={Language} />
                <Stack.Screen name="PushNotifaction" component={PushNotifaction} />
                <Stack.Screen name="Payments" component={Payments} />
                <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
                <Stack.Screen name="RequestCallBack" component={RequestCallBack} />
                <Stack.Screen name="AddMoney" component={AddMoney} />
                <Stack.Screen name="RideType" component={RideType} />
                <Stack.Screen name="RdieDetails" component={RdieDetails} />
                <Stack.Screen name="BookRide" component={BookRide} />
                <Stack.Screen name="ConfirmRide" component={ConfirmRide} />
                <Stack.Screen name="RideStatus" component={RideStatus} />
                <Stack.Screen name="Location" component={Location} />

                
                
                
                

            </Stack.Navigator>

        </>
    );
};

export default MainRoutes;