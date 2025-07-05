import { Tabs } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Animated, View } from 'react-native';

const AnimatedIndicator = ({ focused }: { focused: boolean }) => {
  const animation = useRef(new Animated.Value(focused ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: focused ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [focused]);

  return (
    <Animated.View
      style={{
        width: 20,
        height: 3,
        marginTop: 4,
        borderRadius: 2,
        backgroundColor: '#B71C1C',
        opacity: animation,
        transform: [
          {
            scaleX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1],
            }),
          },
        ],
      }}
    />
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarIcon: ({ color, size, focused }) => {
          let icon;

          const iconWrapper = (iconNode: React.ReactNode) => (
            <View style={{ alignItems: 'center' }}>
              {iconNode}
              <AnimatedIndicator focused={focused} />
            </View>
          );

          switch (route.name) {
            case 'dashboard/index':
              icon = iconWrapper(
                <MaterialCommunityIcons name="view-dashboard-outline" size={24} color={color} />
              );
              break;
            case 'maps/index':
              icon = iconWrapper(<Feather name="map" size={24} color={color} />);
              break;
            case 'my-bag/index':
              icon = iconWrapper(
                <MaterialCommunityIcons name="bag-personal" size={24} color={color} />
              );
              break;
            case 'settings/index':
              icon = iconWrapper(<Feather name="settings" size={24} color={color} />);
              break;
          }

          return icon;
        },
        tabBarActiveTintColor: '#B71C1C',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen name="dashboard/index" options={{ title: 'Dashboard', headerShown: false }} />
      <Tabs.Screen name="maps/index" options={{ title: 'Maps', headerShown: false }} />
      <Tabs.Screen name="my-bag/index" options={{ title: 'My Bag', headerShown: false }} />
      <Tabs.Screen name="settings/index" options={{ title: 'Settings', headerShown: false }} />
    </Tabs>
  );
}