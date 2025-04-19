import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '../../../shared/Icons/vectorIcons';
import { wp } from '../../../shared/Utils/dimensions';
import { COLORS } from '../../../theme/colors';
import typography from '../../../theme/typograpgy';


export const ItemName = ({ name, rating }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={typography.lBold}>{name}</Text>
        <View style={styles.ratingContainer}>
          <AntDesign name="star" color={COLORS.warning} size={15} />
          <Text style={typography.small}>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(50),
  },
  nameContainer: {
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});