import { View, Text } from 'react-native';
import React from 'react';
import { tabContentStyles } from "../../../../theme/styles";

export default function MyBag() {
    return (
        <View style={tabContentStyles.container}>
            <Text style={tabContentStyles.title}>My Bag</Text>
            <Text style={tabContentStyles.subtitle}>Welcome to your bag</Text>
        </View>
    );
}
