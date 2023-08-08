import React from 'react';
import { View, StyleSheet } from 'react-native';
import ResourceComponent from './src/components/ResourceComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <ResourceComponent resource="posts" />
      <ResourceComponent resource="comments" />
      <ResourceComponent resource="albums" />
      <ResourceComponent resource="photos" />
      <ResourceComponent resource="todos" />
      <ResourceComponent resource="users" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default App;
