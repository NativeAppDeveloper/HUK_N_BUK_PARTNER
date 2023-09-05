import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignupSeteps from '../../../component/common/SignupSeteps'
import Text24 from '../../../component/customText/Text24'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import { CommonStyle, colors } from '../../../utils/Styles'
import CustomDropDown from '../../../component/common/CustomDropDown'
import { icon, images } from '../../../utils/Image'
import Text14 from '../../../component/customText/Text14'
import { commonPadding, width } from '../../../utils/Helper'
import Text12 from '../../../component/customText/Text12'
import Text22 from '../../../component/customText/Text22'
import Button from '../../../component/customButton/Button'
import Text10 from '../../../component/customText/Text10'

const CreatePrebid = () => {
  const dropDownData = [
    { label: 'Car', value: 'Car' },
    { label: 'SUV', value: 'SUV' },
  ];

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [prefrence, setPrefrence] = useState(1);
  const [isChecked, setIsChecked] = useState(false);



  const handleVehicleChange = (value) => {
    setSelectedVehicle(value);
  };
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <View style={{ width: '100%', alignSelf: 'center', backgroundColor: '#f9f9f9' }}>
        <View style={{paddingHorizontal:commonPadding}}>
        <SignupSeteps step={''} />
        </View>
        <KeyboardAwareScrollView contentContainerStyle={{ paddingBottom: moderateScale(150) }}>
          <View>
            <View style={{ marginTop: moderateVerticalScale(20), left: moderateScale(20) }}>
              <Text24 color={colors.theme} text={'Create Pre Bid'} />
            </View>
            <View style={{ marginTop: moderateScale(10) }}>
              <CustomDropDown
                placeholder={'Select Vehicle'}
                dropDownData={dropDownData}
                value={selectedVehicle}
                onChange={(item)=>console.log(item)}
                borderColor={colors.borderC}
              />
              <View style={styles.container}>
                <Image source={icon.off} style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder={"Pick up Location"}
                  placeholderTextColor="gray"
                />
              </View>
              <View style={styles.container}>
                <Image source={icon.location} style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder={"Drop Location"}
                  placeholderTextColor="gray"
                />
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Image
                  style={{
                    height: 17,
                    width: 17,
                    marginHorizontal: scale(10),
                    top: moderateScale(33),
                    tintColor: colors.secondry, left: moderateScale(10)

                  }}
                  source={icon.distance}
                />
                <Text14 mt={moderateScale(30)} color={colors.secondry} text={'Total: 1230 Km'} />
                <View style={styles.container2}>
                  <TextInput
                  keyboardType='number-pad'
                    style={styles.input}
                    placeholder={"Enter Price"}
                    placeholderTextColor="gray"
                  />
                </View>

              </View>
              <View style={{ marginTop: moderateScale(20), left: moderateScale(20) }}>
                <Text14 text={'Toll Tax:'} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: moderateScale(10) }}>
                  <TouchableOpacity
                    onPress={() => setPrefrence(1)}
                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: 22, width: 22, }}>
                      <Image style={[CommonStyle.img,]} source={prefrence == 1 ? icon.off : icon.on} />
                    </View>
                    <Text12 color={colors.secondry} text={'   Include'} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setPrefrence(2)}
                    style={{ flexDirection: 'row', alignItems: 'center', marginLeft: moderateScale(20) }}>
                    <View style={{ height: 22, width: 22 }}>
                      <Image style={[CommonStyle.img,]} source={prefrence == 2 ? icon.off : icon.on} />
                    </View>
                    <Text12 color={colors.secondry} text={'   Exclude'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
              <View style={styles.container3}>
                <TextInput
                 keyboardType='number-pad'
                  style={styles.input}
                  placeholder={"Min"}
                  placeholderTextColor="gray"
                />
              </View>
              <View style={styles.container3}>
                <TextInput
                 keyboardType='number-pad'
                  style={styles.input}
                  placeholder={"Max"}
                  placeholderTextColor="gray"
                />
              </View>
            </View>
            <View style={{ marginTop: moderateScale(20), left: moderateScale(20) }}>
              <Text14 text={'State Tax:'} />

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: moderateScale(10) }}>
                <TouchableOpacity
                  onPress={() => setPrefrence(1)}
                  style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ height: 22, width: 22, }}>
                    <Image style={[CommonStyle.img,]} source={prefrence == 1 ? icon.off : icon.on} />
                  </View>
                  <Text12 color={colors.secondry} text={'   Include'} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setPrefrence(2)}
                  style={{ flexDirection: 'row', alignItems: 'center', marginLeft: moderateScale(20) }}>
                  <View style={{ height: 22, width: 22 }}>
                    <Image style={[CommonStyle.img,]} source={prefrence == 2 ? icon.off : icon.on} />
                  </View>
                  <Text12 color={colors.secondry} text={'   Exclude'} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              <TextInput
               keyboardType='number-pad'
                style={styles.input}
                placeholder={"Enter Amount"}
                placeholderTextColor="gray"
              />
            </View>
            <View style={{ marginTop: moderateScale(20), left: moderateScale(20) }}>
              <Text14 text={'Driver Allowance:'} />

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: moderateScale(10) }}>
                <TouchableOpacity
                  onPress={() => setPrefrence(1)}
                  style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ height: 22, width: 22, }}>
                    <Image style={[CommonStyle.img,]} source={prefrence == 1 ? icon.off : icon.on} />
                  </View>
                  <Text12 color={colors.secondry} text={'   Include'} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setPrefrence(2)}
                  style={{ flexDirection: 'row', alignItems: 'center', marginLeft: moderateScale(20) }}>
                  <View style={{ height: 22, width: 22 }}>
                    <Image style={[CommonStyle.img,]} source={prefrence == 2 ? icon.off : icon.on} />
                  </View>
                  <Text12 color={colors.secondry} text={'   Exclude'} />
                </TouchableOpacity>
              </View>
            </View>


            <View style={styles.container}>
              <TextInput
               keyboardType='number-pad'
                style={styles.input}
                placeholder={"Charges"}
                placeholderTextColor="gray"
              />
              <Text10 color={colors.theme} text={'Per Night'}/>
            </View>
            <View style={{ marginTop: moderateScale(20), left: moderateScale(20) }}>
              <Text14 text={'Parking'} />

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: moderateScale(10) }}>
                <TouchableOpacity
                  onPress={() => setPrefrence(1)}
                  style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ height: 22, width: 22, }}>
                    <Image style={[CommonStyle.img,]} source={prefrence == 1 ? icon.off : icon.on} />
                  </View>
                  <Text12 color={colors.secondry} text={'   Include'} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setPrefrence(2)}
                  style={{ flexDirection: 'row', alignItems: 'center', marginLeft: moderateScale(20) }}>
                  <View style={{ height: 22, width: 22 }}>
                    <Image style={[CommonStyle.img,]} source={prefrence == 2 ? icon.off : icon.on} />
                  </View>
                  <Text12 color={colors.secondry} text={'   Exclude'} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ left: moderateScale(20), top: moderateScale(10) }}>
              <Text14 text={'Extra Km Charges:'} />
            </View>
            <View style={styles.container}>
              <TextInput
               keyboardType='number-pad'
                style={styles.input}
                placeholder={"Charges"}
                placeholderTextColor="gray"
              />
                            <Text10 color={colors.theme} text={'Per Km'}/>

            </View>
            <View>
              <View style={{ marginTop: moderateScale(20), left: moderateScale(20) }}>
                <Text14 text={'Amenities:'} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: moderateScale(20), right: moderateScale(20) }}>
                  <TouchableOpacity
                    // onPress={() => setPrefrence(1)}
                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: 22, width: 22, }}>
                      <Image style={[CommonStyle.img, ]} source={prefrence == 1 ? images.unCheck: images.checkboxcheck} />
                    </View>
                    <Text12 color={colors.secondry} text={'   Water Bottle'} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    // onPress={() => setPrefrence(2)}
                    style={{ flexDirection: 'row', alignItems: 'center', marginLeft: moderateScale(20) }}>
                    <View style={{ height: 22, width: 22 }}>
                      <Image style={[CommonStyle.img, ]} source={prefrence == 2 ? images.unCheck: images.checkboxcheck} />
                    </View>
                    <Text12 color={colors.secondry} text={'   Wifi'} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    // onPress={() => setPrefrence(3)}
                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: 22, width: 22, }}>
                      <Image style={[CommonStyle.img, ]} source={prefrence == 3 ? images.unCheck: images.checkboxcheck} />
                    </View>
                    <Text12 color={colors.secondry} text={'   Tissues'} />
                  </TouchableOpacity>


                </View>
                <View style={{ flexDirection: 'row', marginTop: moderateScale(20), right: moderateScale(22),paddingHorizontal:19 }}>

                  <TouchableOpacity
                    // onPress={() => setPrefrence(4)}
                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: 22, width: 22, }}>
                      <Image style={[CommonStyle.img, ]} source={prefrence == 4 ? images.unCheck: images.checkboxcheck} />
                    </View>
                    <Text12 color={colors.secondry} text={'   Mask'} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    // onPress={() => setPrefrence(5)}
                    style={{ flexDirection: 'row', alignItems: 'center', marginLeft: moderateScale(20),marginLeft:20 }}>
                    <View style={{ height: 22, width: 22 }}>
                      <Image style={[CommonStyle.img, ]} source={prefrence == 5 ? images.unCheck: images.checkboxcheck} />
                    </View>
                    <Text12 color={colors.secondry} text={'   Sanitizer'} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    // onPress={() => setPrefrence(6)}
                    style={{ flexDirection: 'row', alignItems: 'center',marginLeft:20 }}>
                    <View style={{ height: 22, width: 22, }}>
                      <Image style={[CommonStyle.img, ]} source={prefrence == 6 ? images.unCheck: images.checkboxcheck} />
                    </View>
                    <Text12 color={colors.secondry} text={'   Newspaper'} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginTop: moderateScale(20) }}>
                <Text14 color={colors.secondry} textAlign={'center'} text={'Estimated Total Fare'} />
                <Text22 color={colors.theme} text={'7,426'} textAlign={'center'} />

              </View>

            </View>




          </View>

        </KeyboardAwareScrollView>

      </View>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: moderateScale(80),
          bottom: moderateVerticalScale(0),
          backgroundColor: colors.theme
        }}>
        <Button
            // onPress={() => navigation.navigate('Submit Pre Bid')}
          width={'90%'}
          mt={moderateVerticalScale(20)}
          text={'Submit Pre Bid'}
        />
      </View>


      {/* <DeleteModal */}

    </SafeAreaView>
  )
}

export default CreatePrebid

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#E4E9F2",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    top: moderateScale(20),
    backgroundColor: colors.white
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#E4E9F2",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    top: moderateScale(20),
    backgroundColor: colors.white,
    width: "50%"
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#E4E9F2",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    top: moderateScale(20),
    backgroundColor: colors.white,
    width: "40%"
  },
  icon: {
    marginRight: 10,
    height: moderateScale(16),
    width: moderateScale(16),
    tintColor: colors.theme
  },
  input: {
    flex: 1, // Take up remaining space
    fontSize: 16,
    color: 'black',
  },
})