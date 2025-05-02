/* lets make a function which take the string and capilatize the first character fo the whle string 
 */

const capilatize = function(string){
    const wordsArray = string.split(" ");
    const newArray = [];
    for (const word of wordsArray) {
        if(word.length > 0){
            newArray.push(word[0].toUpperCase() + word.slice(1));
        }
       
    }
    console.log(newArray.join(' '))
}
capilatize('i am sufyan khan ')


const variable = 'i am jabbar '.split(" ");
console.log(variable)