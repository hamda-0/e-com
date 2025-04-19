import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '../../../shared/Icons/vectorIcons';
import { COLORS } from '../../../theme/colors';
import typography from '../../../theme/typograpgy';


export const AddToCartButton = ({ price, onPress }) => {
  return (
              <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>onPress()}>
        <View style={styles.buttonContent}>
          <AntDesign name="shoppingcart" color={COLORS.white} size={20} />
          <Text style={typography.mSemiBold}>Add to Cart | {price}</Text>
        </View>
      </TouchableOpacity>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    padding: 15,
  },
  button: {
    borderRadius: 10,
    backgroundColor: COLORS.black_100,
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});