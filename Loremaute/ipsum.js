// Importing the unique function from another module
const { unique } = require('./utils');

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = unique(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
