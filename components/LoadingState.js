// LoadingState.js
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { appStyles } from '../styles/appStyles';

const LoadingState = ({ message = 'Loading...' }) => { 
  return (
    <View style={appStyles.centered}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>{message}</Text>
    </View>
  );
};

export default LoadingState;