/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
--------------
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
--------------
*/

function pigIt(str){
    let arr = str.split(' ');
    let newArr = arr.map(word => {
        if (word.match(/^[A-Za-z]+$/)) {
            return word.substr(1, [word.length-1]) + word[0] + 'ay'
        } else {
            return word
        }
    });
    let newStr = newArr.join(' ');
    return newStr
  }