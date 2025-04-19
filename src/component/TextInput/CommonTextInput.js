// components/CommonTextInput.js
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '../../shared/Icons/vectorIcons';
import { COLORS } from '../../theme/colors';
import typography from '../../theme/typograpgy';


const CommonTextInput = ({ searchText, setSearchText }) => {
  return (
    <View style={styles.container}>
      <Ionicons 
        name="search" 
        size={20} 
        color={COLORS.gray_100} 
        style={styles.icon} 
      />
      <TextInput
        style={styles.input}
        placeholder="Search products..."
        placeholderTextColor={COLORS.gray_50}
        value={searchText}
        onChangeText={setSearchText}
        clearButtonMode="while-editing"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    // marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: COLORS.black_100,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    ...typography.medium,
    color: COLORS.black,
    paddingVertical: 0,
  },
});

export default CommonTextInput;