import { View, Text } from 'react-native';
import React from 'react';
import { pageStyles as styles } from '../../theme/styles';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Welcome to your dashboard!</Text>
    </View>
  );
};

export default Dashboard;
