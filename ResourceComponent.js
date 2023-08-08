import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const ResourceComponent = ({ resource }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text style={styles.heading}>Recursos de {resource}</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.resourceItem}>
            <Text style={styles.resourceTitle}>{item.title || item.name}</Text>
            <Text style={styles.resourceBody}>{item.body || item.email}</Text>
            <View style={styles.separator} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resourceItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  resourceBody: {
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
});

export default ResourceComponent;
