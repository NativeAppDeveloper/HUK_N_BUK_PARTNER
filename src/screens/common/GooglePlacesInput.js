import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, Image} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, scale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentPosition} from '../../utils/GoogleHelperFunction';
import {GOOGLE_API_KEY} from '../../utils/Urls';
import BackHandler from '../../component/BackHandler';
import {closeLoader, showLoader} from '../../utils/Helper';
import {requestLocationPermission} from '../../utils/Permssion';
import {icon} from '../../utils/Image';
import {colors} from '../../utils/Styles';
import Text14 from '../../component/customText/Text14';

const GooglePlacesInput = props => {
  const navigation = useNavigation();
  // const {loc}=useSelector((state)=>state.getUserLocationReducer)
  const dispatch = useDispatch();
  const [val, setVal] = useState('');
  let {route} = props;

  // return
  const getCoordinatesFromPlaceId = temp => {
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${
      temp.place_id
    }&key=${'AIzaSyBzk1iAqappPnU_19zmEz4_9A7z8DrP8Yo'}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'OK') {
          const result = data.results[0];

          const {lat, lng} = data.results[0].geometry.location;
          let city = '';
          let country = '';
          let pincode = '';
          let state = '';

          for (const component of result.address_components) {
            if (component.types.includes('postal_code')) {
              pincode = component.long_name;
            }

            if (component.types.includes('locality')) {
              city = component.long_name;
            }

            if (component.types.includes('country')) {
              country = component.long_name;
            }

            if (
              component.types.includes('administrative_area_level_1') ||
              component.types.includes('administrative_area_level_2')
            ) {
              state = component.long_name;
            }
          }

          console.log('City:', city);
          console.log('Country:', country);
          console.log('Longitude:', lng);
          console.log('Latitude:', lat);
          console.log('Area Pincode:', pincode);
          console.log(temp.description);

          let objToSend = {
            Location: {
              coordinates: [lng, lat],
            },
            pincode: pincode,
            place: temp.description,
            city: city,
            country: country,
            state: state,
          };
          
        } else {
          alert('Error', 'Failed to retrieve coordinates from Place ID');
        }
      })
      .catch(error => {
        alert('Error', 'An error occurred while fetching coordinates');
        console.error(error);
      });
  };

  const locationCall = async () => {
    requestLocationPermission();
    try {
      const location = await getCurrentPosition();
      getCurrentLocation(location.latitude, location.longitude);
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentLocation = async (latitude, longitude) => {
    dispatch(showLoader);
    try {
      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.status === 'OK') {
        // Extract relevant address components
        const {results} = data;
        const addressComponents = results[0].address_components;
        const formattedAddress = results[0].formatted_address; // Full address
        dispatch(closeLoader);

        console.log(JSON.stringify(formattedAddress), 'here');

        // Find the locality and country
        let city = '';
        let country = '';
        let pincode = '';
        let state = '';

        for (const component of results[0].address_components) {
          if (component.types.includes('postal_code')) {
            pincode = component.long_name;
          }

          if (component.types.includes('locality')) {
            city = component.long_name;
          }

          if (component.types.includes('country')) {
            country = component.long_name;
          }

          if (
            component.types.includes('administrative_area_level_1') ||
            component.types.includes('administrative_area_level_2')
          ) {
            state = component.long_name;
          }
        }

        let objToSend = {
          Location: {
            coordinates: [longitude, latitude],
          },
          pincode: pincode,
          place: formattedAddress,
          city: city,
          country: country,
          state: state,
        };

        console.log(objToSend,'yessssss');
        navigation.navigate('BussinessDetails',{location:objToSend})
        // if (route.params.screenName == 'Acution') {
        //   navigation.navigate('CreateAuction', {item: objToSend, flow: 'map'});
        // } else {
        //   navigation.navigate('AddProduct', {item: objToSend, flow: 'map'});
        // }
      } else {
        throw new Error('Unable to retrieve location');
      }
    } catch (error) {
      dispatch(closeLoader);

      throw new Error('Error retrieving location: ' + error.message);
    }
  };

  const getAddressFromLatLng = async (lat, lng) => {
    const response = await Geocoder.geocode({
      latitude: lat,
      longitude: lng,
    });

    if (response.results.length > 0) {
      const address = response.results[0].formattedAddress;
      return address;
    } else {
      return null;
    }
  };

  return (
    // <SafeAreaView style={{ flex: 1}}>
    <View style={{flex:1}}>
      <BackHandler name={'Location'} />
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // Handle the selected place
          console.log(data);
          getCoordinatesFromPlaceId(data);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en', // language of the results
        }}
        styles={{
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            marginTop: moderateScale(15),
            width: '95%',
            alignSelf: 'center',
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            color: colors.black,
            fontSize: 16,
            fontFamily: 'PlusJakartaSans-Medium',
            // paddingVertical:5,
            backgroundColor: 'white',
            paddingVertical: moderateScale(10),
          },
          predefinedPlacesDescription: {
            color: colors.black,
            fontFamily: 'PlusJakartaSans-SemiBold',
          },
        }}
        // textInputProps={onChangeText={(val)}}

        currentLocation={false} // Enable/disable current location functionality
        fetchDetails={true}
        enablePoweredByContainer={false}
        textInputProps={{
          onChangeText: val => {
            setVal(val);
          },
          // placeholderTextColor:{'red'}
        }}
      />

      {val == '' && (
        <TouchableOpacity
          onPress={() => locationCall()}
          // className="border absolute w-[95%] self-center rounded-lg flex-row py-1 items-center px-3 border-secondry bg-white"
          style={{
            marginTop: moderateScale(175),
            elevation: 1,
            position: 'absolute',
            borderWidth:0.5,
            flexDirection:'row',
            width:'95%',
            alignSelf:'center',
            backgroundColor:colors.white,
            paddingVertical:moderateScale(10),
            alignItems:'center',
            borderColor:colors.yellow,
            paddingHorizontal:scale(10)
          }}>
          <Image
            style={{
              tintColor: colors.yellow,
              height: moderateScale(20),
              width: moderateScale(20),
              marginRight:10
            }}
            source={icon.current}
          />
          <Text14 mt={1} text={'Current Location'} />
        </TouchableOpacity>
      )}
    </View>
    //  </SafeAreaView>
  );
};

export default GooglePlacesInput;
