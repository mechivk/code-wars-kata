/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s){
    let newArr = s.split(' ');
    let shortWord = newArr[0];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].length < shortWord.length) {
            shortWord = newArr[i]
        }
    };
    let length = shortWord.length;
    return length
  }