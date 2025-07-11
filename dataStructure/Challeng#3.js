///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a
 log of the events that happened during the game.
 The values are the events themselves, and the keys are the minutes in which 
 each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair.
   So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);
  
  for (const [key , value] of gameEvents) {
     const checkHalf = key <= 45 ? 'First' : 'Second';
     console.log(`[${checkHalf} Half] ${key} : ${value}`)
  }

  console.log("_________________________")
  const events = [];
  for (const [ , value] of gameEvents) {
      events.push(value)
  }
  const newSet = new Set(events);
  console.log(newSet)
  /* task 2 */

  for (const [key] of gameEvents) {
     if(key === 64){
        gameEvents.delete(key);
        console.log(`The event occured At ${key} has been deleted from the gameEvent!!! `)
     }
  }

  /* task 4 */

  for (const [key , value] of gameEvents) {
    if(key <= 45){
        console.log("Events occured in first half of the Game!")
        console.log(key , value)
    }else{
        console.log("Events occured in second half of the Game!")
        console.log(key , value)
    }
  }