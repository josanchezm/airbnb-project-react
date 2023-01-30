// Example of a static function that cant be used in multiple scenarios

const staticSum = () => 1+2;
console.log(staticSum());

// Dynamic function that can be use in multiple scenarios
const sum = (a,b) => a + b;
console.log(sum(2,3));