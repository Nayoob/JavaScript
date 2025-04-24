
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };


  const {scored} = game ; 
  console.log(scored)
//   let i = 1 ;
//   for (const element of scored) {
//      console.log(`Goal ${i} scored by ${element}`)
//      i++;
//   }
  // task 1 : 
  for (const [i , player] of game.scored.entries()) {
       console.log(`Goal ${i + 1} Scored by: ${player}`)
  }
  /* what is this entries fucntion doing here when we call the entries function on array it basically 
  assign each array element an index   */


  /* task 2: */

//   2. Use a loop to calculate the average odd and log it to the console 
//   (We already studied how to calculate averages, you can go check if you don't remember)


const arryOfvalues = Object.values(game.odds)
let  sumOfarray = 0 ;
for (const El of arryOfvalues) {
  sumOfarray = sumOfarray + El ;    
}
console.log(`Average odd is ${sumOfarray / arryOfvalues.length}`)

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). 
// HINT: Note how the odds and the game objects have the same property names 😉

console.log(Object.entries(game.odds))
for (const [team , odd] of Object.entries(game.odds)) {
    const teamstr = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`odd of ${teamstr} : ${odd}`)
}

// const idontknowwhatisit = game.odds.entries();
// console.log(idontknowwhatisit)
/* On object we cant call the entries because the array the object doesnt have any build in fucntion 
called entries but the array has this  */
//   console.log("_________________________")
//   const arr = game.scored.entries();
//   console.log(arr);

//   const flarray  = Object.entries(game)
//   console.log(flarray)

//   const valuesArray = Object.values(game)
//   console.log(valuesArray)