import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = ({ navigation }) => {
  const { filteredMeals } = useSelector((state) => state.meals);

  const catId = navigation.getParam("categoryId");

  const selectedCat = CATEGORIES.find(({ id }) => id === catId);

  const displayMeals = filteredMeals.filter(({ categoryIds }) =>
    categoryIds.includes(selectedCat.id)
  );

  return (
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
                },
              });
            }}
          />
        )}
        style={{ width: "100%" }}
      />
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
