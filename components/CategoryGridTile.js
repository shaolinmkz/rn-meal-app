import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from "react-native";

const CategoryGridTile = ({ navigation, category }) => {
  return (
    <FlatList
      data={category}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ ...styles.gridItem, backgroundColor: item.color }}
          onPress={() =>
            navigation.navigate({
              routeName: "CategoryMeals",
              params: {
                categoryId: item.id,
              },
            })
          }
        >
          <View>
            <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 10,
    shadowOffset: {
      width: 0, height: 5
    },
    elevation: 5,
    padding: 15,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: "right"
  }
});

export default CategoryGridTile;
