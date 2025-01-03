const movies = [
    { title: "Movie A", length: 120, rating: "15", language: "English" },
    { title: "Movie B", length: 150, rating: "15", language: "Japanese" },
    { title: "Movie C", length: 90, rating: "15", language: "English" },
    { title: "Movie D", length: 95, rating: "15", language: "Chinese" },
    { title: "Movie E", length: 130, rating: "15", language: "English" },
    { title: "Movie F", length: 180, rating: "15", language: "Japanese" },
];

const directors = [
    { name: "Director A", country: "China" },
    { name: "Director B", country: "Japan" },
    { name: "Director C", country: "USA" },
    { name: "Director D", country: "Japan" },
    { name: "Director E", country: "China" },
];

const directorsByNationality = directors.reduce((acc, director) => {
    acc[director.country] = (acc[director.country] || 0) + 1;
    return acc;
}, {});

console.log("Directors per nationality:", directorsByNationality);

{
    "China": 2,
    "Japan": 2,
    "USA": 1
}

const lengthsByRatingAndLanguage = movies.reduce((acc, movie) => {
    const key = `${movie.rating}-${movie.language}`;
    acc[key] = (acc[key] || 0) + movie.length;
    return acc;
}, {});

console.log("Sum total lengths by rating and language:", lengthsByRatingAndLanguage);

{
    "15-English": 210,
    "PG-Japanese": 150,
    "15-Chinese": 95,
    "PG-English": 130,
    "R-Japanese": 180
}

const totalLengthByLanguage = movies.reduce((acc, movie) => {
    acc[movie.language] = (acc[movie.language] || 0) + movie.length;
    return acc;
}, {});

const languagesOver500 = Object.keys(totalLengthByLanguage).filter(language => totalLengthByLanguage[language] > 500);

console.log("Languages with sum total movie length over 500 minutes:", languagesOver500);
