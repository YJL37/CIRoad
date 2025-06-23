import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>📄 Email + Token Viewer</Text>
      <Button title="Add Token via QR" onPress={() => navigation.navigate('AddToken')} />
    </View>
  );
}
