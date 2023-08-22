import {View, Text, FlatList, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import BackHandler from '../../../component/BackHandler';
import {moderateScale, scale} from 'react-native-size-matters';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import Text16 from '../../../component/customText/Text16';
import Text24 from '../../../component/customText/Text24';
import Input from '../../../component/customInput/Input';
import {Image} from 'react-native-svg';
import Text12 from '../../../component/customText/Text12';
import Text18 from '../../../component/customText/Text18';
import {icon} from '../../../utils/Image';
import Button from '../../../component/customButton/Button';
import Text14 from '../../../component/customText/Text14';
import Text20 from '../../../component/customText/Text20';
import {
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';
import Text22 from '../../../component/customText/Text22';
import { useNavigation } from '@react-navigation/native';

const Wallet = () => {
    const {navigate}=useNavigation()
  const dummyData = [
    {
      text: 'Pay To Driver',
      desc: 'Txn ID #515456655, Oct 14, 10:24 AM',
      add: true,
    },
    {
      text: 'Pay To Driver',
      desc: 'Txn ID #515456655, Oct 14, 10:24 AM',
      add: false,
    },
    {
      text: 'Pay To Driver',
      desc: 'Txn ID #515456655, Oct 14, 10:24 AM',
      add: true,
    },
    {
      text: 'Pay To Driver',
      desc: 'Txn ID #515456655, Oct 14, 10:24 AM',
      add: false,
    },
    {
      text: 'Pay To Driver',
      desc: 'Txn ID #515456655, Oct 14, 10:24 AM',
      add: true,
    },
    {
      text: 'Pay To Driver',
      desc: 'Txn ID #515456655, Oct 14, 10:24 AM',
      add: false,
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          borderBottomWidth: index !== dummyData.length - 1 ? 0.5 : 0,
          paddingVertical: moderateScale(10),
          paddingHorizontal: scale(15),
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderColor: colors.placeholderColor,
        }}>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: moderateScale(20),
              width: moderateScale(20),
              borderWidth: 1,
              borderRadius: 200,
            }}>
            {/* <Image/> */}
          </View>
          <View style={{marginLeft: scale(10)}}>
            <Text12
              mt={3}
              color={colors.black}
              text={'Pay To Driver'}
              fontFamily={fonts.semibold}
            />
            <Text
              style={{
                fontFamily: fonts.regular,
                fontSize: 10,
                marginTop: moderateScale(5),
              }}>{`Txn ID #515456655, Oct 14, 10:24 AM`}</Text>
          </View>
        </View>

        <View>
          <Text14 fontFamily={fonts.semibold} text={'- ₹15.00'} />
          <Text
            style={{
              fontFamily: fonts.regular,
              fontSize: 10,
              marginTop: moderateScale(5),
            }}>{`#515456655`}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={CommonStyle.container}>
      {/* <BackHandler name={'Wallet'} /> */}

      {
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            backgroundColor: colors.theme,
            paddingHorizontal: scale(15),
            paddingVertical: moderateScale(10),
            paddingBottom: moderateScale(20),
          }}>
            <SafeAreaView/>

            <Text18  text={'Wallet'} color={colors.white} textAlign={'center'}/>
          <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:moderateScale(10),alignItems:'center'}}>
          <View>
          <Text16
            text={'Total Balance'}
            fontFamily={fonts.regular}
            color={colors.white}
          />
          <Text24
            text={'₹ 124.57'}
            color={colors.white}
            fontFamily={fonts.bold}
          />
          </View>

          <TouchableOpacity 
          onPress={()=>navigate('AddMoney')}
          style={{backgroundColor:colors.yellow,height:32,justifyContent:"center",paddingHorizontal:scale(10),borderRadius:8}}>
            <Text14 mt={1} text={'Add Money'}/>
          </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 1,
              marginTop: moderateScale(20),
              borderRadius: 8,
              borderColor: colors.placeholderColor,
            }}>
            <Input placeHolder={'Enter Amount'} />
          </View>
        </View>
      }

      {
        //#region trasactionList
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: scale(10),
              paddingVertical: moderateScale(10),
            }}>
            <Text14 text={'Last Transactions'} />
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                paddingHorizontal: scale(10),
              }}>
              <AdjustmentsHorizontalIcon
                color={colors.gray}
                size={moderateScale(20)}
              />
              <Text14 mt={1} text={'  Filter'} />
            </TouchableOpacity>
          </View>
          <FlatList renderItem={renderItem} data={dummyData} />
        </View>
        //#endregion
      }
      {/* <InformationModal/> */}
    </View>
  );
};

export default Wallet;

const InformationModal = () => {
  return (
    <Modal transparent>
      <View
        style={{
          backgroundColor: 'rgba(126,126,126,0.55)',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 'auto',
            width: '90%',
            backgroundColor: colors.white,
            borderRadius: moderateScale(10),
            paddingHorizontal: scale(15),
            paddingBottom: moderateScale(20),
          }}>
          <Text18
            mt={moderateScale(20)}
            fontFamily={fonts.bold}
            text={'Pay To Driver'}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text12
                color={colors.gray}
                fontFamily={fonts.regular}
                text={'Txn Id'}
              />
              <Text12
                color={colors.black}
                fontFamily={fonts.extraBold}
                text={'#515456655'}
              />
            </View>
            <View>
              <Text12
                color={colors.gray}
                fontFamily={fonts.regular}
                text={'Date& Time'}
              />
              <Text12
                color={colors.black}
                fontFamily={fonts.extraBold}
                text={'Oct 14, 10:24 AM'}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: moderateScale(10),
            }}>
            <View>
              <Text12
                color={colors.gray}
                fontFamily={fonts.regular}
                text={'Booking Id'}
              />
              <Text12
                color={colors.black}
                fontFamily={fonts.extraBold}
                text={'#515456655'}
              />
            </View>
            <View>
              <Text12
                color={colors.gray}
                fontFamily={fonts.regular}
                text={'Amount'}
              />
              <Text20
                color={colors.yellow}
                fontFamily={fonts.bold}
                text={'-$15'}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
