const numberOfFilm = +prompt('сколько фильмов вы уже смотрели ?');



const howMovieyouSee1 = prompt('какой фильм вы смотрели ?'),
      howRatingYouGiveHim1  = prompt('на сколько вы его оцените ?'),
      howMovieyouSee2 = prompt('какой фильм вы смотрели ?'),
      howRatingYouGiveHim2  = prompt('на сколько вы его оцените ?');





const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    geners: [],
    privat: false
}

personalMovieDB.movies[howMovieyouSee1] = +howRatingYouGiveHim1;
personalMovieDB.movies[howMovieyouSee2] = +howRatingYouGiveHim2;

console.log(personalMovieDB)