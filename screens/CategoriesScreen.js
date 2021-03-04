import React from "react";
import { StyleSheet } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import CustomHeaderButton from "../components/CustomHeaderButton";

const CategoriesScreen = ({ navigation }) => {
  return <CategoryGridTile navigation={navigation} category={CATEGORIES} />;
};

CategoriesScreen.navigationOptions = (navData) => ({
  headerTitle: "Meal Categories",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="Menu" iconName="ios-menu" onPress={() => navData.navigation.toggleDrawer()} />
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({});

export default CategoriesScreen;
