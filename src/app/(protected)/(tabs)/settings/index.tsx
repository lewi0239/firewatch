import { View, Text } from 'react-native';
import React from 'react';
import { pageStyles as styles } from '../../../../theme/styles';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>This is the settings page.</Text>
    </View>
  );
};

export default Settings;
