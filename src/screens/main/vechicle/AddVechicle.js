import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import BackHandler from '../../../component/BackHandler';
import {icon, images} from '../../../utils/Image';
import Text16 from '../../../component/customText/Text16';
import {moderateScale, scale} from 'react-native-size-matters';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import {ChevronDoubleLeftIcon} from 'react-native-heroicons/outline';
import {ChevronRightIcon} from 'react-native-heroicons/solid';
import Button from '../../../component/customButton/Button';
import {useNavigation} from '@react-navigation/native';
import Text12 from '../../../component/customText/Text12';

const AddVechicle = ({route}) => {
  const navigation = useNavigation();
  const paramData=route?.params?.flow

  console.log(paramData,'paramData')

  const [vechicleDetails, setVechicleDetails] = useState([
    {
      name: 'Owner Details',
      screen:'VechicleDetails'
    },
    {
      name: 'RC Details',
      screen:'RcDetails'
    },
    {
      name: 'Insurance Details',
      screen:'InsuranceDetails'
    },
    {
      name: 'Permit Details',
      screen:'PermitDetails'
    },
    {
      name: 'Pollution Details',
      screen:'PollutionDetails'

    },
    {
      name: 'Luggage Allowance',
      screen:'LuggageSpace'
    },
  ]);

  return (
    <View>
      <BackHandler name={'Add New Vehicle'} />

      {
        //#region  vechole list
        <View>
          {vechicleDetails.map((ele, ind) => {
            return (
              <TouchableOpacity 
              onPress={() => {
                navigation.navigate(ele.screen,{item:ele});
              }}
              style={styles.card}>
                <View style={styles.cardInner}>
                  <View
                    style={{
                      height: moderateScale(46),
                      width: moderateScale(46),
                      borderRadius: 100,
                    }}>
                    <Image
                      style={CommonStyle.img}
                      resizeMode="contain"
                      source={ind == 0 ? images.c1 : images.c2}
                    />
                  </View>
                  <View style={{marginLeft:10}}>
                  <Text16 color={colors.theme} mt={1} text={ele.name} />
                 {paramData&& <Text12 fontFamily={fonts.regular} color={true?colors.green:colors.red}  text={true?'Completed':'Incomplete'}/>}

                  </View>
                </View>
                  <View>
                    {
                      paramData?<Image resizeMode='contain' style={{height:18,width:18}} source={true?require('../../../assets/verify.png'):require('../../../assets/red.png')}/>:
                <ChevronRightIcon color={colors.placeholderColor} />
                    }

                  </View>
              </TouchableOpacity>
            );
          })}

          <Button
          disabled={!paramData?true:false}
            onPress={() => {
              navigation.navigate('Vehicles');
            }}
            mt={moderateScale(40)}
            backgroundColor={paramData?colors.yellow:'#d9d9d9'}
            text={'Add Vehicle'}
          />
        </View>
        //#endregion
      }
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    paddingVertical: moderateScale(10),
    borderRadius: 8,
    elevation: 2,
    marginTop: moderateScale(20),
    paddingHorizontal: scale(10),
    justifyContent: 'space-between',
  },
  cardInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AddVechicle;
