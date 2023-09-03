import {
    Image,
    StyleSheet,
    Modal,
    Pressable,
    Text,
    TouchableOpacity,
    View,
    Platform,
    StatusBar,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import { useNavigation } from '@react-navigation/native';

  import {
    moderateScale,
    moderateVerticalScale,
    scale,
  } from 'react-native-size-matters';
import { icon } from '../../../utils/Image';
import Text14 from '../../../component/customText/Text14';
import Text18 from '../../../component/customText/Text18';
import Button from '../../../component/customButton/Button';
import { colors, fonts } from '../../../utils/Styles';
import Text12 from '../../../component/customText/Text12';

const DeleteModal = ({modalVisible,setModalVisible}) => {
    const navigation = useNavigation();

    return (
      <Modal
      animationType="fade"
      statusBarTranslucent
      transparent
      visible={modalVisible}
     
      >
      <View style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center',
      }}>
        <View style={styles.modalView}>
          <View style={{  paddingVertical: moderateVerticalScale(15),
          }}>
            
            <Text18
              fontFamily={fonts.bold}
              textAlign={'center'}
              color={colors.theme}
              text={`Delete Pre Bid`}
            />
  
            <Text12
              textAlign={'center'}
              fontFamily={fonts.regular}
              color={colors.gray}
              text={`Are you sure want to delete the pre bid `}
            />
          </View>
          <View style={{width:"100%"}}>
          <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={()=>{ setModalVisible(!modalVisible);}}
                  style={{
      borderTopWidth: 0.5, 
      borderColor: colors.placeholderColor, 
      paddingTop: moderateVerticalScale(10), 
    }}
                >
                 <Text18
                      color={colors.red}
                      lineHeight={0}
                      text={'Delete'}
                    textAlign={'center'}
                    />
                </TouchableOpacity>
          </View>
          <Button
            onPress={() => {
              setModalVisible(!modalVisible);
              navigation.navigate('PreBid');
            }}
            width={'100%'}
            mt={moderateVerticalScale(20)}
            text={'Don’t Delete'}
            btnTextClr={colors.white}
            backgroundColor={colors.theme}
          />
        </View>
      </View>
    </Modal>
    )
}

export default DeleteModal

const styles = StyleSheet.create({
    modalView: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 0,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
})