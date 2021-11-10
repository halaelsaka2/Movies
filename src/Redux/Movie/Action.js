import * as types from "../types";
import MovieService from "../../API/Movie";

function getMoviesBySearchSuccess(data) {
  return { type: types.GET_MOVIES_BY_SEARCH, data };
}
function getMoviesSuccess(data) {
  return { type: types.GET_MOVIES, data };
}

export function getUpcomingMovies(page) {
  return async function (dispatch) {
    const moviesData = await MovieService.getMovies("upcoming", page);
    dispatch(getMoviesSuccess(moviesData.data));
  };
}

export function getTopRatedMovies(page) {
  return async function (dispatch) {
    const moviesData = await MovieService.getMovies("top_rated", page);
    dispatch(getMoviesSuccess(moviesData.data));
  };
}

export function getNowPlayingMovies(page) {
  return async function (dispatch) {
    const moviesData = await MovieService.getMovies("now_playing", page);
    dispatch(getMoviesSuccess(moviesData.data));
  };
}

export function getMoviesBySearch(keyword, page) {
  return async function (dispatch) {
    const moviesData = await MovieService.getMoviesBySearch(keyword, page);
    dispatch(getMoviesBySearchSuccess(moviesData.data));
  };
}

export function changeFavoriteMovies(data) {
  return { type: types.CHANGE_FAVORITE_MOVIES, data };
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
