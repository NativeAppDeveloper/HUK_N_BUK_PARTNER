import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import Text24 from '../../../component/customText/Text24'
import Text14 from '../../../component/customText/Text14'
import { CommonStyle, colors, fonts } from '../../../utils/Styles'
import Input from '../../../component/customInput/Input'
import Button from '../../../component/customButton/Button'
import { icon } from '../../../utils/Image'
import SignupSeteps from '../../../component/common/SignupSeteps'
import { CheckIcon } from "react-native-heroicons/solid";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native'

const Step3 = () => {
    const [selected, setSelected] = useState('');
    const navigation=useNavigation()
    const [select, setSelectd] = useState(null)
    return (
        <SafeAreaView>
            <View style={{ width: "90%", alignSelf: 'center' }}>
                {
                    //#region header
                    <SignupSeteps step={'Step 3/5'} />
                    //#endregion
                }

                {
                    //#region  headet text
                    <View style={{ marginTop: moderateVerticalScale(20) }} >
                        <Text24 text={'Date of Birth'} />
                        <Text14
                            fontFamily={fonts.regular}
                            color={colors.gray} text={`Please provide your date of birth`} />
                    </View>
                    //#endregion
                }


                <View style={{ alignSelf: 'center', width: '100%' }}>
                    {
                        //#region Name Components
                        <View style={{ width: '100%', marginTop: moderateScale(20) }}>
                            <Calendar

                                style={{
                                    borderColor: 'gray',
                                    height: moderateScale(330),
                                    borderRadius: moderateScale(10)
                                }}
                                onDayPress={day => {
                                    setSelected(day.dateString);
                                }}
                                markedDates={{
                                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                                }}
                            />
                        </View>
                        //#endregion
                    }

                    {
                        //#region  Next Button
                        <View>
                            <Button
                                onPress={() => navigation.navigate('Step4')}
                                width={'100%'}
                                mt={moderateVerticalScale(20)}
                                text={'Next'}
                            />
                        </View>
                        //#region 
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Step3



