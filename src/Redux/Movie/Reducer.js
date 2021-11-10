import * as types from "../types";
import initialState from "../initialState";

export default function MovieReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        homeMovies: action.data.results,
        countMovies: action.data.total_results,
        totalPagesOfMovies: action.data.total_pages,
        searchKeyword: "",
      };
    case types.GET_MOVIES_BY_SEARCH:
      return {
        ...state,
        homeMovies: action.data.results,
        countMovies: action.data.total_results,
        totalPagesOfMovies: action.data.total_pages,
      };
    case types.SAVE_SEARCH_KEYWORD:
      return { ...state, searchKeyword: action.data };
    case types.SAVE_FILTER_VALUE:
      return { ...state, filterValue: action.data };
    case types.SAVE_CURRENT_PAGE:
      return { ...state, currentPage: action.data };
    case types.CHANGE_FAVORITE_MOVIES:
      localStorage.setItem("lovedMovies", JSON.stringify(action.data));
      return { ...state, favoriteMovies: action.data };

    default:
      return state;
  }
}
