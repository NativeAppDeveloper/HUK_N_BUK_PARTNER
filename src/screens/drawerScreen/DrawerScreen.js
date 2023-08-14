
import { View, Text, ImageBackground, useWindowDimensions, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { images } from '../../utils/Image'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { CommonStyle, colors, fonts } from '../../utils/Styles'
import { moderateScale, scale } from 'react-native-size-matters'
import Text14 from '../../component/customText/Text14'
import Text18 from '../../component/customText/Text18'
import { useNavigation } from '@react-navigation/native'


const DrawerScreen = () => {
    const navigation=useNavigation()
    const { width, height } = useWindowDimensions('screen')
    const drawerData = {
        first: [
            {
                name: 'Notifaction',
                title: 'My Profile'
            },
            {
                name: 'Notification',
                title: 'Notification'
            },
            {
                name: 'MyRides',
                title: 'My Rides'
            },
            {
                name: 'Notification',
                title: 'Wallet'
            },
        ],
        first: [
            {
                name: 'MyProfile',
                title: 'My Profile'
            },
            {
                name: 'Notification',
                title: 'Notification'
            },
            {
                name: 'Notification',
                title: 'My Rides'
            },
            {
                name: 'Notification',
                title: 'Wallet'
            },
        ],
        second: [
            {
                name: 'MyProfile',
                title: 'My Profile'
            },
            {
                name: 'Notification',
                title: 'Notification'
            },
            {
                name: 'Notification',
                title: 'My Rides'
            },
            {
                name: 'Notification',
                title: 'Wallet'
            },
        ],
        third: [
            {
                name: 'AboutApp',
                title: 'About'
            },
            {
                name: 'AboutApp',
                title: 'Term & Conditions'
            },
            {
                name: 'AboutApp',
                title: 'Privacy Policy'
            },
            {
                name: 'Faq',
                title: 'FAQ’s'
            },
        ],

    }

    const navigationHandler=(name,title)=>{
        navigation.navigate(name,{screen:title})
    }
    return (
        <ImageBackground resizeMode='stretch' source={images.account} style={[styles.container,{width: width, height: height}]}>
            <DrawerContentScrollView
                showsVerticalScrollIndicator={false}
            >


                <View style={styles.cancelView}>
                    <View style={styles.cancelBtn}>
                        <TouchableOpacity onPress={()=>navigation.closeDrawer()}>
                        <XMarkIcon size={moderateScale(40)} color={colors.theme} />
                        </TouchableOpacity>
                    </View>

                    {
                        //#region  screen List
                        <>
                            {Object.keys(drawerData ?? {}).length > 0 &&
                                Object.keys(drawerData ?? {}).map((item, ind) => {
                                    return (
                                        <View key={ind} style={styles.cardContainer}>
                                            {ind == 0 && <View style={styles.imageName}>
                                                <View style={styles.imageNameInner}>
                                                    <Image style={[CommonStyle.img]} source={images.registrationComplete} />
                                                </View>
                                                <Text18 color={colors.theme} text={'  Sachin'} />
                                            </View>}
                                            {drawerData[item].map((data, index) => {
                                                return (
                                                    <TouchableOpacity
                                                    onPress={()=>navigationHandler(data.name,data.title)}
                                                        style={{
                                                            borderBottomWidth: index === drawerData[item].length - 1 ? 0 : 0.5,
                                                            padding: moderateScale(10),
                                                            borderColor: colors.placeholderColor,
                                                        }}
                                                        key={index}>
                                                        <Text14 color={colors.theme} text={data.title} fontFamily={fonts.regular} />
                                                    </TouchableOpacity>
                                                );
                                            })}
                                        </View>
                                    );
                                })}
                        </>

                        //#endregion
                    }
                </View>





            </DrawerContentScrollView>
        </ImageBackground>

    )
}


const styles = StyleSheet.create({
container:{ backgroundColor: "red", },
cancelView:{ width: '90%', alignSelf: 'center', flex: 1 },
cancelBtn:{ alignItems: 'flex-end', marginTop: moderateScale(30) },
cardContainer:{
    backgroundColor: colors.white, marginVertical: moderateScale(10), borderRadius: moderateScale(8),
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
},
imageName:{ padding: moderateScale(15), flexDirection: "row", alignItems: 'center' },
imageNameInner:{ height: moderateScale(60), width: moderateScale(60), borderRadius: moderateScale(60), overflow: "hidden" }
})

export default DrawerScreen