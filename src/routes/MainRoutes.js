import { Platform, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { moderateScale } from 'react-native-size-matters';
import Home from '../screens/main/home/Home';
import DrawerScreen from '../screens/drawerScreen/DrawerScreen';
import { colors } from '../utils/Styles';
import MyProfile from '../screens/main/profile/MyProfile';
import Notifaction from '../screens/main/notifaction/Notifaction';
import Notification from '../screens/main/notifaction/Notifaction';
import AboutApp from '../screens/main/term_about_privacy/AboutApp';
import Faq from '../screens/main/term_about_privacy/Faq';



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
                        return <Image source={{}} style={{ tintColor: focused ? 'red' : 'gray' }} resizeMode="contain" className="h-5 w-5" />

                    case language.product:
                        return <Image source={{}} style={{ tintColor: focused ? 'red' : 'gray' }} resizeMode="contain" className="h-5 w-5" />

                    case language.transaction:
                        return <Image source={{}} style={{ tintColor: focused ? 'red' : 'gray' }} resizeMode="contain" className="h-5 w-5" />
                    case language.chat:
                        return <Image source={{}} style={{ tintColor: focused ? 'red' : 'gray' }} resizeMode="contain" className="h-5 w-5" />

                    case language.auction:
                        return <Image source={{}} style={{ tintColor: focused ? 'red' : 'gray' }} resizeMode="contain" className="h-5 w-5" />


                }
            },

            keyboardHidesTabBar: false,
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {
                fontSize: moderateScale(12),
                fontFamily: "PlusJakartaSans-Medium"
            },
            tabBarStyle: {
                borderTopWidth: 0,
                width: 200,
                height: moderateScale(60),
                paddingBottom: Platform.OS == "ios" ? moderateScale(15) : moderateScale(6)

            }

        })}

    >
        <Tab.Screen name={'Home'} options={{ headerShown: false }} component={Home} />


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
                    width: Platform.OS == 'ios' ? '100' : '100%',
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

                




            </Stack.Navigator>

        </>
    );
};

export default MainRoutes;