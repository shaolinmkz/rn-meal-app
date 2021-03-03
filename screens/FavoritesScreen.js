import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Favorites Screen!</Text>
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

export default FavoritesScreen;
