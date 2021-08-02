const numbers = [3, 4];

// End
numbers.push(5, 6);
console.log(numbers);

// Beginning
numbers.unshift(1, 2);
console.log(numbers);

// Middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);

const numbers2 = [1, 2, 3, 4, 1];
console.log(numbers2.indexOf('1')); // -1 because of not found
console.log(numbers2.indexOf(1)); // 0
console.log(numbers2.indexOf(1, 2)); // 4 because we search from position 2
console.log(numbers2.lastIndexOf(1));
console.log(numbers2.includes(4));

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
]
console.log('includes checking for object: ' + courses.includes({id: 1, name: 'a'}))

const findingPredicate = function(element) {
    return element.name === 'a';
};
course = courses.find(findingPredicate);
console.log('finding for object in array: ' + course);

console.log('2nd - finding for object in array: ' + courses.find(
    function(element) {
        return element.name === 'a';
    }));

console.log('3rd - findIndex for object in array: ' + courses.findIndex(
    function(element) {
        return element.name === 'b';
    }));

console.log('4th - find for object using arrow function: ' + courses.findIndex(
    (element) => {
        return element.name === 'b';
    }));

console.log('5th - find for object using arrow function: ' + 
    courses.findIndex(element => element.name === 'b')
);

// Array removing elements
const removedNumbers = [1, 2, 3];
removedNumbers.pop();
console.log(removedNumbers);
removedNumbers.shift();
console.log(removedNumbers);
removedNumbers.splice(0, 1);
if (removedNumbers == false) {
    console.log('The removedNumbers is empty');
}
