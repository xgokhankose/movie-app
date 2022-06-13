export default class Movie {
  constructor({
    id,
    title,
    poster_path,
    backdrop_path,
    genres,
    genre_ids,
    overview,
    popularity,
    vote_average,
    vote_count,
    release_date,
  }) {
    this.id = id;
    this.title = title;
    this.poster_path = poster_path;
    this.backdrop_path = backdrop_path;
    this.genres = genres;
    this.overview = overview;
    this.popularity = popularity;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
    this.release_date = release_date;
    this.genre_ids;
  }
}
