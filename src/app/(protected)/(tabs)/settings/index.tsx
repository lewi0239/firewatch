import { View, Text } from 'react-native';
import React from 'react';
import { tabContentStyles } from "../../../../theme/styles";

export default function Settings() {
    return (
        <View style={tabContentStyles.container}>
            <Text style={tabContentStyles.title}>Settings</Text>
            <Text style={tabContentStyles.subtitle}>Welcome to your settings</Text>
        </View>
    );
}
