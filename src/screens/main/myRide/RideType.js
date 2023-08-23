
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonStyle, colors, fonts} from '../../../utils/Styles';
import BackHandler from '../../../component/BackHandler';
import {icon, images} from '../../../utils/Image';
import {moderateScale, scale} from 'react-native-size-matters';
import Text16 from '../../../component/customText/Text16';
import Text14 from '../../../component/customText/Text14';
import Text12 from '../../../component/customText/Text12';
import { useNavigation } from '@react-navigation/native';

const RideType = ({route}) => {
  const rideType = route?.params?.rideType;
  const [activeTab, setActiveTab] = useState(0);
  const {navigate}=useNavigation()
  const [tabData, setTabData] = useState([
    {
      name: 'Ongoing',
    },
    {
      name: 'Upcoming',
    },
    {
      name: 'Completed',
    },
    {
      name: 'Cancelled',
    },
  ]);

  return (
    <View style={[CommonStyle.container, styles.container]}>
      <BackHandler name={rideType} />

      <View style={styles.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabData.map((ele, ind) => (
            <TouchableOpacity
              key={ind}
              onPress={() => setActiveTab(ind)}
              style={[
                styles.tabButton,
                {
                  backgroundColor:
                    activeTab == ind ? colors.yellow : colors.white,
                  marginLeft: ind == 0 ? 20 : 0,
                },
              ]}>
              <Text12 mt={1} color={colors.theme} text={ele.name} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[1, 1, 1, 1, 1, 1]}
          renderItem={() => (
            <TouchableOpacity
            onPress={()=>navigate('RdieDetails',{rideStatus:tabData[activeTab].name})}
             style={styles.itemContainer}>
              <View style={styles.bookingIdContainer}>
                <Text
                  style={
                    styles.bookingIdText
                  }>{`Booking ID #41651651561 • One Way`}</Text>
              </View>

              {
                //#region
                <View
                  style={{
                    paddingHorizontal: scale(10),
                    marginTop: moderateScale(10),
                  }}>
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          height: moderateScale(23),
                          width: moderateScale(23),
                        }}>
                        <Image
                          source={icon.currentLocation}
                          style={CommonStyle.img}
                        />
                      </View>

                      <View>
                        <Text14
                          color={colors.theme}
                          mt={1}
                          text={'333B, Anchorv  ale Link'}
                        />
                        <Text12
                          fontFamily={fonts.regular}
                          color={colors.gray}
                          text={'Pick up 12:05PM, 23 Feb'}
                        />
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      height: 50,
                      borderColor: 'black',
                      borderLeftWidth: 1,
                      borderStyle: 'dashed',
                      marginHorizontal: scale(10),
                      // alignItems:'center',
                      justifyContent: 'center',
                      paddingLeft: 20,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        style={{height: 17, width: 17}}
                        source={icon.Time}
                      />
                      <Text style={{fontSize: 10, fontFamily: fonts.regular}}>
                        {' '}
                        456 km
                      </Text>
                      <Image
                        style={{
                          height: 17,
                          width: 17,
                          marginHorizontal: scale(10),
                        }}
                        source={icon.distance}
                      />
                      <Text style={{fontSize: 10, color: '#f7954a'}}>
                        456 km
                      </Text>
                    </View>
                  </View>

                  <View style={{flexDirection: 'row', marginTop: 8}}>
                    <View
                      style={{
                        height: moderateScale(23),
                        width: moderateScale(23),
                      }}>
                      <Image
                        source={icon.currentLocation}
                        style={CommonStyle.img}
                      />
                    </View>

                    <View>
                      <Text14
                        color={colors.theme}
                        mt={1}
                        text={'333B, Anchorv  ale Link'}
                      />
                      <Text12
                        fontFamily={fonts.regular}
                        color={colors.gray}
                        text={'Pick up 12:05PM, 23 Feb'}
                      />
                    </View>
                  </View>
                </View>
                //#endregion
              }

              {
                //#region  bottom View
                <View
                  style={{
                    borderTopWidth: 1,
                    paddingHorizontal: scale(10),
                    borderTopColor: colors.placeholderColor,
                    paddingTop: 5,
                    marginTop: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{height: 40, width: 40}}>
                    <Image
                      source={icon.dummy}
                      resizeMode="contain"
                      style={CommonStyle.img}
                    />
                  </View>

                  <View style={{marginLeft: 15}}>
                    <Text14
                      color={colors.theme}
                      mt={1}
                      text={'333B, Anchorv  ale Link'}
                    />
                    <Text12
                      fontFamily={fonts.regular}
                      color={colors.gray}
                      text={'Pick up 12:05PM, 23 Feb'}
                    />
                  </View>

                  <View
                    style={{
                      marginLeft: 15,
                      position: 'absolute',
                      right: 8,
                      top: 10,
                    }}>
                    <Text12 color={colors.theme} mt={1} text={'Total Amount'} />
                    <Text12
                      textAlign={'right'}
                      fontFamily={fonts.regular}
                      color={colors.black}
                      text={'₹ 7,325'}
                    />
                  </View>
                </View>
                //#endregion
              }
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(20),
  },
  tabButton: {
    width: scale(90),
    alignItems: 'center',
    paddingVertical: moderateScale(10),
    marginRight: 10,
    borderRadius: 8,
  },
  listContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  itemContainer: {
    borderWidth: 1,
    marginTop: moderateScale(20),
    paddingVertical: moderateScale(10),
    borderColor: colors.placeholderColor,
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  bookingIdContainer: {
    borderBottomWidth: 0.5,
    paddingBottom: moderateScale(10),
    borderColor: colors.placeholderColor,
    paddingHorizontal: scale(10),
  },
  bookingIdText: {
    fontSize: 10,
    color: colors.theme,
    fontFamily: fonts.regular,
  },
});

export default RideType;
