/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */



function reducer(numStr) {
    let sum = 1;
    for (let i = 0; i < numStr.length; i++) {
      sum *= numStr[i];
    }
    return sum
    
  }
  
  function persistence(num) {
    let counter = 0;
    while (num > 9) {
        counter++;
        num = reducer(num.toString())
    }
    return counter
      
  }