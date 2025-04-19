import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import typography from '../../../theme/typograpgy';
import CircularBtn from './CircularBtn';


export const QuantitySelector = (props) => {
  return (
    <View style={styles.container}>
      <CircularBtn testID="increase-btn" iconName="minus" onPress={props.onDecrease}  containerStyle={props.containerStyle}/>
      <Text style={typography.large}>{props.quantity}</Text>
      <CircularBtn testID="decrease-btn"  iconName="plus" onPress={props.onIncrease} containerStyle={props.containerStyle}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    // paddingTop: 10,
  },
});