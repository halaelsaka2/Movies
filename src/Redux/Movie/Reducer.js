import * as types from "../types";
import initialState from "./initialState";

export default function MovieReducer(state = initialState, action) {
  let favoriteMovies = JSON.parse(localStorage.getItem("lovedMovies")) || [];
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        homeMovies: action.data.results,
        countHomeMovies: action.data.total_results,
        searchKeyword: "",
      };
    case types.GET_MOVIES_BY_SEARCH:
      return {
        ...state,
        homeMovies: action.data.results,
        countHomeMovies: action.data.total_results,
      };
    case types.SAVE_SEARCH_KEYWORD:
      return { ...state, searchKeyword: action.data };
    case types.SAVE_FILTER_VALUE:
      return { ...state, filterValue: action.data };
    case types.SAVE_CURRENT_PAGE:
      return { ...state, currentPage: action.data };
    case types.CHANGE_FAVORITE_MOVIES: {
      localStorage.setItem("lovedMovies", JSON.stringify(action.data.data));
      let page = action.data.page;
      let start = (page - 1) * 20;
      let end = Math.floor((page - 1) * 20 + 20, favoriteMovies.length);
      let newMovies = action.data.data.slice(start, end);
      if (newMovies.length === 0) {
        page = page - 1;
        start = (page - 1) * 20;
        end = Math.floor((page - 1) * 20 + 20, favoriteMovies.length);
      }
      return {
        ...state,
        favoriteMoviespaginated: action.data.data.slice(start, end),
        countFavoriteMovies: action.data.data.length,
      };
    }
    case types.GET_FAVORITE_MOVIES: {
      let start = (action.data - 1) * 20;
      let end = Math.floor((action.data - 1) * 20 + 20, favoriteMovies.length);
      return { ...state, favoriteMoviespaginated: favoriteMovies.slice(start, end) };
    }
    default:
      return state;
  }
}
