import React from 'react';
import { View, Text } from 'react-native';

const ClientDetail = ({ client }) => (
  <View>
    <Text>Name: {client.name}</Text>
    <Text>Email: {client.email}</Text>
    <Text>Phone: {client.phone}</Text>
  </View>
);

export default ClientDetail;
