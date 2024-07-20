import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ClientList = ({ clients }) => (
  <FlatList
    data={clients}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View>
        <Text>{item.name}</Text>
      </View>
    )}
  />
);

export default ClientList;
