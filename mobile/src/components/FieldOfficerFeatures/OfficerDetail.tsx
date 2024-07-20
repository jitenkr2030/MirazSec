import React from 'react';
import { View, Text } from 'react-native';

const FieldOfficerDetail = ({ fieldOfficer }) => (
  <View>
    <Text>Name: {fieldOfficer.name}</Text>
    <Text>Email: {fieldOfficer.email}</Text>
    <Text>Phone: {fieldOfficer.phone}</Text>
  </View>
);

export default FieldOfficerDetail;
