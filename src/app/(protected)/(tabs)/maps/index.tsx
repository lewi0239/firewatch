import { View, Text } from 'react-native';
import React from 'react';
import { pageStyles as styles } from '../../../../theme/styles';

const Maps = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maps</Text>
      <Text style={styles.subtitle}>This is the maps page.</Text>
    </View>
  );
};

export default Maps;
