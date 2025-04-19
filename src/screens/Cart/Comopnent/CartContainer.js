import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '../../../shared/Icons/vectorIcons';
import {
    addItemToCart,
    deleteItemFromCart,
    removeItemFromCart
} from '../../../store/cartSlice';
import { COLORS } from '../../../theme/colors';
import typography from '../../../theme/typograpgy';
import { QuantitySelector } from '../../Detail/Component/QuantitySelector';

const CartContainer = ({item}) => {
  const dispatch = useDispatch();


  const handleQuantityChange = (item, changeType) => {
    if(changeType === 'increase') {
      dispatch(addItemToCart(item));
    } else {
      dispatch(removeItemFromCart(item.id));
    }
  };

  
  return (
    <View style={styles.itemContainer}>
      
      <TouchableOpacity
        onPress={()=>{
            dispatch(deleteItemFromCart(item.id));
        }}
        style={[styles.checkbox,]}>
        <MaterialCommunityIcons name="delete" size={25} color={COLORS.black_100} />
      </TouchableOpacity>
      <Image
        source={{uri: item.image}}
        style={styles.itemImage}
        resizeMode="cover"
      />

      <View style={styles.itemDetails}>
        <View>
          <Text style={typography.mBold} numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </Text>
          <Text style={typography.small} numberOfLines={1} ellipsizeMode="tail">
            {item.category}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={typography.mSemiBoldB}>£{item.price.toFixed(2)}</Text>

          <QuantitySelector
            quantity={item.quantity}
            containerStyle={styles.qty}
            onIncrease={() => handleQuantityChange(item, 'increase')}
            onDecrease={() => handleQuantityChange(item, 'decrease')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray_50,
  },
  checkbox: {
    
    borderColor: COLORS.gray_50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxSelected: {
    backgroundColor: COLORS.black_100,
    borderColor: COLORS.black_100,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 12,
    borderRadius: 8,
    backgroundColor: COLORS.gray_50,
  },
  itemDetails: {
    flex: 1,
    gap: 10,
  },
  categoryText: {
    color: COLORS.gray,
    marginVertical: 4,
  },
  qty: {height: 30, width: 30},
});

export default CartContainer;
