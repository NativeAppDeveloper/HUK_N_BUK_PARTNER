import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CommonStyle, colors, fonts } from '../../../utils/Styles'
import BackHandler from '../../../component/BackHandler'
import { icon } from '../../../utils/Image'
import { moderateScale, scale } from 'react-native-size-matters'
import Text16 from '../../../component/customText/Text16'
import Text14 from '../../../component/customText/Text14'

const Notification = () => {

    const [notifactionData,setNotifactionData]=useState(
        [
            {
                img:icon.Shape1,
                color:colors.theme,
                heading:'System',
                desc:'Booking #1234 has been success...'
            },
            {
                img:icon.promo,
                color:colors.yellow,
                heading:'Promotion',
                desc:'Invite friends - Get 3 coupons each!'
            },
            {
                img:icon.Shape2,
                color:colors.green,
                heading:'Promotion',
                desc:'Booking #1234 has been success...'
            },
            {
                img:icon.Shape1,
                color:colors.orange,
                heading:'System',
                desc:'Booking #1234 has been success...'
            },
            {
                img:icon.Shape1,
                color:colors.blue,
                heading:'Promotion',
                desc:'Booking #1234 has been success...'
            },
            {
                img:icon.promo,
                color:colors.yellow,
                heading:'Promotion',
                desc:'Invite friends - Get 3 coupons each!'
            },

        ]
    )
    return (
        <SafeAreaView style={CommonStyle.container}>
            <BackHandler name={'Notifications'} />

            {
                <FlatList 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{}}
                data={notifactionData}
                renderItem={(({item,index})=>{
                    return(
                        <View style={{borderBottomWidth:1,flexDirection:"row",paddingVertical:moderateScale(20),paddingHorizontal:scale(10),borderColor:colors.placeholderColor}}>
                            <View style={{height:moderateScale(45),width:50,backgroundColor:item.color,borderRadius:50,alignItems:"center",justifyContent:"center"}}>
                                <Image resizeMode='contain' style={{height:'50%',width:'50%'}} source={item.img}/>
                            </View>

                            <View style={{paddingLeft:moderateScale(10)}}>
                                <Text16 text={item.heading} fontFamily={fonts.semibold} />
                                <Text14 lineHeight={moderateScale(13)} text={item.desc} fontFamily={fonts.regular} color={colors.gray}/>
                            </View>
                        </View>
                    )
                })}/>
            }
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({})
export default Notification