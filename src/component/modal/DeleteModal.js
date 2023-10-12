import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import LottieView from 'lottie-react-native';
import {colors} from '../../utils/Styles';
import Text14 from '../customText/Text14';
import Text16 from '../customText/Text16';

const DeleteModal = ({type,deleteModal,setDeleteModal,deleteHandler}) => {
  return (
    <Modal animationType='slide' visible={deleteModal} transparent statusBarTranslucent>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            // height: moderateScale(200),
            width: '90%',
            backgroundColor: colors.white,
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <LottieView
            height={moderateScale(150)}
            width={moderateScale(150)}
            source={require('../../assets/delete.json')}
            autoPlay
            loop
            speed={0.5}
          />

          <Text14 mt={1} textAlign={'center'} text={`${'Are you sure want delete'} ${'\n'} this ${type?type:''}`}/>
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical:moderateScale(20)
            }}>
            <TouchableOpacity
            onPress={()=>setDeleteModal(false)}
              style={{
                borderWidth: 1,
                borderColor: colors.red,
                width: '40%',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: moderateScale(6),
                borderRadius: 4,
              }}>
              <Text14 mt={1} text={'Cancel'} color={colors.red} />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>deleteHandler()}
              style={{
                borderWidth: 1,
                borderColor: colors.red,
                width: '40%',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: moderateScale(3),
                borderRadius: 4,
                backgroundColor: colors.red,
              }}>
              <Text14 mt={1} text={'Delete'} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;
