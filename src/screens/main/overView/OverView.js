import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import BackHandler from '../../../component/BackHandler';
import Text12 from '../../../component/customText/Text12';
import {colors, fonts} from '../../../utils/Styles';
import {moderateScale, scale} from 'react-native-size-matters';
import {commonPadding} from '../../../utils/Helper';
import Text24 from '../../../component/customText/Text24';
import Text18 from '../../../component/customText/Text18';
import Text16 from '../../../component/customText/Text16';
import Text14 from '../../../component/customText/Text14';
import { ChevronDownIcon } from 'react-native-heroicons/solid';

const OverView = () => {
  const [seletedIndex, setSelectedIndex] = useState(0);
  const dummyData = [
    {
      name: `Total     Vehicles`,
      count: '140',
      color: '#FFEADA',
      colorText: '#F7954A',
    },
    {
      name: `Total       Rides`,
      count: '140',
      color: '#DDF9E4',
      colorText: '#23A949',
    },
    {
      name: `Total      Drivers`,
      count: '140',
      color: '#70A6E8',
      colorText: '#E4F0FF',
    },
    {
      name: `Total Intercity Ride`,
      count: '140',
      color: '#FFF9EC',
      colorText: '#F6A200',
    },
    {
      name: `Total Outstaion Rides `,
      count: '140',
      color: '#E4E9F2',
      colorText: '#000',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <BackHandler name={'Overview'} />

      {
        //#region  tabs
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: commonPadding,
            backgroundColor: colors.white,
            paddingTop: moderateScale(20),
          }}>
          {['Today', 'This Week', 'Custom Date'].map((ele, ind) => {
            return (
              <TouchableOpacity
              onPress={()=>setSelectedIndex(ind)}

                style={{
                  width: '32%',
                  backgroundColor:
                    seletedIndex == ind ? colors.yellow : colors.white,
                  borderWidth: seletedIndex == ind ? 0 : 1,
                  borderColor: colors.borderC,
                  padding: moderateScale(8),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: moderateScale(8),
                  alignItems: 'center',
                }}>
                <Text12 color={colors.theme} text={ele} />
              </TouchableOpacity>
            );
          })}
        </View>
        //#endregion
      }

      {
        //#region Overw Details

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: commonPadding,
            backgroundColor: colors.white,
            paddingBottom: moderateScale(20),
            flexWrap: 'wrap',
          }}>
          {dummyData.map((ele, ind) => {
            return (
              <TouchableOpacity
                style={{
                  width: '30%',
                  backgroundColor:
                    seletedIndex == ind ? colors.yellow : colors.white,
                  borderWidth: seletedIndex == ind ? 0 : 1,
                  borderColor: colors.borderC,
                  padding: moderateScale(8),
                  //   alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: moderateScale(8),
                  marginRight: moderateScale(10),
                  marginTop: moderateScale(15),
                  backgroundColor: ele.color,
                  height: moderateScale(90),
                }}>
                <Text12 text={ele.name} />
                <Text24 mt={10} color={ele.colorText} text={ele.count} />
              </TouchableOpacity>
            );
          })}
        </View>
        //#endregion
      }

      {
        //#region total earning

        <View
          style={{
            paddingHorizontal: commonPadding,
            marginTop: moderateScale(20),
          }}>
          <Text18 text={'Total Earnings'} />

          <View
            style={{
              backgroundColor: colors.white,
              paddingVertical: moderateScale(10),
              marginTop: moderateScale(20),
              paddingHorizontal: moderateScale(10),
              borderRadius:8
            }}>
            <View>
              <Text14
                text={'Your Earnings'}
                color={colors.placeholderColor}
                fontFamily={fonts.regular}
              />

              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text24 text={'2,290.00'} color={colors.black} />
                <ChevronDownIcon color={colors.black}/>
              </View>

              <View style={{marginTop: moderateScale(10)}}>
                <Image
                resizeMode='contain'
                  style={{width: '100%', height: moderateScale(100)}}
                  source={require('../../../assets/bg.png')}
                />
              </View>
            </View>
          </View>
        </View>
        //#endregion
      }
    </View>
  );
};

export default OverView;
