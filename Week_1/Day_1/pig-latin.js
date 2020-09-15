let args = process.argv.slice(2);

const pigLatin = function(input) {
  let newString = [];
  for (let i = 0; i < input.length; i++) {
    let word = input[i].split("");
    let letter = word.shift() + "ay";
    newString.push(word.join("").concat(letter));
  }
  return newString.join(" ");
};

console.log(pigLatin(args));