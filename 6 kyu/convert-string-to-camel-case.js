/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
------------
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
------------
*/

function toCamelCase(str){
    let arr = str.split(/[-_]/)
    let newArr = arr.map(word => word == arr[0]? arr[0] : word.replace(word[0], word[0].toUpperCase()));
    let newStr = newArr.join('')
    return newStr
  }