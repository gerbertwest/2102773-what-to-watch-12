import { DEFAULT_FILTER } from './const';
import { Film } from './types/film';

export const makeFilteredFilmsArray = (films: Film[], condition: string) => {
  let filmsByGenre;
  if (condition === DEFAULT_FILTER) {
    return (filmsByGenre = films);
  }
  filmsByGenre = films.filter((film) => film.genre === condition);
  return filmsByGenre;
};
