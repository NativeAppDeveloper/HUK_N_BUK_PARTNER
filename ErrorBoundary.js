import LottieView from "lottie-react-native";
import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import { colors, fonts } from "./src/utils/Styles";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true, error });
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error screen here.
      return (
        <View style={{ flex: 1, backgroundColor: "#FFFF",alignItems:'center',justifyContent:'center' }}>
          <Text style={{fontFamily:fonts.medium,color:colors.theme,fontSize:moderateScale(13)}}>Something went wrong.</Text>
          <LottieView
            source={require("./src/assets/Crash.json")}
            style={{
              width: moderateScale(250),
              height: moderateScale(250),
            }}
            autoPlay={true}
          />
          <View style={{width:'80%',alignSelf:'center'}}>
          <Text style={{fontFamily:fonts.regular,color:colors.theme,fontSize:moderateScale(12),textAlign:'center'}}>{this.state.error.toString()}</Text>
          </View>

          <TouchableOpacity style={{backgroundColor:colors.yellow,paddingVertical:moderateScale(8),paddingHorizontal:scale(40),borderRadius:moderateScale(100),marginVertical:moderateScale(40)}}>
            <Text style={{color:colors.white,fontFamily:fonts.medium,}}>Try Again</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
