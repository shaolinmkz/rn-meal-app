import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = ({ navigation }) => {
  const { filteredMeals, favoriteMeals } = useSelector((state) => state.meals);

  const catId = navigation.getParam("categoryId");

  const selectedCat = CATEGORIES.find(({ id }) => id === catId);

  const displayMeals = filteredMeals.filter(({ categoryIds }) =>
    categoryIds.includes(selectedCat.id)
  );

  return displayMeals.length ? (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem
            item={item}
            onSelectMeal={() => {
              navigation.navigate({
                routeName: "MealDetail",
                params: {
                  meal: displayMeals.find(({ id }) => id === item.id),
                  favoriteMeals: favoriteMeals.find(({ id }) => id === item.id),
                },
              });
            }}
          />
        )}
        style={{ width: "100%" }}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={{ fontSize: 22 }}>No meals found</Text>
    </View>
  );
};

CategoryMealScreen.navigationOptions = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCat = CATEGORIES.find(({ id }) => id === catId);
  return {
    headerTitle: selectedCat?.title,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

export default CategoryMealScreen;
