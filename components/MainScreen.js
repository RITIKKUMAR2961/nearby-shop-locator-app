// MainScreen.js
import React, { useEffect, useState, useCallback } from 'react';
import { PermissionsAndroid, Platform, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import haversine from 'haversine-distance';

import LoadingState from './LoadingState';
import InfoMessageState from './InfoMessageState';
import ShopList from './ShopList';

import { SHOP_DATA } from '../constants/shopData';
import { MAX_DISTANCE_KM } from '../constants/appConstants'; 

const MainScreen = ({ username, onLogout }) => {
  const [locationPermissionStatus, setLocationPermissionStatus] = useState('pending');
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState('Initializing...'); 
  const [nearbyShops, setNearbyShops] = useState([]);

  const filterNearbyShops = useCallback((userCoords) => {
    const nearby = SHOP_DATA.filter(shop => {
      const shopCoords = { latitude: shop.latitude, longitude: shop.longitude };
      const distanceInMeters = haversine(userCoords, shopCoords);
      const distanceInKm = distanceInMeters / 1000;
      return distanceInKm <= MAX_DISTANCE_KM;
    });
    setNearbyShops(nearby);
  }, []);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        setLoadingMessage('Requesting location permission...'); // Update message
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location to show nearby shops.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          setLocationPermissionStatus('granted');
          return true;
        } else {
          console.log('Location permission denied');
          setLocationPermissionStatus('denied');
          Alert.alert(
            'Location Permission Denied',
            'Please grant location access in your device settings to use this feature.',
            [{ text: 'OK' }],
          );
          return false;
        }
      } else {
        setLocationPermissionStatus('granted');
        return true;
      }
    } catch (err) {
      console.warn('Error requesting location permission:', err);
      setLocationPermissionStatus('denied');
      Alert.alert(
        'Permission Error',
        'An error occurred while requesting location permission.',
        [{ text: 'OK' }],
      );
      return false;
    }
  };

  const getUserLocation = useCallback(async () => {
    setLoading(true);
    setLoadingMessage('Checking location permissions...'); // Initial message for location process

    const hasPermission = await requestLocationPermission();

    if (!hasPermission) {
      setLoading(false);
      return;
    }

    setLoadingMessage(`I am searching for shops within ${MAX_DISTANCE_KM} km...`); 
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const userCoords = { latitude, longitude };
        setUserLocation(userCoords);
        // MODIFIED LINE HERE:
        setLoadingMessage(`I am searching for shops within ${MAX_DISTANCE_KM} km...`); 
        filterNearbyShops(userCoords);
        setLoading(false);
      },
      error => {
        console.log('Location error:', error);
        setLoading(false);
        setUserLocation(null);
        setLocationPermissionStatus('denied');
        Alert.alert(
          'Location Error',
          'Could not retrieve your location. Please ensure location services are enabled.',
          [{ text: 'OK' }],
        );
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }, [filterNearbyShops]);

  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

  if (loading) {
    return <LoadingState message={loadingMessage} />; // Pass the dynamic message
  }

  if (locationPermissionStatus === 'denied') {
    return (
      <InfoMessageState
        message="Location access denied. Please enable it in settings to continue."
        onLogout={onLogout}
      />
    );
  }

  if (!userLocation) {
    return (
      <InfoMessageState
        message="Unable to determine your location. Please try again."
        onLogout={onLogout}
      />
    );
  }

  if (nearbyShops.length === 0) {
    return (
      <InfoMessageState
        message={`No shops found within ${MAX_DISTANCE_KM} km of your location.`}
        onLogout={onLogout}
      />
    );
  }

  return (
    <ShopList
      nearbyShops={nearbyShops}
      userLocation={userLocation}
      username={username}
      onLogout={onLogout}
    />
  );
};

export default MainScreen;