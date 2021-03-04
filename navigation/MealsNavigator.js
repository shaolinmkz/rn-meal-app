import React from 'react';
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import colors from "../constants/colors";
import FavoritesScreen from '../screens/FavoritesScreen';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? colors.white : colors.primary,
}

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    mode: 'card',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen,
},
{
  mode: 'card',
  defaultNavigationOptions: defaultStackNavOptions,
})

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Dishes',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: colors.primary
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: colors.secondary
    },
  }
}

const MealsFavTabNavigator = Platform.OS === 'android' ?
createMaterialBottomTabNavigator({
  ...tabScreenConfig
}, {
  activeColor: colors.white,
  shifting: true,
  barStyle: {
    backgroundColor: colors.primary
  }
}) :
createBottomTabNavigator({
  ...tabScreenConfig
}, {
  tabBarOptions: {
    activeTintColor: colors.secondary
  }
});

export default createAppContainer(MealsFavTabNavigator);
