import { DEFAULT_FILTER } from '../../const';
import { process, setGenre } from './process';

describe('Reducer: Process', () => {
  it('should change the genre to the given one', () => {
    const state = {genre: DEFAULT_FILTER};
    expect(process.reducer(state, setGenre({genre: 'crime'})))
      .toEqual({genre: 'crime'});
  });
});
