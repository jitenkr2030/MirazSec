import React from 'react';
import { View, Text } from 'react-native';

const GuardDetail = ({ guard }) => (
  <View>
    <Text>Name: {guard.name}</Text>
    <Text>Email: {guard.email}</Text>
    <Text>Phone: {guard.phone}</Text>
  </View>
);

export default GuardDetail;
