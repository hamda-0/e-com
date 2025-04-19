
import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import Fonts from './fonts';

const typography = StyleSheet.create({
  large: {
    fontFamily:Fonts.workSans.medium,
    fontSize: 20,
    lineHeight: 23.46,
    letterSpacing: -0.5,
    color:COLORS.black_100
  },
  medium: {
    fontFamily:Fonts.workSans.medium,
    fontSize: 15,
    color:COLORS.black_100
  },
  small: {
    fontFamily:Fonts.workSans.medium,
    fontSize: 14,
    color:COLORS.gray_100
  },
  xsmall: {
    fontFamily:Fonts.workSans.medium,
    fontSize: 14,
    textAlign:"center",
    color:COLORS.white
  },
  xlBold:{
    fontFamily:Fonts.workSans.bold,
    fontSize:30,
    lineHeight:38,
    color:COLORS.black_100,
    textAlign:'center'
  },
  lBold:{
    fontFamily:Fonts.workSans.bold,
    fontSize:25,
    color:COLORS.black_100
  },
  mBold:{
    fontFamily:Fonts.workSans.bold,
    fontSize:16,
    color:COLORS.black_100
  },
 
  xl:{
    fontFamily:Fonts.workSans.bold,
    fontSize:96,
    color:COLORS.white
  },

  mSemiBoldB:{
    fontFamily:Fonts.workSans.semiBold,
    fontSize:16,
    color:COLORS.black_100
  },
  mSemiBold:{
    fontFamily:Fonts.workSans.semiBold,
    fontSize:16,
    color:COLORS.white
  },sbold:{
    fontFamily:Fonts.workSans.bold,
    fontSize:14,
  }
});

export default typography;
