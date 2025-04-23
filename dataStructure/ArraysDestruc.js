
/* what is array destructuring and why do we use this in our code  */
/* we store each element of array to separte variables  */

const arr = [1, 2, 3];

const a = arr[0];
const b = arr[1];
const c = arr[2];


/* lets destructure an arary  */

const [ab , bb , cb , dd] = arr;
console.log(ab , bb , cb , dd);

const books = ['40 rules of power' , 'the proverbs' , 'dingdong']
const [firstbook , secondBook] = books;

console.log(firstbook , secondBook);

const [, , thirdBook] = books ; 
console.log(thirdBook);

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

const [ [ , rating] , [ , ratingCount]] = ratings ; 
console.log(rating , ratingCount);

const ratingStars = [63405, 1808];

const [fiveStarRating = 0 ,oneStarRating = 0 , threeStarRating = 0] = ratingStars;
console.log(fiveStarRating , oneStarRating , threeStarRating);




const coordinates = [ [ 'latitude', 34.0132 ],
[ 'longitude', 67.1234 ] ];

const [ [ , latitude], [ , longitude]] = coordinates ;
console.log(latitude , longitude)


const userInfo = [ 
  [ 'Name', 'Khayal' ], 
  [ 'Age', 22 ], 
  [ 'Role', 'Developer' ]
];

const [ [ Name , name] , [ Age , age] , [ Prof , porf] ] = userInfo ; 


console.log(Name , name);


let first = 'React';
let second = 'JavaScript';

[first , second] = [second , first];
console.log(first , second)





