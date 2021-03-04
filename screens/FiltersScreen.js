import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { StyleSheet, Text, View } from 'react-native';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FiltersScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Filters Screen!</Text>
    </View>
  );
}

FiltersScreen.navigationOptions = (navData) => ({
  headerTitle: "Filters",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="Menu" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FiltersScreen;
