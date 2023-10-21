// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((movie) => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter((movie) => movie.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const movies = array.filter((movie) => movie.director === director);
  const sumaNotes = movies.reduce((total, nota) => total + nota.score, 0);

  let mitja = sumaNotes / movies.length;
  mitja = mitja.toFixed(2);

  return parseFloat(mitja);
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const movies = array.map((movie) => movie.title);
  const moviesOrder = movies.sort();

  const topMovies = moviesOrder.slice(0, 20);
  return topMovies;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const movies = array.slice();

  movies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return movies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const movies = array.filter((movie) => movie.genre.includes(genre));
  const sumaNotes = movies.reduce((total, nota) => total + nota.score, 0);

  let mitja = sumaNotes / movies.length;
  mitja = mitja.toFixed(2);
  return parseFloat(mitja);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const movies = array.map((movie) => {
    const newMovie = { ...movie };
    const movieDuration = newMovie.duration.match(/(\d+)h(?: (\d+)min)?/);

    if (movieDuration) {
      const hours = parseInt(movieDuration[1]);
      const minutes = movieDuration[2] ? parseInt(movieDuration[2]) : 0;
      const totalDuration = hours * 60 + minutes;

      newMovie.duration = totalDuration;
    }

    return newMovie;
  });

  return movies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const movies = array.filter(movie => movie.year === year);

  const bestMovie = movies.reduce((millor, actual) => {
    return actual.score > millor.score ? actual : millor;
  });
  
  return [bestMovie];
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
