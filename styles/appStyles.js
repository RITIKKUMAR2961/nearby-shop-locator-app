// appStyles.js
import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  container: {
    paddingTop: 45,
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  list: {
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  description: {
    fontSize: 14,
    color: '#4b5563',
    marginVertical: 4,
  },
  distance: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 4,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff', // Added: White background for centered views
  },
  loadingText: { // New style for loading text
    color: '#000000', // Black text color
    marginTop: 10, // Add some spacing from the activity indicator
    fontSize: 16, // Adjust font size as needed
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    padding: 10,
    marginVertical: 12,
    color: '#000',
    backgroundColor: '#f9f9f9',
  },
  centeredLogoutBtn: {
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
  notAvailableText: {
    fontSize: 16,
    color: '#ef4444',
    textAlign: 'center',
    marginBottom: 20,
  },
});