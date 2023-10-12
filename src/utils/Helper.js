import {Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';
import toastShow from './Toast';
import {colors} from './Styles';

export const {width, height} = Dimensions.get('window');

console.log(height, width);

export const iphone8 = height < 670 ? true : false;

export const commonPadding = scale(15);

export const showLoader = {
  type: 'LOADER_STATUS',
  payload: true,
};

export const closeLoader = {
  type: 'LOADER_STATUS',
  payload: false,
};

export const paddingTopFun = () => {
  if (Platform.OS == 'ios' && !iphone8) {
    return moderateScale(60);
  }
  if (Platform.OS == 'ios' && iphone8) {
    return moderateScale(25);
  } else {
    return moderateScale(25);
  }
};

export const errorTost = msg => {
  return toastShow(msg, colors.red);
};

export const sucessTost = msg => {
  return toastShow(msg, colors.green);
};

export const checkArray = arr => {
  if (arr == undefined || arr.length == 0) {
    return false;
  } else {
    return true;
  }
};

export const isValidObject = obj => {
  if (obj !== null && obj !== undefined && Object.keys(obj).length > 0) {
    return true;
  } else {
    return false;
  }
};

export function isValidGSTNo(str) {
  let regex = new RegExp(
    /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
  );

  if (str == null) {
    return 'false';
  }

  if (regex.test(str) == true) {
    return 'true';
  } else {
    return 'false';
  }
}

export function validatePANNumber(panNumber) {
    var panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;


    var cleanedPANNumber = panNumber.replace(/\s/g, '').toUpperCase();

    if (panRegex.test(cleanedPANNumber)) {
        return true; 
    } else {
        return false; 
    }
}
