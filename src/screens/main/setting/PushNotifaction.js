import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CommonStyle, colors, fonts } from '../../../utils/Styles'
import BackHandler from '../../../component/BackHandler'
import { icon } from '../../../utils/Image'
import { moderateScale, scale } from 'react-native-size-matters'
import Text16 from '../../../component/customText/Text16'
import Text14 from '../../../component/customText/Text14'
import { CheckIcon, ChevronRightIcon, TrashIcon } from 'react-native-heroicons/solid'
import Text12 from '../../../component/customText/Text12'
import { useNavigation } from '@react-navigation/native'

const PushNotifaction = () => {
    const { navigate } = useNavigation()
    const [active, setActiveTab] = useState(0)
    const [notifactionData, setNotifactionData] = useState(
        [
            {
                img: icon.Eng,
                color: colors.theme,
                heading: 'Job Request',
            },
            {
                img: icon.Hindi,
                color: colors.yellow,
                heading: 'Cancellation',
            },
            {
                img: icon.Hindi,
                color: colors.yellow,
                heading: 'Trip Start/End',
            }, {
                img: icon.Hindi,
                color: colors.yellow,
                heading: 'Bid Acceptance',
            }, {
                img: icon.Hindi,
                color: colors.yellow,
                heading: 'New Driver Add/Delete',
            },
            {
                img: icon.Hindi,
                color: colors.yellow,
                heading: 'New Vehicle Add/Delete',
            },
            {
                img: icon.Hindi,
                color: colors.yellow,
                heading: 'Invoice Generation',
            },




        ]
    )
    return (
        <View style={[CommonStyle.container, { backgroundColor: '#f6f6f6' }]}>
            <BackHandler name={'Push Notifications'} />

            {
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: moderateScale(10)
                    }}
                    data={notifactionData}
                    renderItem={(({ item, index }) => {
                        return (
                            <TouchableOpacity

                                onPress={() => setActiveTab(index)}
                                style={[styles.cardContainer,]}>


                                {<View style={{ paddingLeft: moderateScale(10) }}>
                                    <Text14 lineHeight={moderateScale(13)} text={item.heading} fontFamily={fonts.medium} color={colors.theme} />
                                </View>}
                                <View style={{ position: 'absolute', right: 10, flexDirection: 'row', alignItems: 'center', }}>
                                    <Image resizeMode='contain' source={icon.toggleBtn}  style={{
                                        transform: [
                                            { scaleX: true ? -1 : 1 }
                                        ],
                                        height:moderateScale(40),
                                        width:scale(60),
                                        // tintColor:colors.yellow
                                    }} />
                                </View>
                            </TouchableOpacity>
                        )
                    })} />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        paddingVertical: moderateScale(16),
        paddingHorizontal: scale(10),
        borderColor: colors.placeholderColor,
        alignItems: 'center',
        backgroundColor: colors.white,
        width: '90%',
        alignSelf: 'center',
        marginVertical: moderateScale(9),
        borderRadius: moderateScale(7)
    },
    cardContainer2: {
        flexDirection: "row",
        paddingVertical: moderateScale(17),
        paddingHorizontal: scale(10),
        borderColor: colors.placeholderColor,
        alignItems: 'center',
        backgroundColor: colors.white,
        width: '90%',
        alignSelf: 'center',
        marginVertical: moderateScale(9),
        borderRadius: moderateScale(7),
        position: 'absolute',
        bottom: moderateScale(20)
    }
})



export default PushNotifaction