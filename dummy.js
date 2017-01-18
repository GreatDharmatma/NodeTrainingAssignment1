var expressions = require('angular-expressions');

evaluate = expressions.compile("5 * (4+2) /  3");

console.log(evaluate());