import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const favMealExist = state.favoriteMeals.find((meal) => meal.id === action.payload.id);

      return {
        ...state,
        favoriteMeals: favMealExist
          ? state.favoriteMeals.filter((meal) => meal.id !== action.payload.id)
          : [ action.payload, ...state.favoriteMeals ],
      };

    default:
      return state;
  }
};

export default mealsReducer;
