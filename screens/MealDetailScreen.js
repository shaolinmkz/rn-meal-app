import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { favoriteMeals } = useSelector(store => store.meals);

  const meal = navigation.getParam("meal");


  useEffect(() => {
    navigation.setParams({ dispatch, favoriteMeals: favoriteMeals.find(({ id }) => meal.id === id) });
  }, [favoriteMeals]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{meal.duration}m</Text>
        <Text>{meal.complexity.toUpperCase()}</Text>
        <Text>{meal.affordability.toUpperCase()}</Text>
      </View>

      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map((ingredient) => (
        <Text key={ingredient} style={styles.list}>
          {ingredient}
        </Text>
      ))}

      <Text style={styles.title}>Steps</Text>
      {meal.steps.map((step) => (
        <Text key={step} style={styles.list}>
          {step}
        </Text>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const meal = navigation.getParam("meal");
  const dispatch = navigation.getParam("dispatch");
  const favMealExist = navigation.getParam("favoriteMeals");
  const action = toggleFavorite(meal);

  return {
    headerTitle: meal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="favorite"
          iconName={favMealExist ? "ios-star" : "ios-star-outline"}
          onPress={() => dispatch(action)}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 1,
    marginBottom: 20,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 20,
  },
  list: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default MealDetailScreen;
