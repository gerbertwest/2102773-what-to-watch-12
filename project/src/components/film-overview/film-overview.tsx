import { Film } from '../../types/film';

type FilmOverviewProps = {
  film: Film | null;
}

function setFilmRating (rating: number) {
  if (rating > 0 && rating < 3) {
    return 'Bad';
  }
  if (rating >= 3 && rating < 5) {
    return 'Normal';
  }
  if (rating >= 5 && rating < 8) {
    return 'Good';
  }
  if (rating >= 8 && rating < 10) {
    return 'Very good';
  }
  if (rating === 10) {
    return 'Awesome';
  }
}

function FilmOverviewList(props: FilmOverviewProps): JSX.Element {

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{props.film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {!!props.film && setFilmRating(props.film.rating)}
          </span>
          <span className="film-rating__count">{props.film?.scoresCount}</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{props.film?.description}</p>

        <p></p>

        <p className="film-card__director"><strong>Director: {props.film?.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {props.film?.starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default FilmOverviewList;
