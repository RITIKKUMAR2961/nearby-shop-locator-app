import React from 'react';
import { View, Text, Image } from 'react-native';
import haversine from 'haversine-distance';
import { appStyles } from '../styles/appStyles';

const ShopCard = ({ shop, userLocation }) => {
  const shopCoords = {
    latitude: shop.latitude,
    longitude: shop.longitude,
  };
  const distance = haversine(userLocation, shopCoords) / 1000;

  return (
    <View style={appStyles.card}>
      <Image source={{ uri: shop.image }} style={appStyles.image} />
      <Text style={appStyles.title}>{shop.name}</Text>
      <Text style={appStyles.description}>{shop.description}</Text>
      <Text style={appStyles.distance}>
        📍 {Math.round(distance * 1000)} meters from you
      </Text>
    </View>
  );
};

export default ShopCard;