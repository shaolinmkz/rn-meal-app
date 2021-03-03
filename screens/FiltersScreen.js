import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FiltersScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Filters Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FiltersScreen;
