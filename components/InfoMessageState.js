import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { appStyles } from '../styles/appStyles';

const InfoMessageState = ({ message, onLogout }) => {
  return (
    <SafeAreaView style={appStyles.loginContainer}>
      <Text style={appStyles.notAvailableText}>{message}</Text>
      <View style={appStyles.centeredLogoutBtn}>
        <Button title="Logout" onPress={onLogout} color="#1f2937" />
      </View>
    </SafeAreaView>
  );
};

export default InfoMessageState;