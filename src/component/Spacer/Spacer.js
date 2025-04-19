import React from 'react'
import { View } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

const Spacer = ({height,width}) => {
  return (
    <View
    style={{
      width: scale(width ? width : 0),
      height: verticalScale(height ? height : 1),
    }}
  />
  )
}

export default Spacer;

