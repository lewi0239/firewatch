import { View, Text } from 'react-native';
import React from 'react';
import { tabContentStyles } from "../../../../theme/styles";

export default function Maps() {
    return (
        <View style={tabContentStyles.container}>
            <Text style={tabContentStyles.title}>Maps</Text>
            <Text style={tabContentStyles.subtitle}>Welcome to the maps page</Text>
        </View>
    );
};
