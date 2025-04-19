import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Spacer from '../../component/Spacer/Spacer';
import { GoBack } from '../../navigation/rootNavigation';
import { Ionicons } from '../../shared/Icons/vectorIcons';
import { hp } from '../../shared/Utils/dimensions';
import { addItemToCart } from '../../store/cartSlice';
import { COLORS } from '../../theme/colors';
import { AddToCartButton } from './Component/AddtoCart';
import CircularBtn from './Component/CircularBtn';
import ItemDescription from './Component/ItemDescription';
import { ItemName } from './Component/ItemName';
import { QuantitySelector } from './Component/QuantitySelector';


const DetailScreen = ({ route }) => {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1)); 
  const handleAddToCart = () => {
    // Add item to cart with current quantity
    console.log("Add to cart created")
    for (let i = 0; i < quantity; i++) {
      dispatch(addItemToCart({
       ...item,
        price: parseFloat(item.price.replace('£', '')),
      }));
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <ImageBackground
        testID="product-image" 
          source={{ uri: item.image }}
          style={styles.imageBackground}
          resizeMode="cover">
          <View style={styles.header}>
            <CircularBtn
             testID="back-button"
              onPress={() => GoBack()}
              siz={24}
              icon={<Ionicons name="arrow-back" size={24} color={COLORS.black_100} />}
            />
          </View>
        </ImageBackground>

        <Spacer height={15} />
        {/* Item name and Qnty */}
        <View style={styles.labelContainer}>
          <ItemName name={item.name} rating={item.rating} />
          <QuantitySelector 
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        </View>

        <Spacer height={15} />
        <ItemDescription text={item.description} />
        <Spacer height={70} /> 
      </ScrollView>
      {/* add to cart */}
      <AddToCartButton 
      testID="add-to-cart-btn"
      price={item.price} onPress={handleAddToCart} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  imageBackground: {
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    height: hp(45),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  labelContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

export default DetailScreen;