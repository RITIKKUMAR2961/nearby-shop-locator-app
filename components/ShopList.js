import React from 'react';
import { FlatList, SafeAreaView, View, Text, Button } from 'react-native';
import ShopCard from './ShopCard';
import { appStyles } from '../styles/appStyles';

const ShopList = ({ nearbyShops, userLocation, username, onLogout }) => {
  return (
    <SafeAreaView style={appStyles.container}>
      <View style={appStyles.headerRow}>
        <Text style={appStyles.header}>Welcome, {username}</Text>
        <Button title="Logout" onPress={onLogout} color="#ef4444" />
      </View>
      <FlatList
        data={nearbyShops}
        keyExtractor={item => item.id}
        contentContainerStyle={appStyles.list}
        renderItem={({ item }) => (
          <ShopCard shop={item} userLocation={userLocation} />
        )}
      />
    </SafeAreaView>
  );
};

export default ShopList;