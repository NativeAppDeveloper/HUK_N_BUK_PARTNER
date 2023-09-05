import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Switch,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {iphone8, width} from '../../../utils/Helper';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import {useNavigation} from '@react-navigation/native';
import Text18 from '../../../component/customText/Text18';
import {icon, images} from '../../../utils/Image';
import Text12 from '../../../component/customText/Text12';
import Text14 from '../../../component/customText/Text14';
import BackHandler from '../../../component/BackHandler';
import Button from '../../../component/customButton/Button';

const AssignVechicle = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [activeIndex,setActiveIndex]=useState(null)
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  return (
    <>
      <BackHandler name={'Vechicle'} />

      <View style={{marginTop: moderateScale(20)}}></View>

      <ScrollView contentContainerStyle={{paddingBottom: moderateScale(100)}}>
        {[1, 1, 1, 1].map((ele, ind) => {
          return (
            <TouchableOpacity 
            onPress={()=>setActiveIndex(ind)}
            style={[styles.vehicleContainer,{borderColor:activeIndex==ind?colors.yellow:colors.borderC,overflow:'hidden'}]}>
              <View style={styles.vehicleInfo}>
                <View style={styles.vehicleImageContainer}>
                  <View style={styles.vehicleImage}>
                    <Image
                      resizeMode="contain"
                      style={CommonStyle.img}
                      source={icon.car2}
                    />
                  </View>
                </View>

                <View
                  style={{
                    marginLeft: moderateScale(5),
                    flexDirection: 'row',
                    width: '80%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text14
                      mt={1}
                      color={colors.theme}
                      text={'UP-78-DY-8451'}
                    />
                    <Text12
                      mt={1}
                      color={colors.placeholderColor}
                      text={'Taxi'}
                    />
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      style={{
                        height: moderateScale(20),
                        width: moderateScale(20),
                        marginRight: moderateScale(10),
                      }}>
                      <Image style={CommonStyle.img} source={images.edit1} />
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        height: moderateScale(20),
                        width: moderateScale(20),
                      }}>
                      <Image style={CommonStyle.img} source={images.trash} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {ind % 2 == 0 ? (
                <View
                  style={{
                    paddingHorizontal: moderateScale(10),
                    backgroundColor: colors.yellow,
                    paddingVertical: moderateScale(7),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{
                      height: moderateScale(30),
                      width: moderateScale(30),
                    }}
                    resizeMode="contain"
                    source={icon.diverIcon}
                  />
                  <Text12
                    fontFamily={fonts.semibold}
                    color={colors.theme}
                    text={'Driver not assigned yet'}
                  />

                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('VechicleInformation', {flow: '1'})
                    }
                    style={{
                      backgroundColor: colors.theme,
                      paddingVertical: moderateScale(7),
                      paddingHorizontal: scale(20),
                      borderRadius: 8,
                    }}>
                    <Text12
                      mt={1}
                      color={colors.white}
                      text={'Assign Driver'}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View
                  style={{
                    paddingHorizontal: moderateScale(10),
                    backgroundColor: colors.white,
                    paddingVertical: moderateScale(10),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTopWidth: 1,
                    borderColor: colors.borderC,
                    paddingTop: moderateScale(15),
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={{
                        height: moderateScale(30),
                        width: moderateScale(30),
                      }}
                      resizeMode="contain"
                      source={icon.profile}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text12
                        fontFamily={fonts.regular}
                        color={colors.secondry}
                        text={'Assigned Driver'}
                      />
                      <Text12
                        fontFamily={fonts.bold}
                        color={colors.theme}
                        text={'Akshit Kumar'}
                      />
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('VechicleInformation')}
                    style={{
                      backgroundColor: colors.theme,
                      paddingVertical: moderateScale(7),
                      paddingHorizontal: scale(20),
                      borderRadius: 8,
                    }}>
                    <Text12 mt={1} color={colors.white} text={'View Details'} />
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: width,
          backgroundColor: colors.theme,
          paddingVertical: moderateScale(15),
          paddingBottom: moderateScale(25),
        }}>
        <Button onPress={()=>navigation.navigate('AssignVechicleInformation')} text={'Assign Vehicle'} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.theme,
    paddingTop:
      Platform.OS === 'ios' &&
      (iphone8 ? moderateScale(10) : moderateScale(40)),
  },
  header: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: moderateVerticalScale(26),
    backgroundColor: colors.theme,
    paddingHorizontal: scale(10),
    justifyContent: 'center',
  },
  vehicleContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: moderateScale(10),
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.borderC,
  },
  vehicleStatus: {
    backgroundColor: colors.lightGreen,
    padding: moderateScale(10),
  },
  statusInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusIcon: {
    height: moderateScale(20),
    width: scale(40),
  },
  vehicleInfo: {
    padding: moderateScale(10),
    flexDirection: 'row',
    paddingVertical: moderateScale(20),
  },
  vehicleImageContainer: {
    width: moderateScale(46),
    height: moderateScale(46),
    borderWidth: 1,
    borderRadius: moderateScale(23),
    borderColor: colors.secondry,
  },
  vehicleImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  VechicleLocation: {
    backgroundColor: '#ecf2ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(8),
  },
});

export default AssignVechicle;
