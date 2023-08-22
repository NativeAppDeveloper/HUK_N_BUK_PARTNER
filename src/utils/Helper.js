import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get('window');


console.log(height, width);

export const iphone8 = height < 670 ? true : false


