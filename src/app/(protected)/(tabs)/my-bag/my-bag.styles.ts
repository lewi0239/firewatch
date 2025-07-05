import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const HEADER_MAX_HEIGHT = 150; // needed for scrollViewContent padding

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#B71C1C', // to blend with status bar area
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#B71C1C',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    overflow: 'hidden',
    paddingTop: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  // TabBar styles
  tabBar: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tabIndicator: {
    backgroundColor: '#c62828',
    height: 3,
  },
  tabLabel: {
    color: '#333',
    textTransform: 'none',
    fontSize: 14,
    fontWeight: '600',
    margin: 0,
  },

  scrollViewContent: {
    paddingTop: HEADER_MAX_HEIGHT + 60, // extra space below header
    paddingHorizontal: 24,
    paddingBottom: 100,
  },

  // Checklist styles
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    borderColor: '#c62828',
    backgroundColor: '#c62828',
  },
  checklistItemText: {
    fontSize: 16,
    color: '#333',
  },

  // Evacuation Plan styles
  tipItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#c62828',
    marginRight: 12,
    marginTop: 8,
  },
  tipText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    flex: 1,
  },

  // Shelter Map styles
  map: {
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
  },
  shelterCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  shelterInfo: {},
  shelterName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  shelterStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  shelterStatus: {
    color: '#4CAF50',
    fontWeight: 'bold',
    fontSize: 14,
  },
  shelterDetails: {
    color: '#757575',
    fontSize: 14,
    marginLeft: 8,
  },
});