import { fetchFilmsAction } from '../api-actions';
import { data } from './data';
import { makeFakeFilms } from '../../utils/mocks';
import { Data } from '../../types/state';

const films = makeFakeFilms();
let state: Data;

describe('Reducer: data', () => {
  it('should update films by load films', () => {
    state.filmsList = {data: [], isLoading: false};
    expect(data.reducer(state, {type: fetchFilmsAction.fulfilled.type, payload: films}))
      .toEqual({filmsList: films, isLoading: false});
  });
});
