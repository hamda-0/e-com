import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CommonButton from '../../component/CommonButton/CommonButton';
import { MaterialCommunityIcons } from '../../shared/Icons/vectorIcons';
import { clearCart } from '../../store/cartSlice';
import { COLORS } from '../../theme/colors';
import typography from '../../theme/typograpgy';
import CartContainer from './Comopnent/CartContainer';

const CartScreen = () => {
  
  const { items, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const renderCartItem = ({ item }) => (
    <CartContainer item={item}/>

  );

  return (
    <SafeAreaView  style={styles.container}>
      <TouchableOpacity
              onPress={()=>{
                  dispatch(clearCart());
              }}
              style={[{alignSelf:'flex-end',padding:10 }]}>
              <MaterialCommunityIcons name="delete" size={25} color={COLORS.black_100} />
            </TouchableOpacity>
      <FlatList
        data={items}
        renderItem={renderCartItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          </View>
        }
      />
      
      {items.length > 0 && (
        <View style={styles.footer}>
          <View style={styles.totalContainer}>
            <Text style={typography.lBold}>Total:</Text>
            <Text style={typography.xlBold}>£{totalAmount.toFixed(2)}</Text>
          </View>
          <CommonButton />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  listContent: {
    padding: 16,
    flex:1,
  },
  emptyContainer:{
    justifyContent:'center',
    alignItems:"center",
    flex:1
  },

  
 
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  emptyText: {
    ...typography.large,
    textAlign: 'center',
  },
});

export default CartScreen;