//Refactor ES5 into ES2015

// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }


//ES2015 Arrow Function Shorthand
//Write an ES2015 version

const double = (arr) => {
    return arr.map(val => val * 2);
}

//refactor the following to use arrow function:
//replace ALL function with arrow function:

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }


const squareAndFindEvens = (numbers) => {
    return numbers.map(num => num ** 2).filter(square => square % 2 === 0);
}
