/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:

------------------
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
------------------

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three())); */

function zero(callbackOp = times(1)) { return callbackOp(0) }
function one(callbackOp = times(1)) { return callbackOp(1) }
function two(callbackOp = times(1)) { return callbackOp(2) }
function three(callbackOp = times(1)) { return callbackOp(3) }
function four(callbackOp = times(1)) { return callbackOp(4) }
function five(callbackOp = times(1)) { return callbackOp(5) }
function six(callbackOp = times(1)) { return callbackOp(6) }
function seven(callbackOp = times(1)) { return callbackOp(7) }
function eight(callbackOp = times(1)) { return callbackOp(8) }
function nine(callbackOp = times(1)) { return callbackOp(9) }


function plus(callbackNum) { return function (num) { return num + callbackNum }}
function minus(callbackNum) { return function(num) { return num - callbackNum }}
function times(callbackNum) { return function(num) { return num * callbackNum }}
function dividedBy(callbackNum) { return function(num) { return Math.floor(num / callbackNum) }}

