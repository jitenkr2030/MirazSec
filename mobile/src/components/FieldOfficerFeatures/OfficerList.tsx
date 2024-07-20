import React from 'react';
import { View, Text, FlatList } from 'react-native';

const FieldOfficerList = ({ fieldOfficers }) => (
  <FlatList
    data={fieldOfficers}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View>
        <Text>{item.name}</Text>
      </View>
    )}
  />
);

export default FieldOfficerList;
