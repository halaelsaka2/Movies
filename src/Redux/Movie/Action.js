import * as types from "../types";
import { getMoviesByFilter, getMoviesBySearch } from "../../APIs/movieApis";

function getMoviesBySearchSuccess(data) {
  return { type: types.GET_MOVIES_BY_SEARCH, data };
}
function getMoviesSuccess(data) {
  return { type: types.GET_MOVIES, data };
}

export function filterMovies(type, page) {
  return async function (dispatch) {
    const moviesData = await getMoviesByFilter(type, page);
    dispatch(getMoviesSuccess(moviesData.data));
  };
}

export function searchMovie(keyword, page) {
  return async function (dispatch) {
    const moviesData = await getMoviesBySearch(keyword, page);
    dispatch(getMoviesBySearchSuccess(moviesData.data));
  };
}
export function getFavoriteMovies(page) {
  return { type: types.GET_FAVORITE_MOVIES, data: page };
}
export function changeFavoriteMovies(data, page) {
  return { type: types.CHANGE_FAVORITE_MOVIES, data: { data, page } };
}
export function saveSearchKeyword(keyword) {
  return { type: types.SAVE_SEARCH_KEYWORD, data: keyword };
}
export function saveFilterValue(value) {
  return { type: types.SAVE_FILTER_VALUE, data: value };
}
export function saveCurrentPage(page) {
  return { type: types.SAVE_CURRENT_PAGE, data: page };
}
