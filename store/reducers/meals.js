import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

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

      case SET_FILTERS:
        const appliedFilters = action.payload;

        return {
          ...state,
          filteredMeals: state.meals.filter(meal => {
            if(appliedFilters.gluten && !meal.isGlutenFree) return false
            if(appliedFilters.lactoseFree && !meal.isLactoseFree) return false
            if(appliedFilters.vegan && !meal.isVegan) return false
            if(appliedFilters.vegetarian && !meal.isVegetarian) return false
            return true
          })
        }

    default:
      return state;
  }
};

export default mealsReducer;
