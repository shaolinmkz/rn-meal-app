import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StyleSheet } from "react-native";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MealsNavigator from "./navigation/MealsNavigator";
import mealsReducer from "./store/reducers/meals";

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const App = () => {
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
