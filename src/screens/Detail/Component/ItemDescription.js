import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import typography from '../../../theme/typograpgy';

const ItemDescription = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsTruncation = text?.length > maxLength;
  const displayText = isExpanded ? text : needsTruncation ? `${text.substring(0, maxLength)}` : text;

  return (
    <View style={styles.container}>
        <Text style={[typography.small,]}>
          {displayText}
        </Text>
        {needsTruncation && (
          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
            <Text style={typography.sbold}>
              {isExpanded ? ' Less' : ' Read More...'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'baseline',
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows text to wrap properly
  },

  
});

export default ItemDescription;