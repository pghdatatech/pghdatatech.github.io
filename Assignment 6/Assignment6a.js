const movies = [
    { title: "Movie A", releaseDate: "1975-05-15", domesticTakings: 500000, length: 120, rating: "15", country: "China", director: "Director A" },
    { title: "Movie B", releaseDate: "1985-11-20", domesticTakings: 1000000, length: 150, rating: "PG", country: "Japan", director: "Director B" },
    { title: "Movie C", releaseDate: "1990-08-10", domesticTakings: 750000, length: 90, rating: "15", country: "USA", director: "Director C" },
    { title: "Movie D", releaseDate: "1965-03-01", domesticTakings: 200000, length: 95, rating: "15", country: "China", director: "Director D" },
];

const actors = [
    { name: "Actor A", birthDate: "1975-01-01" },
    { name: "Actor B", birthDate: "1969-12-31" },
    { name: "Actor C", birthDate: "1980-05-20" },
];

const directors = [
    { name: "Director A", country: "China" },
    { name: "Director B", country: "Japan" },
    { name: "Director C", country: "USA" },
    { name: "Director D", country: "Japan" },
];

const actorsBornAfter1970 = actors.filter(actor => new Date(actor.birthDate) > new Date("1970-01-01")).length;
console.log("Actors born after 1st Jan 1970:", actorsBornAfter1970);

const takings = movies.map(movie => movie.domesticTakings);
const highestTakings = Math.max(...takings);
const lowestTakings = Math.min(...takings);
console.log("Highest domestic takings:", highestTakings);
console.log("Lowest domestic takings:", lowestTakings);

const totalLengthFor15 = movies
    .filter(movie => movie.rating === "15")
    .reduce((sum, movie) => sum + movie.length, 0);
console.log("Total movie length for movies rated 15:", totalLengthFor15);

const japaneseDirectors = directors.filter(director => director.country === "Japan").length;
console.log("Number of Japanese directors:", japaneseDirectors);

const chineseMovies = movies.filter(movie => movie.country === "China");
const totalLengthForChinese = chineseMovies.reduce((sum, movie) => sum + movie.length, 0);
const averageLengthForChinese = chineseMovies.length > 0 ? totalLengthForChinese / chineseMovies.length : 0;
console.log("Average movie length for Chinese movies:", averageLengthForChinese);
