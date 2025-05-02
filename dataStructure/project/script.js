
const button = document.querySelector('.click_button');
const outputDiv = document.getElementById('output');


const printstuff = function(array){
    for (const element of array) {
        outputDiv.innerText += `${element}\n`;
    }
}

button.addEventListener('click', function () {
  let userInput = document.getElementById('inputfield').value;
  const inputArr = userInput.split(' ');

  const newArry = [];

  for (const element of inputArr) {
    if (element.length > 0 && element.includes('_')) {
      let findIndex = element.indexOf('_');
      let firsthalf = element.slice(0, findIndex);
      let secondHalf = element.slice(findIndex + 1);
      let fullnamesecond = secondHalf[0].toUpperCase() + secondHalf.slice(1);
      const pooraNum = firsthalf + fullnamesecond;
      newArry.push(pooraNum);
    } else {
      newArry.push(element); // keep unchanged if no underscore
    }
  }

  // Display result
//   outputDiv.innerText = `Converted: ${newArry.join(' ')}`;
    printstuff(newArry)
});

