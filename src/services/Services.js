// import axios  from "./xios";

import axios from "axios";
import { BASE_URL } from "../utils/Urls";
// import axios from "./Axios";

export const getStateListServices = async () => {  
    let url = `${BASE_URL}stateList`;
     return await axios.get(url);
  }
  
  export const getCityListServices = async (isoCode) => {  
    let url = `${BASE_URL}cityList?countryCode=IN&stateCode=${isoCode}`;
    return await axios.get(url);
  }
  
  // Auth Services

  export const checkPhoneEmailSercvies=async(body)=>{
    let url = `${BASE_URL}checkUser`;
    return await axios.post(url,body);
  }


  export const getOtpFromEmailServices=async(body)=>{
    let url = `${BASE_URL}sentEmail`;
    return await axios.post(url,body);
  }

  export const getOtpFromMobileServices=async(body)=>{
    let url = `${BASE_URL}phoneOtpSent`;
    return await axios.post(url,body);
  }

  export const verifyEmailOtpServices=async(body)=>{
    let url = `${BASE_URL}otpVerify`;
    return await axios.post(url,body);
  }

  export const signupServices=async(body)=>{
    let url = `${BASE_URL}signup`;
    return await axios.post(url,body);
  }
  

  export const getVehicleCategoryServices=async(body)=>{
    let url = `${BASE_URL}categoryList`;
    console.log('some error')
    return await axios.get(url,body);
  }

  
  