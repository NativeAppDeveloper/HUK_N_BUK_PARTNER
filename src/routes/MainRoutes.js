import {Platform, Image, AppState} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {moderateScale} from 'react-native-size-matters';
import Home from '../screens/main/home/Home';
import DrawerScreen from '../screens/drawerScreen/DrawerScreen';
import {colors, fonts} from '../utils/Styles';
import MyProfile from '../screens/main/profile/MyProfile';
import Notifaction from '../screens/main/notifaction/Notifaction';
import Notification from '../screens/main/notifaction/Notifaction';
import AboutApp from '../screens/main/term_about_privacy/AboutApp';
import Faq from '../screens/main/term_about_privacy/Faq';
// import MyRide from '../screens/main/myRide/MyRide';
import {width} from '../utils/Helper';
import Setting from '../screens/main/setting/Setting';
import Language from '../screens/main/setting/Language';
import PushNotifaction from '../screens/main/setting/PushNotifaction';
import Payments from '../screens/main/setting/Payments';
import HelpAndSupport from '../screens/main/help_support/HelpAndSupport';
import RequestCallBack from '../screens/main/help_support/RequestCallBack';
import AddMoney from '../screens/main/wallet/AddMoney';
import RideType from '../screens/main/myRide/RideType';
import RdieDetails from '../screens/main/myRide/RideDetails';
import BookRide from '../screens/main/home/BookRide';
import ConfirmRide from '../screens/main/home/ConfirmRide';
import RideStatus from '../screens/main/home/RideStatus';
import {icon} from '../utils/Image';
import Location from '../screens/common/Location';
import MyRequest from '../screens/main/myRequest/MyRequest';
import RequestDetails from '../screens/main/myRequest/RequestDetails';
import BidDetails from '../screens/main/myRequest/BidDetails';
import LuggageAllowance from '../screens/main/home/LuggageAllowance';
import InterCityRideDetail from '../screens/main/myRide/InterCityRideDetail';
import LocalRideDetails from '../screens/main/myRide/LocalRideDetails';
import QrScanner from '../screens/qrFlow/QrScanner';
// import DriverDetails from '../screens/qrFlow/DriverDetails';
import QrHome from '../screens/qrFlow/QrHome';
import QrInterCity_Rentel from '../screens/qrFlow/QrInterCity_Rentel';
import QrRideDetails from '../screens/qrFlow/QrRideDetails';
import SelectPassenger from '../screens/main/home/SelectPassenger';
import Depart_Arrival from '../screens/main/home/Depart_Arrival';
import BussinessDetails from '../screens/auth/signup/BussinessDetails';
import Vechicle from '../screens/main/vechicle/Vechicle';
import AddVechicle from '../screens/main/vechicle/AddVechicle';
import VechicleDetails from '../screens/main/vechicle/VechicleDetails';
import DriverList from '../screens/main/driver/DriverList';
import AddDriver from '../screens/main/driver/AddDriver';
import DriverDetails from '../screens/main/driver/DriverDetails';
import BankAccount from '../screens/main/bankAccount/BankAccount';
import RcDetails from '../screens/main/vechicle/RcDetails';
import InsuranceDetails from '../screens/main/vechicle/InsuranceDetails';
import PermitDetails from '../screens/main/vechicle/PermitDetails';
import PollutionDetails from '../screens/main/vechicle/PollutionDetails';
import LuggageSpace from '../screens/main/vechicle/LuggageSpace';
import VechicleInformation from '../screens/main/vechicle/VechicleInformation';
import GenrateQr from '../screens/main/vechicle/GenrateQr';
import OverView from '../screens/main/overView/OverView';
import MyBids from '../screens/main/myBids/MyBids';
import MyRide from '../screens/main/myRide/MyRide';
import PreBid_Create from '../screens/main/preBids/PreBid_Create';
import CreatePrebid from '../screens/main/preBids/CreatePrebid';
import PreBid_Details from '../screens/main/preBids/PreBid_Details';
import MyBidRideDetails from '../screens/main/myBids/MyBidRideDetails';
import AssignVechicle from '../screens/main/myBids/AssignVechicle';
import AssignVechicleInformation from '../screens/main/myBids/AssignVechicleInformation';
import RoundTripDetails from '../screens/main/myBids/RoundTripDetails';
import Wallet from '../screens/main/wallet/Wallet';
import EditVehicle from '../screens/main/vechicle/EditVehicle';
import {useFocusEffect} from '@react-navigation/native';
import {setDriverStatusServices} from '../services/Services';
import GooglePlacesInput from '../screens/common/GooglePlacesInput';
// import MyBids from '../screens/main/myBids/MyBids';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabStack = ({route}) => {
  return (
    <>
      <Tab.Navigator
        backBehavior="history"
        initialRouteName="SellerHome"
        screenOptions={({route: {name}}) => ({
          tabBarIcon: ({focused, color, size}) => {
            switch (name) {
              case 'Home':
                return (
                  <Image
                    source={icon.home}
                    style={{
                      tintColor: focused ? colors.theme : colors.gray,
                      height: moderateScale(25),
                      width: moderateScale(25),
                    }}
                    resizeMode="contain"
                  />
                );

              case 'Vehicles':
                return (
                  <Image
                    source={icon.carIcon}
                    style={{
                      tintColor: focused ? colors.theme : colors.gray,
                      height: moderateScale(25),
                      width: moderateScale(25),
                    }}
                    resizeMode="contain"
                  />
                );

              case 'My Ride':
                return (
                  <Image
                    source={icon.Ride}
                    style={{
                      tintColor: focused ? colors.theme : colors.gray,
                      height: moderateScale(25),
                      width: moderateScale(25),
                    }}
                    resizeMode="contain"
                  />
                );
              case 'My Bids':
                return (
                  <Image
                    source={icon.clipboardtick}
                    style={{
                      tintColor: focused ? colors.theme : colors.gray,
                      height: moderateScale(25),
                      width: moderateScale(25),
                    }}
                    resizeMode="contain"
                  />
                );

              case '':
                return (
                  <Image
                    source={icon.wallet2}
                    style={{
                      tintColor: focused ? colors.theme : colors.gray,
                      height: moderateScale(25),
                      width: moderateScale(25),
                    }}
                    resizeMode="contain"
                  />
                );
            }
          },

          keyboardHidesTabBar: false,
          tabBarActiveTintColor: colors.theme,
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: moderateScale(12),
            fontFamily: fonts.medium,
            // lineHeight:10

            // borderWidth:1,
          },
          tabBarStyle: {
            borderTopWidth: 0,
            paddingTop: 20,
            width: width,
            height: moderateScale(80),
            paddingBottom:
              Platform.OS == 'ios' ? moderateScale(15) : moderateScale(10),
            backgroundColor: colors.white,
            // paddingVertical:moderateScale(100)
          },
        })}>
        <Tab.Screen
          name={'Home'}
          options={{headerShown: false}}
          component={Home}
        />
        <Tab.Screen
          name={'Vehicles'}
          options={{headerShown: false}}
          component={Vechicle}
        />

        <Tab.Screen
          name={'My Bids'}
          options={{headerShown: false}}
          component={MyBids}
        />
        <Tab.Screen
          name={'My Ride'}
          options={{headerShown: false}}
          component={MyRide}
        />
        {/* <Tab.Screen
          name={'Wallet'}
          options={{headerShown: false}}
          component={Wallet}
        /> */}
      </Tab.Navigator>
    </>
  );
};

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'Home',
        drawerStyle: {
          width: Platform.OS == 'ios' ? '100%' : '100%',
          height: '100%',
          backgroundColor: colors.white,
        },
      }}
      drawerContent={props => <DrawerScreen {...props} />}>
      <Drawer.Screen name="Tab" component={TabStack} />
    </Drawer.Navigator>
  );
};

const MainRoutes = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const driverStatus = async () => {
    try {
      let response = await setDriverStatusServices();
      console.log('seucees',response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      // driverStatus()
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);

      if (appState.current == 'active') {
        driverStatus();
      } else {
        driverStatus();
      }
    });

    return () => {
      subscription.remove();
      // console.log('app is close')
    };
  }, []);

  useEffect(() => {
    // 'first'

    return () => {
      console.log('sachin');
    };
  }, []);

  return (
    <>
      <Stack.Navigator
        initialRouteName="DrawerStack"
        // initialRouteName="GooglePlacesInput"
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
        <Stack.Screen name="RequestDetails" component={RequestDetails} />
        <Stack.Screen name="BidDetails" component={BidDetails} />
        <Stack.Screen name="LuggageAllowance" component={LuggageAllowance} />
        <Stack.Screen
          name="InterCityRideDetail"
          component={InterCityRideDetail}
        />
        <Stack.Screen name="LocalRideDetails" component={LocalRideDetails} />
        <Stack.Screen name="QrScanner" component={QrScanner} />
        {/* <Stack.Screen name="DriverDetails" component={DriverDetails} /> */}
        <Stack.Screen name="QrHome" component={QrHome} />
        <Stack.Screen
          name="QrInterCity_Rentel"
          component={QrInterCity_Rentel}
        />
        <Stack.Screen name="QrRideDetails" component={QrRideDetails} />
        <Stack.Screen name="SelectPassenger" component={SelectPassenger} />
        <Stack.Screen name="Depart_Arrival" component={Depart_Arrival} />
        <Stack.Screen name="DriverList" component={DriverList} />

        {/* passenger list */}
        <Stack.Screen name="AddVechicle" component={AddVechicle} />
        <Stack.Screen name="VechicleDetails" component={VechicleDetails} />
        <Stack.Screen name="AddDriver" component={AddDriver} />
        <Stack.Screen name="DriverDetails" component={DriverDetails} />
        <Stack.Screen name="BankAccount" component={BankAccount} />
        <Stack.Screen name="RcDetails" component={RcDetails} />
        <Stack.Screen name="InsuranceDetails" component={InsuranceDetails} />
        <Stack.Screen name="PermitDetails" component={PermitDetails} />
        <Stack.Screen name="PollutionDetails" component={PollutionDetails} />

        <Stack.Screen name="LuggageSpace" component={LuggageSpace} />
        <Stack.Screen
          name="VechicleInformation"
          component={VechicleInformation}
        />
        <Stack.Screen name="GenrateQr" component={GenrateQr} />

        <Stack.Screen name="OverView" component={OverView} />

        <Stack.Screen name="PreBids" component={PreBid_Create} />

        {/* <Stack.Screen name="PreBids" component={PreBid_Create} /> */}
        <Stack.Screen name="CreatePrebid" component={CreatePrebid} />

        <Stack.Screen name="PreBid_Details" component={PreBid_Details} />
        <Stack.Screen name="MyBidRideDetails" component={MyBidRideDetails} />

        <Stack.Screen name="AssignVechicle" component={AssignVechicle} />
        <Stack.Screen
          name="AssignVechicleInformation"
          component={AssignVechicleInformation}
        />
        <Stack.Screen name="RoundTripDetails" component={RoundTripDetails} />

        <Stack.Screen name="Wallet" component={Wallet} />

        <Stack.Screen name="EditVehicle" component={EditVehicle} />

        <Stack.Screen name="GooglePlacesInput" component={GooglePlacesInput} />


        

        {/* route */}

        {/* EditVehicle */}

        {/* Upload Pollution Documnet */}

        {/* RequestDetails */}
      </Stack.Navigator>
    </>
  );
};

export default MainRoutes;
