// import axios  from "./xios";

// import axios from 'axios';
import {BASE_URL} from '../utils/Urls';
import {getData} from './AsyncServices';
import axios from "./Axios";

const getAxiosHeader = token => {
  console.log(token,';l;l;l;');
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };
};

export const getStateListServices = async () => {
  let url = `${BASE_URL}stateList`;
  return await axios.get(url);
};

export const getCityListServices = async isoCode => {
  let url = `${BASE_URL}cityList?countryCode=IN&stateCode=${isoCode}`;
  return await axios.get(url);
};

// Auth Services

export const checkPhoneEmailSercvies = async body => {
  let url = `${BASE_URL}checkUser`;
  return await axios.post(url, body);
};

export const getOtpFromEmailServices = async body => {
  let url = `${BASE_URL}sentEmail`;
  return await axios.post(url, body);
};

export const getOtpFromMobileServices = async body => {
  let url = `${BASE_URL}phoneOtpSent`;
  return await axios.post(url, body);
};

export const verifyEmailOtpServices = async body => {
  let url = `${BASE_URL}otpVerify`;
  return await axios.post(url, body);
};

export const verifyMobileOtpServices = async body => {
  let url = `${BASE_URL}phoneOtpVerify`;
  return await axios.post(url, body);
};

export const signupServices = async body => {
  let url = `${BASE_URL}signup`;
  return await axios.post(url, body);
};

export const getVehicleCategoryServices = async body => {
  let url = `${BASE_URL}categoryList`;
  console.log('some error');
  return await axios.get(url, body);
};

export const getLoginOtpServices = async body => {
  let url = `${BASE_URL}phonOtpLogin`;
  return await axios.post(url, body);
};

export const loginVerifiyServices = async body => {
  let url = `${BASE_URL}phonOtpLoginVerify`;
  return await axios.post(url, body);
};

export const addDriverServices = async body => {
  console.log(body,'body');
  let token = await getData('token');
  let url = `${BASE_URL}addDriver`;
  return await axios.post(url, body, getAxiosHeader(token));
};

export const myProfileDetailsServices = async () => {
  let token = await getData('token');
  let url = `${BASE_URL}viewProfile`;
  return await axios.get(url, getAxiosHeader(token));
};

export const addVehicleServices = async body => {
  let token = await getData('token');
  let url = `${BASE_URL}addVehicle`;

  console.log(token, 'token');
  return await axios.post(url, body, getAxiosHeader(token));
};

export const vechicleListServices = async () => {
  let token = await getData('token');
  let url = `${BASE_URL}vehicleList`;
  return await axios.get(url, getAxiosHeader(token));
};

export const getDriverListServices = async () => {
  let token = await getData('token');
  console.log(token);
  let url = `${BASE_URL}driverList`;
  return await axios.get(url, getAxiosHeader(token));
};

export const assignDriverServices = async body => {
  let token = await getData('token');
  let url = `${BASE_URL}assignDriver`;
  return await axios.patch(url, body, getAxiosHeader(token));
};

export const setDriverStatusServices = async () => {
  let token = await getData('token');
  let url = `${BASE_URL}lastActivity`;
  return await axios.get(url, getAxiosHeader(token));
};

export const changeVehicleStatusService = async body => {
  let token = await getData('token');
  let url = `${BASE_URL}vehicleStatus`;
  return await axios.patch(url, body, getAxiosHeader(token));
};

export const editProfileServices = async body => {
  let token = await getData('token');
  let url = `${BASE_URL}editProfile`;
  return await axios.put(url, body, getAxiosHeader(token));
};

export const deleteVehicleServices = async body => {
  let token = await getData('token');
  console.log(token,'token');
  let url = `${BASE_URL}deleteVehicle`;
  return await axios.delete(url,getAxiosHeader(token), body);
};
