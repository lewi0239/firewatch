import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { dashboardStyles as styles } from './dashboard';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Dashboard = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const HEADER_MAX_HEIGHT = 180;
  const HEADER_MIN_HEIGHT = 90;
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const welcomeOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const welcomeTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -20],
    extrapolate: 'clamp',
  });

  const curveOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <View style={styles.headerTop}>
          <View>
            <View style={styles.locationContainer}>
              <MaterialCommunityIcons name="map-marker-outline" size={24} color="white" />
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationLabel}>Your location</Text>
                <Text style={styles.location}>Kelowna, BC</Text>
              </View>
            </View>
            <Text style={styles.lastUpdated}>Last Updated: 15 mins ago</Text>
          </View>
          <TouchableOpacity style={styles.riskButton}>
            <Text style={styles.riskButtonText}>High</Text>
          </TouchableOpacity>
        </View>
        <Animated.View style={{ opacity: welcomeOpacity, transform: [{ translateY: welcomeTranslateY }] }}>
          <Text style={styles.welcomeMessage}>Welcome back, Ayoub 👋</Text>
        </Animated.View>
        <Animated.View style={[styles.headerCurve, { opacity: curveOpacity }]} />
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: false,
        })}
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <View style={styles.content}>
          <View style={styles.fireAlertCard}>
            <View style={styles.fireAlertContent}>
              <View style={styles.fireZoneTag}>
                <Text style={styles.fireZoneText}>Active Fire Zone</Text>
              </View>
              <Text style={styles.wildfireDetected}>Nearby Wildfire Detected</Text>
              <Text style={styles.lastUpdateSmall}>Last Update: 10 minutes ago</Text>
              <Text style={styles.recommendedAction}>Recommended Action</Text>
              <Text style={styles.actionText}>Prepare your go-bag and stay alert</Text>
              <View style={styles.distanceContainer}>
                <MaterialCommunityIcons name="map-marker-outline" size={16} color="white" />
                <Text style={styles.distanceText}>Kelowna, BC</Text>
              </View>
              <Text style={styles.distanceText}>Distance: 6.4 km NW</Text>
            </View>
            <View style={styles.fireIconContainer}>
              <MaterialCommunityIcons name="fire" size={32} color="#C62828" />
            </View>
          </View>

          <Text style={styles.sectionTitle}>Active Alerts</Text>

          <TouchableOpacity style={styles.alertCard}>
            <View style={styles.alertTextContainer}>
              <Text style={styles.alertTitle}>Air Quality Alert : Unhealthy</Text>
              <Text style={styles.alertSubtitle}>AQI: 164</Text>
              <Text style={styles.alertSubtitle}>
                Due to ongoing wildfire smoke in your area, air quality is currently unhealthy.
              </Text>
              <Text style={styles.alertWarning}>!!Avoid prolonged outdoor activities.</Text>
              <Text style={styles.alertLastUpdated}>Last Updated: 15 mins ago</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color="gray" />
          </TouchableOpacity>

          <View style={styles.aqiCard}>
            <View style={styles.aqiHeader}>
              <View style={styles.aqiValueContainer}>
                <View style={styles.aqiCircle}>
                  <Text style={styles.aqiValue}>164</Text>
                </View>
                <View style={styles.aqiStatusTag}>
                  <Text style={styles.aqiStatusTagText}>UnHealthy</Text>
                </View>
              </View>
              <View style={styles.aqiInfo}>
                <Text style={styles.aqiTitle}>Air Quality Index</Text>
                <Text style={styles.aqiCurrent}>Current AQI: 164</Text>
                <Text style={styles.aqiStatus}>Status: Unhealthy 😷</Text>
              </View>
            </View>
            <Text style={styles.aqiDescription}>
              Smoke from nearby wildfires is causing poor air quality in your area. Sensitive groups (children,
              elderly, and those with respiratory issues) should stay indoors.
            </Text>
            <Text style={styles.aqiRecommendations}>
              Limit outdoor activity. Close windows and use air purifiers if available.
            </Text>
            <Text style={styles.alertLastUpdated}>Last Updated: 15 mins ago</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;