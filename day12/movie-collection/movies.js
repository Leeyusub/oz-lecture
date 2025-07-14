// 기본 장르 설정
const defaultGenre = "Unknown";

// 영화 배열 선언
let movies = [];

// 영화 객체
let movie1 = {
  title: "The Matrix",
  director: "Wachowskis",
  year: 1999,
  genre: "Sci-Fi",
};

let movie2 = {
  title: "Inception",
  director: "Nolan",
  year: 2010,
  genre: "Sci-Fi",
};

let movie3 = {
  title: "Parasite",
  director: "Bong",
  year: 2019,
  genre: "Drama",
};

// 영화 배열 추가
movies.push(movie1, movie2, movie3);

// 영화 목록 출력
function printMovies(movieArray) {
  console.log("Movie Collection:");

  for (var i = 0; i < movieArray.length; i++) {
    let movie = movieArray[i];

    if (!movie.title) movie.title = "Unknown";
    if (!movie.director) movie.director = "Unknown";
    if (!movie.year) movie.year = 0;
    if (!movie.genre) movie.genre = defaultGenre;

    console.log(
      `${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${
        movie.year
      }, Genre: ${movie.genre}`
    );
  }

  console.log(`Total Movies: ${movieArray.length}`);
}

printMovies(movies);
