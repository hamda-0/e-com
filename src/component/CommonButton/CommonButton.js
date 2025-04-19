import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../../theme/colors'
import typography from '../../theme/typograpgy'

const CommonButton = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>Proceed to Checkout</Text>
    </TouchableOpacity>
  )
}

export default CommonButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black_100,
    padding:10,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    ...typography.mSmall,
    color: COLORS.white,
  },
})