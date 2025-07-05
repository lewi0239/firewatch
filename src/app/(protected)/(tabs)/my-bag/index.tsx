import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Animated,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { TabView, TabBar, SceneRendererProps, NavigationState } from 'react-native-tab-view';
import MapView, { Marker } from 'react-native-maps';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './my-bag.styles';

const HEADER_MAX_HEIGHT = 150;
const HEADER_MIN_HEIGHT = 90;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

// --- Data ---
const checklistItemsData = ['Water', 'First-Aid Kit', 'IDs'];
const evacuationTips = [
  'Stay calm and assess the situation.',
  'Follow the orders of authorities. They will instruct you when to leave, where to go, and what routes to take.',
  'Wear protective clothing such as a long sleeve shirt, long pants, and boots.',
  'Remain indoors if trapped. Call 911 for help and inform them of your location.',
  'Prepare your emergency bag in advance. Include essentials like water, medications, flashlight, phone charger, and ID.',
  'Keep your vehicle fuelled and ready. Park it facing the road for a quick departure.',
  'Turn off gas, electricity, and water if instructed to do so.',
  'Close all windows and doors, but don’t lock them emergency services may need access.',
  'Stay informed through trusted sources like local news, government alerts, or the FireWatch app.',
  'Leave as early as possible if evacuation orders are issued don’t wait until it’s too late.',
];
const shelters = [
  { name: 'Wilson Public Shelter', status: 'Open', details: '1234 Wilson St, 2 mi, Southeast', coordinate: { latitude: 37.78825, longitude: -122.4324 } },
  { name: 'Community Recreation Center', status: 'Open', details: '5678 Oak Ave, 3 mi, East', coordinate: { latitude: 37.75825, longitude: -122.4624 } },
];

// --- Tab Scenes ---
type SceneComponentProps = {
  onScroll: (...args: any[]) => void;
  contentContainerStyle: StyleProp<ViewStyle>;
};

const EmergencyChecklist = ({ onScroll, contentContainerStyle }: SceneComponentProps) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const toggleItem = (item: string) => setCheckedItems((prev) => prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]);

  return (
    <Animated.ScrollView
      onScroll={onScroll}
      scrollEventThrottle={16}
      contentContainerStyle={contentContainerStyle}
    >
      {checklistItemsData.map((item, index) => (
        <TouchableOpacity key={index} style={styles.checklistItem} onPress={() => toggleItem(item)}>
          <View style={[styles.checkbox, checkedItems.includes(item) && styles.checkboxChecked]}>
            {checkedItems.includes(item) && <Feather name="check" size={18} color="white" />}
          </View>
          <Text style={styles.checklistItemText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </Animated.ScrollView>
  );
};

const EvacuationPlan = ({ onScroll, contentContainerStyle }: SceneComponentProps) => (
  <Animated.ScrollView onScroll={onScroll} scrollEventThrottle={16} contentContainerStyle={contentContainerStyle}>
    {evacuationTips.map((tip, index) => (
      <View key={index} style={styles.tipItem}>
        <View style={styles.bullet} />
        <Text style={styles.tipText}>{tip}</Text>
      </View>
    ))}
  </Animated.ScrollView>
);

const ShelterMap = ({ onScroll, contentContainerStyle }: SceneComponentProps) => (
  <Animated.ScrollView onScroll={onScroll} scrollEventThrottle={16} contentContainerStyle={contentContainerStyle}>
    <MapView style={styles.map} initialRegion={{ latitude: 37.7749, longitude: -122.4194, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
      {shelters.map((shelter, index) => <Marker key={index} coordinate={shelter.coordinate} title={shelter.name} />)}
    </MapView>
    {shelters.map((shelter, index) => (
      <TouchableOpacity key={index} style={styles.shelterCard}>
        <View style={styles.shelterInfo}>
          <Text style={styles.shelterName}>{shelter.name}</Text>
          <View style={styles.shelterStatusContainer}>
            <Text style={styles.shelterStatus}>{shelter.status}</Text>
            <Text style={styles.shelterDetails}>{shelter.details}</Text>
          </View>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={24} color="gray" />
      </TouchableOpacity>
    ))}
  </Animated.ScrollView>
);

const initialLayout = { width: Dimensions.get('window').width };

type Route = {
  key: string;
  title: string;
};

// --- Main Component ---
export default function MyBag() {
  const [index, setIndex] = useState(0);
  const [routes] = useState<Route[]>([
    { key: 'checklist', title: 'Emergency checklist' },
    { key: 'plan', title: 'Evacuation Plan' },
    { key: 'map', title: 'Shelter Map' },
  ]);
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.8, 0.7],
    extrapolate: 'clamp',
  });

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const renderScene = ({ route }: { route: Route }) => {
    const sceneProps = {
      onScroll,
      contentContainerStyle: { ...styles.scrollViewContent, paddingTop: HEADER_MAX_HEIGHT + 50 },
    };
    switch (route.key) {
      case 'checklist': return <EmergencyChecklist {...sceneProps} />;
      case 'plan': return <EvacuationPlan {...sceneProps} />;
      case 'map': return <ShelterMap {...sceneProps} />;
      default: return null;
    }
  };

  const renderTabBar = (
    props: SceneRendererProps & { navigationState: NavigationState<Route> }
  ) => (
    <Animated.View style={{ zIndex: 1, position: 'absolute', top: headerHeight, left: 0, right: 0 }}>
      <TabBar
        {...props}
        indicatorStyle={styles.tabIndicator}
        style={styles.tabBar}
        labelStyle={styles.tabLabel}
        activeColor="#c62828"
        inactiveColor="#888"
      />
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Animated.Text style={[styles.headerText, { transform: [{ scale: titleScale }, { translateY: titleTranslateY }] }]}>
            Prep Center
          </Animated.Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
