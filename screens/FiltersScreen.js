import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StyleSheet, Text, View, Switch, Platform } from "react-native";
import CustomHeaderButton from "../components/CustomHeaderButton";
import colors from "../constants/colors";
import { setFilters } from "../store/actions/meals";

const Filters = ({ callback, label }) => {
  const [filterToggle, setFilterToggle] = useState(false);

  const handleFilterToggle = (val) => {
    setFilterToggle(val);
    callback?.(label, val);
  };

  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ true: colors.primary, false: colors.secondary }}
        thumbColor={Platform.OS === "android" ? colors.primary : colors.white}
        value={filterToggle}
        onValueChange={handleFilterToggle}
      />
    </View>
  );
};

const FiltersScreen = ({ navigation }) => {
  const [state, setState] = useState({
    "Gluten-free": false,
    "Lactose-free": false,
    Vegan: false,
    Vegetarian: false,
  });

  const dispatch = useDispatch();

  const handleFilterChange = (label, value) => {
    setState((prevState) => ({ ...prevState, [label]: value }));
  };

  const save = useCallback(() => {
    const updatedState = {
      glutenFree: state["Gluten-free"],
      lactoseFree: state["Lactose-free"],
      vegan: state.Vegan,
      vegetarian: state.Vegetarian,
    };

    const action = setFilters(updatedState);
    dispatch(action);

  }, [
    state["Gluten-free"],
    state["Lactose-free"],
    state.Vegan,
    state.Vegetarian,
  ]);

  useEffect(() => {
    navigation.setParams({ save, dispatch });
  }, [save, dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <Filters label="Gluten-free" callback={handleFilterChange} />
      <Filters label="Lactose-free" callback={handleFilterChange} />
      <Filters label="Vegan" callback={handleFilterChange} />
      <Filters label="Vegetarian" callback={handleFilterChange} />
    </View>
  );
};

FiltersScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Filters",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Save"
        iconName="ios-save"
        onPress={navigation?.getParam?.("save")}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
});

export default FiltersScreen;
