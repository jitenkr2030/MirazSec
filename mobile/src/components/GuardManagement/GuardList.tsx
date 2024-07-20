import React from 'react';
import { View, Text, FlatList } from 'react-native';

const GuardList = ({ guards }) => (
  <FlatList
    data={guards}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View>
        <Text>{item.name}</Text>
      </View>
    )}
  />
);

export default GuardList;
