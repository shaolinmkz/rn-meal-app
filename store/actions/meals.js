export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavorite = (payload) => {
  return {
    type: TOGGLE_FAVORITE,
    payload
  }
}

export const setFilters = (payload) => {
  return {
    type: SET_FILTERS,
    payload
  }
}
