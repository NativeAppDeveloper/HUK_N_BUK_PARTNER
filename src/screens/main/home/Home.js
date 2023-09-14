import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';
import Text16 from '../../../component/customText/Text16';
import Text18 from '../../../component/customText/Text18';
import Text24 from '../../../component/customText/Text24';
import Button from '../../../component/customButton/Button';
import CustomMapView from '../../../component/CustomMapView';
import {moderateScale, scale} from 'react-native-size-matters';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import {icon, images} from '../../../utils/Image';
import {width} from '../../../utils/Helper';
import {TextInput} from 'react-native-gesture-handler';
import {
  BellIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from 'react-native-heroicons/solid';

export default function Home() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    navigation.closeDrawer();
  }, []);

  return (
    <View style={{flex: 1}}>
      <CustomMapView Marker={true} mapStyle={styles.mapStyle} />

      {
        //#region header Start
        <View
          style={{
            width: width,
            alignSelf: 'center',
            backgroundColor: colors.theme,
            elevation: 5,
            paddingHorizontal: moderateScale(15),
            paddingVertical: moderateScale(15),
            paddingTop:
              Platform.OS == 'ios' ? moderateScale(45) : moderateScale(5),
          }}>
          {Platform.OS == 'android' && <SafeAreaView />}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignItems: 'center',
              zIndex: 999,
            }}>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{height: moderateScale(17), width: moderateScale(17)}}>
              <Image
                style={[CommonStyle.img, {tintColor: colors.white}]}
                source={icon.Vector}
              />
            </TouchableOpacity>

            <View style={{marginLeft: moderateScale(15)}}>
              <Text16
                fontFamily={fonts.bold}
                color={colors.white}
                lineHeight={0}
                mt={moderateScale(1)}
                text={'New Delhi'}
              />
              <View style={{flexDirection: 'row', marginTop: 3}}>
                <MapPinIcon color={colors.yellow} size={moderateScale(11)} />
                <Text12 mt={1} color={colors.white} ff text={'Noida, 1202'} />
              </View>
            </View>

            <TouchableOpacity style={{position: 'absolute', right: 0, top: 15}}>
              <BellIcon color={colors.white} />
              {/* <Image source={icon.bell} style={{tintColor:colors.white,alignSelf:'flex-end',height:moderateScale(25),width:moderateScale(25)}}/> */}
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: moderateScale(17),
              width: moderateScale(17),
              position: 'absolute',
              right: 15,
              top: moderateScale(17),
            }}>
            <Image style={CommonStyle.img} source={icon.current} />
          </View>
        </View>
        //#endregion
      }
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
