function outer() {
    let movie = 'Amadeus';

    function inner() {
        let movie = 'The Shining';
        
        function extraInner() {
            console.log(movie.toUpperCase());
        }
        extraInner();
    }
    inner();
};

console.log(outer());