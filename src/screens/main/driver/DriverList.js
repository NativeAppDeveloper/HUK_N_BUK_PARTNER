import {View, Text, TouchableOpacity, Image, ScrollView, Platform} from 'react-native';
import React, { useEffect, useState } from 'react';
import BackHandler from '../../../component/BackHandler';
import {useNavigation} from '@react-navigation/native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import {icon} from '../../../utils/Image';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';
import Text10 from '../../../component/customText/Text10';
import {StarIcon} from 'react-native-heroicons/solid';
import Button from '../../../component/customButton/Button';
import {iphone8, width} from '../../../utils/Helper';
import { assignDriverServices, getDriverListServices } from '../../../services/Services';

const DriverList = ({route}) => {
  const navigation = useNavigation();
  const paramData = route?.params?.flow;
  const [selectedIndex,setSelectedIndex]=useState(null)

  const paddingTopFun=()=>{
    if(Platform.OS=='ios'&& !iphone8){
     return moderateScale(60)
    }
    if(Platform.OS=='ios'&&iphone8){
    return  moderateScale(25)
    }
    else{
     return moderateScale(25)
    }
  } 


  const driverList=async()=>{
    try {
      let response = await getDriverListServices()
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }


  const assignDriver = async () => {
    let objToSend = {
      vehicleId: '',
      driverId: '',
      is_intercity: true, 
      is_rental: true, 
      is_outstation: true, 
      is_online: true, 
    };
    try {
      let response = await assignDriverServices(objToSend);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    driverList()
  }, [])
  
  // console.log(paramData,'=-=-=');
  return (
    <View style={{flex: 1}}>
      <BackHandler name={'Drivers'} />

      {paramData && (
        <TouchableOpacity
          onPress={() => navigation.navigate('AddDriver')}
          style={{
            position: 'absolute',
            zIndex: 999,
            top: paddingTopFun(),
            right: moderateScale(20),
            // paddingTop:paddingTopFun()
          }}>
          <Text14 color={colors.yellow} text={'+Add'} />
        </TouchableOpacity>
      )}
      <ScrollView contentContainerStyle={{paddingBottom: moderateScale(200)}}>
        <View style={{marginTop: moderateScale(20)}}>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((ele, ind) => {
            return (
              <TouchableOpacity
              onPress={()=>setSelectedIndex(ind)}
                // onPress={() => navigation.navigate('My Request')}
                key={ind}
                style={{
                  paddingHorizontal: scale(10),
                  // borderTopColor: colors.placeholderColor,
                  marginTop: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: colors.white,
                  width: '90%',
                  alignSelf: 'center',
                  paddingVertical: moderateVerticalScale(12),
                  borderRadius: 10,
                  // borderWidth: 1,
                  borderWidth:paramData&&selectedIndex==ind?1:0,
                  // borderColor: colors.borderC,
                  borderColor:paramData&&selectedIndex==ind?colors.yellow:colors.white,
                  overflow:'hidden'
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DriverDetails')}
                  style={{
                    height: moderateScale(50),
                    width: moderateScale(50),
                    borderWidth: 1,
                    borderRadius: 40,
                  }}>
                  <Image
                    source={icon.profile}
                    resizeMode="contain"
                    style={CommonStyle.img}
                  />
                </TouchableOpacity>

                <View style={{marginLeft: 15}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text14
                      color={colors.theme}
                      mt={1}
                      text={'Akshit Kumar •'}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 5,
                      }}>
                      <StarIcon
                        color={colors.yellow}
                        size={moderateScale(10)}
                      />
                      <Text10
                        mt={1}
                        text={'4.5'}
                        color={colors.placeholderColor}
                      />
                    </View>
                  </View>
                  <Text12
                    fontFamily={fonts.regular}
                    color={colors.gray}
                    text={'Kanpur, Uttar Pradesh'}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {paramData && (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: width,
            backgroundColor: colors.theme,
            paddingVertical: moderateScale(15),
            paddingBottom: moderateScale(25),
          }}>
          <Button onPress={assignDriver} text={'Assign'} />
        </View>
      )}
    </View>
  );
};

export default DriverList;
