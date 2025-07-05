import { View, Text } from 'react-native';
import React from 'react';
import { pageStyles as styles } from '../../../../theme/styles';

const MyBag = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bag</Text>
      <Text style={styles.subtitle}>This is the My Bag page.</Text>
    </View>
  );
};

export default MyBag;
