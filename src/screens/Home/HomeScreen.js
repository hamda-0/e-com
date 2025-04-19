// App.js
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { products } from '../../assets/data/mockData';
import Spacer from '../../component/Spacer/Spacer';
import CommonTextInput from '../../component/TextInput/CommonTextInput';
import { navigate } from '../../navigation/rootNavigation';
import { COLORS } from '../../theme/colors';
import typography from '../../theme/typograpgy';
import CartIconWithBadge from './Component/CartBadge';

const HomeScreen = () => {

  const [searchText, setSearchText] = useState('');
 
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header with Lease Cost Summary */}
        <View style={styles.title}>
        <Text style={typography.lBold}>Discover the best</Text>
        <CartIconWithBadge />
        </View>
        <Spacer height={10}/>

      {/* Search Bar */}
        <CommonTextInput searchText={searchText} setSearchText={setSearchText}/>
        <Spacer height={20}/>

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> navigate('DetailScreen',{item:item})}  style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={typography.mBold}>{item.name}</Text>
              <Text style={typography.small}>{item.category}</Text>
              <View style={styles.priceContainer}>
                <Text style={typography.medium}>{item.price}</Text>
                <Text onPress={()=>{}} style={styles.buyButton}>View Detail</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:COLORS.white
  },
  title:{flexDirection:'row',justifyContent:'space-between'},
  
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderColor:COLORS.gray_50,
    borderWidth:1,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  details: {
    padding: 16,
  },
  
 
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
 
  buyButton: {
    color: 'white',
    backgroundColor:COLORS.black_100,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    fontSize: 14,
    fontWeight: '500',
  },
});


export default HomeScreen;
