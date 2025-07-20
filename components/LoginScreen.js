import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
} from 'react-native';
import { appStyles } from '../styles/appStyles';

const LoginScreen = ({ username, setUsername, onLogin }) => {
  return (
    <SafeAreaView style={appStyles.loginContainer}>
      <Text style={appStyles.loginTitle}>Login to Continue</Text>
      <TextInput
        placeholder="Enter your name"
        placeholderTextColor="#666"
        value={username}
        onChangeText={setUsername}
        style={appStyles.input}
      />
      <View style={appStyles.centeredLogoutBtn}>
        <Button title="Login" onPress={onLogin} color="#1f2937" />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;