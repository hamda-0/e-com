import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '../../../shared/Icons/vectorIcons'
import { COLORS } from '../../../theme/colors'

const CircularBtn = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.iconContainer,props.containerStyle]}>
      {props.icon??
            <Entypo name={props.iconName} color={COLORS.black_100} size={props.size||20} />
      }
    </TouchableOpacity>
  )
}

export default CircularBtn;

const styles = StyleSheet.create({
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.gray_50,
        borderWidth: 1,
      },
});