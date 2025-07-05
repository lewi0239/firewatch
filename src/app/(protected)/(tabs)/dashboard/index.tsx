import { View, Text } from 'react-native';
import React from 'react';
import { tabContentStyles } from "../../../../theme/styles";

export default function Dashboard() {
    return (
        <View style={tabContentStyles.container}>
            <Text style={tabContentStyles.title}>Dashboard</Text>
            <Text style={tabContentStyles.subtitle}>Welcome to your dashboard</Text>
        </View>
    );
};
