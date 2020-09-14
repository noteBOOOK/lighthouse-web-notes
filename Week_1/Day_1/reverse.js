let args = process.argv.slice(2);
const reverse = function(array) {
  for (let i = 0; i < array.length; i++) {
    let newString = "";
    for (let j = array[i].length - 1; j >= 0; j--) {
      newString += array[i][j];
    }
    console.log(newString);
  }
};

reverse(args);