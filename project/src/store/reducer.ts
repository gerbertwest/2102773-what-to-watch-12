import {createReducer} from '@reduxjs/toolkit';
import {loadFilms, setFilmsDataLoadingStatus, setGenre} from './action';
import {DEFAULT_FILTER} from '../const';
import { Film } from '../types/film';
import { FilmReview } from '../types/review';

type InitialState = {
  genre: string;
  filmsList: Film[];
  commentsList: FilmReview[];
  isFilmsDataLoading: boolean;
}

const initialState: InitialState = {
  genre: DEFAULT_FILTER,
  filmsList: [],
  commentsList: [],
  isFilmsDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
    .addCase(loadFilms, (state, action) => {
      state.filmsList = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    });
});

export {reducer};
