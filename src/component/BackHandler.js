import { View, Text, TouchableOpacity, Image, StatusBar, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import { CommonStyle, colors } from '../utils/Styles'
import { icon } from '../utils/Image'
import Text18 from './customText/Text18'
import { height, iphone8 } from '../utils/Helper'
import { SafeAreaView } from 'react-native-safe-area-context'

const BackHandler = ({ name ,drawer}) => {
    const navigation = useNavigation()

    console.log(height, 'h');
    return (
        <>
            {Platform.OS == 'android' && <SafeAreaView />}
            <View style={{backgroundColor:colors.theme,...Platform.select({
                ios:{
                    paddingTop:iphone8?moderateScale(10):moderateScale(40)
                }
            })}}>
                <StatusBar backgroundColor={colors.theme} barStyle={'light-content'} />
                <View style={styles.header}>
                 {!drawer && <TouchableOpacity
                        style={{ position: 'absolute', left: moderateScale(15), zIndex: 999 }}
                        onPress={() => navigation.goBack()}>
                        <View style={{ height: moderateVerticalScale(30), width: moderateVerticalScale(30) }}>
                            <Image style={[CommonStyle.img, { tintColor: colors.white }]} source={icon.backBtn} />
                        </View>
                    </TouchableOpacity>}

                    <View style={{ width: '100%', alignItems: "center" }}>
                        <Text18 color={colors.white} text={name} />
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    header: {
        width: '100%',
        alignSelf: 'center',
        paddingVertical: moderateVerticalScale(26),
        backgroundColor: colors.theme,
        paddingHorizontal: scale(10),
        justifyContent: "center",
    }
})

export default BackHandler