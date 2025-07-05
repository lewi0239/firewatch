import { StyleSheet } from 'react-native';

export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B71C1C',
  },
  header: {
    backgroundColor: '#B71C1C',
    paddingHorizontal: 20,
    paddingBottom: 20,
    overflow: 'hidden', // Important for the curve effect
    position: 'relative', // Needed for zIndex
    zIndex: 1, // Keep header on top
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationTextContainer: {
    marginLeft: 10,
  },
  locationLabel: {
    color: '#fff',
    fontSize: 14,
  },
  location: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastUpdated: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  riskButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  riskButtonText: {
    color: '#B71C1C',
    fontWeight: 'bold',
  },
  welcomeMessage: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
  },
  content: {
    padding: 20,
    paddingTop: 30, // Add space for the curve
    backgroundColor: '#F5F5F5',
  },
  fireAlertCard: {
    backgroundColor: '#C62828',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fireAlertContent: {
    flex: 1,
  },
  fireZoneTag: {
    backgroundColor: '#D32F2F',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  fireZoneText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  wildfireDetected: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastUpdateSmall: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.8,
    marginVertical: 5,
  },
  recommendedAction: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  actionText: {
    color: '#FFEB3B',
    fontSize: 14,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  distanceText: {
    color: '#fff',
    marginLeft: 5,
  },
  fireIconContainer: {
    backgroundColor: '#FFC107',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
  },
  alertCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  alertTextContainer: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  alertSubtitle: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  alertWarning: {
    fontSize: 14,
    color: '#D32F2F',
    fontWeight: 'bold',
  },
  alertLastUpdated: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  aqiCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  aqiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  aqiValueContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  aqiCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: '#D32F2F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aqiValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
  aqiStatusTag: {
    backgroundColor: '#D32F2F',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginTop: 5,
  },
  aqiStatusTagText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  aqiInfo: {
    flex: 1,
  },
  aqiTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  aqiCurrent: {
    fontSize: 14,
    color: '#555',
  },
  aqiStatus: {
    fontSize: 14,
    color: '#555',
  },
  aqiDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
  },
  aqiRecommendations: {
    fontSize: 14,
    color: '#555',
  },
  headerCurve: {
    position: 'absolute',
    bottom: -30, // Position the curve
    left: '-50%',
    right: '-50%',
    height: 50,
    backgroundColor: '#F5F5F5', // Match content background
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
  },
});