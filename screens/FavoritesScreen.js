import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALS } from "../data/dummy-data";
import MealItem from '../components/MealItem';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FavoritesScreen = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");

  const displayMeals = MEALS.filter(({ id }) => id === 'm1' || id || 'm2');

  return (
    <View style={styles.container}>
        <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem item={item} onSelectMeal={() => {
            navigation.navigate({ routeName: "MealDetail", params: {
              meal: displayMeals.find(({ id }) => id === item.id)
            } })
          }} />
        )}
        style={{ width: '100%' }}
      />
    </View>
  );
}

FavoritesScreen.navigationOptions = (navData) => ({
  headerTitle: 'Your Favorites',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item iconSize={23} title="Menu" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
    </HeaderButtons>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default FavoritesScreen;
