import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const MealDetailScreen = ({ navigation }) => {
  const meal = navigation.getParam("meal");

  return (
    <View style={styles.container}>
      <Text>Meal Detail Screen!</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const meal = navigation.getParam("meal");
  return {
    headerTitle: meal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="favorite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealDetailScreen;
