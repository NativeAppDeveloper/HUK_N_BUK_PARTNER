import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';

import CustomMapView from '../../../component/CustomMapView';
import {moderateScale, scale} from 'react-native-size-matters';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import {icon, images} from '../../../utils/Image';
import {width} from '../../../utils/Helper';
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  XMarkIcon,
} from 'react-native-heroicons/solid';
import Button from '../../../component/customButton/Button';
import Text16 from '../../../component/customText/Text16';
import Text20 from '../../../component/customText/Text20';
import Text18 from '../../../component/customText/Text18';
import RideCancelModal from '../../../component/modal/RideCancelModal';

export default function RideStatus() {
  const navigation = useNavigation();
  
  const [activeTab, setActiveTab] = useState(0);
  const [offerModal, SetOfferModal] = useState(false);
  const [slectedIndex, setSetlectedIndex] = useState(0);
  const [findDriver, setFindDriver] = useState(false);
  const [cancleRide,setCancelRide]=useState(false)
  const data = [
    {
      carName: 'Hatchback',
      desc: 'Comfy,Economical cars',
      price: '₹300-400',
    },
    {
      carName: 'Sedan',
      desc: 'Spacious Sedan ,Top Drivers',
      price: '₹400-600',
    },
    {
      carName: 'SUV',
      desc: 'Luxury Compfort,more Space',
      price: '₹400-600',
    },
  ];

  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <CustomMapView Marker={true} mapStyle={styles.mapStyle} />
      <View
        style={{
          backgroundColor: colors.white,
          paddingVertical: moderateScale(15),
        }}>
        <View
          style={{
            paddingHorizontal: scale(15),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text20 fontFamily={fonts.semibold} text={'Driver is on the way'} />

          <View
            style={{
              backgroundColor: colors.yellow,
              alignItems: 'center',
              padding: 5,
              paddingHorizontal: scale(15),
              borderRadius: 8,
              marginBottom: moderateScale(10),
            }}>
            <Text14 mt={1} text={'2'} />
            <Text14 mt={1} text={'Min'} />
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: scale(15),
            borderBottomWidth: 1,
            borderColor: colors.borderC,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: moderateScale(10),
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{height: moderateScale(50), width: moderateScale(50)}}>
              <Image
                resizeMode="contain"
                style={CommonStyle.img}
                source={icon.dummy}
              />
            </View>

            <View>
              <Text14
                fontFamily={fonts.semibold}
                color={colors.theme}
                text={'Akshit Kumar •'}
              />
              <Text12
                fontFamily={fonts.extraLight}
                color={colors.secondry}
                text="UP16-BV-0000 • Wagon R"
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                height: moderateScale(30),
                width: moderateScale(30),
                backgroundColor: colors.borderC,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: moderateScale(100),
              }}>
              <Image style={{height: '60%', width: '60%'}} source={icon.call} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: moderateScale(30),
                width: moderateScale(30),
                backgroundColor: colors.borderC,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: moderateScale(100),
                marginLeft: 10,
              }}>
              <Image style={{height: '60%', width: '60%'}} source={icon.sms} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: scale(15),
            borderBottomWidth: 1,
            borderColor: colors.borderC,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: moderateScale(10),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{height: moderateScale(20), width: moderateScale(20)}}>
              <Image
                resizeMode="contain"
                style={CommonStyle.img}
                source={icon.currentLocation}
              />
            </View>

            <View style={{marginLeft: 10}}>
              <Text14
                fontFamily={fonts.semibold}
                text={'333B, Anchorv  ale Link'}
                color={colors.theme}
              />
              <Text12
                fontFamily={fonts.extraLight}
                color={colors.secondry}
                text="Pick up 12:05PM"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: scale(15),
            borderBottomWidth: 1,
            borderColor: colors.borderC,
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            paddingBottom: moderateScale(10),
            paddingTop: moderateScale(15),
          }}>
          <Text14
            fontFamily={fonts.bold}
            text={'1 Hour (10 km Included )'}
            color={colors.theme}
          />
          <Text12
            fontFamily={fonts.extraLight}
            color={colors.secondry}
            text="Booking Time"
          />
        </View>

        <View
          style={{
            paddingHorizontal: scale(15),
            borderColor: colors.borderC,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: moderateScale(10),
            paddingTop: moderateScale(15),
          }}>
          <View>
            <Text12
              fontFamily={fonts.extraLight}
              color={colors.secondry}
              text="Payment"
            />
            <Text14
              fontFamily={fonts.bold}
              text={`Card : ........6543`}
              color={colors.theme}
            />
          </View>

          <View>
            <Text12
              fontFamily={fonts.extraLight}
              color={colors.secondry}
              text="Estimated Price"
            />
            <Text14
              textAlign={'right'}
              fontFamily={fonts.bold}
              text={`₹346`}
              color={colors.theme}
            />
          </View>
        </View>

        <View>
            <TouchableOpacity
            onPress={()=>setCancelRide(true)}
             style={{borderBottomWidth:1,alignSelf:'center',marginTop:moderateScale(20)}}>
                <Text18 text={'Cancel Ride'}/>
            </TouchableOpacity>
        </View>
      </View>

      <RideCancelModal cancel={cancleRide} setCancelRide={setCancelRide}/>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    height: moderateScale(290),
    width: width,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
  },
  imgContainer: {
    width: scale(80),
    height: moderateScale(80),
  },
  mapStyle: {
    flex: 2,
    position: 'absolute',
    top: moderateScale(16),
    left: 0,
    right: 0,
    bottom: '0%',
    zIndex: -1,
  },
  carContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: scale(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    backgroundColor: colors.white,
  },
  destination: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: moderateScale(10),

    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    marginTop: moderateScale(15),
  },
  searchContainer: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#EDF1F7',
    paddingVertical: moderateScale(1),
    borderRadius: moderateScale(4),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(10),
  },
});
