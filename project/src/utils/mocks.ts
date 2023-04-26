import {system, name, internet, music, image, lorem, datatype, date} from 'faker';
import { Film } from '../types/film';

export const makeFakeFilms = (): Film[] => (
  [...Array(8).keys()].map(() => ({
    genre: music.genre(),
    name: name.title(),
    posterImage: image.animals(),
    previewImage: image.animals(),
    backgroundImage: image.image(),
    backgroundColor: internet.color(),
    description: lorem.text(),
    rating: datatype.number(),
    scoresCount: datatype.number(),
    director: name.findName(),
    starring: [
      name.findName(),
      name.findName(),
      name.findName()
    ],
    runTime: datatype.number(),
    released: date.future().getFullYear(),
    id: datatype.number(),
    isFavorite: datatype.boolean(),
    videoLink: system.filePath(),
    previewVideoLink: system.filePath()
  })));
