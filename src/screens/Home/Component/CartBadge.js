// components/CartIconWithBadge.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '../../../shared/Icons/vectorIcons';

const CartIconWithBadge = ({ size = 20, color = 'black' }) => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <View style={styles.container}>
      <Ionicons name="cart" size={size} color={color} />
      {cartQuantity > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {cartQuantity > 9 ? '9+' : cartQuantity}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: -8,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default CartIconWithBadge;