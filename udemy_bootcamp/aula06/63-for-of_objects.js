const movieReviews = {
    Arrival                : 9.5,
    Alien                  : 9,
    Amelie                 : 8,
    'In Bruges'            : 9,
    Amadeus                : 10,
    'Kill Bill'            : 8,
    'Little Miss Sunshine' : 8.5,
    Coraline               : 7.5
};

//there is a method called Object.keys()
console.log(Object.keys(movieReviews))
console.log(Object.values(movieReviews))


for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie])
}

const ratings = Object.values(movieReviews);

total = 0;

for (let r of ratings) {
    total += r;
}
console.log(total / ratings.length) //average