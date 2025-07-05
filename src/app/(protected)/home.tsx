import { View, Text } from 'react-native';
import React from 'react';
import { pageStyles as styles } from '../../theme/styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Welcome to your dashboard!</Text>
    </View>
  );
};

export default Home;
