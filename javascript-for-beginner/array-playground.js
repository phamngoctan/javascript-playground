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


//-------------------
console.log('-------------------');
// Empty an array
let toBeEmptyArray = [1, 2, 3, 4];
let another = toBeEmptyArray;
// Solution 1
// toBeEmptyArray = [];

// Solution 2
// toBeEmptyArray.length = 0;

// Solution 3
// toBeEmptyArray.splice(0, toBeEmptyArray.lentgh);

// Solution 4
while (toBeEmptyArray.length > 0) {
    toBeEmptyArray.pop();
}

console.log(toBeEmptyArray);
console.log(another);


//------------------
console.log('-------------------');
// Combining and slicing arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combined2 = [...first, 'a', ...second, 'b'];
const slice = combined.slice(2, 4);

console.log(combined);
console.log(slice);
console.log(combined2);


// Iterating an array
console.log('-------------------');
const arrIterating = [1, 2, 3];
for (let i of arrIterating) {
    console.log(i);
}
arrIterating.forEach(function(number) {
    console.log(number);
});
arrIterating.forEach(number => console.log(number));
arrIterating.forEach((number, index) => console.log(index + " " + number));


// Joining an array
console.log('-------------------');
const arrJoined = [1, 2, 3];
console.log(arrJoined.join(', '));
const strSplitted = 'This is my first message';
console.log(strSplitted.split(' '));
console.log(strSplitted.split(' ').join('-'));


// Sorting an array
console.log('-------------------');
const arrSorted = [5, 4, 10];
arrSorted.sort((a, b) => a - b);
console.log(arrSorted);
arrSorted.sort();
console.log(arrSorted); // 10, 4, 5 =)) sort alphabetically

const coursesSorted = [
    {id: 2, name: 'Node.js'},
    {id: 1, name: 'JavaScript'}
];
coursesSorted.sort((a, b) => {
    return a.id - b.id;
});
console.log(coursesSorted);


// every built-in function
console.log('-------------------');
const arrEvery = [1, 2, 3];
const allPositive = arrEvery.every((value) => value > 0);
console.log('All positive values: ' + allPositive);

const arrSome = [-1, -2, 3];
const atLeastOnePositive = arrSome.some((value) => value > 0);
console.log('At least one positive: ' + atLeastOnePositive);


// filter built-in function
console.log('-------------------');
const arrFilter = [1, -1, 2, 3];
const filtered = arrFilter.filter(v => v >= 0);
console.log(filtered);


// map built-in function
console.log('-------------------');
const arrMap = [1, -1, 2, 3];
console.log('<ul>' 
            + arrMap.filter(v => v > 0)
                    .map(v => '<li>' + v + '</li>')
                    .join('')
            + '</ul>');


// Reduce built-in function
console.log('-------------------');
const arrReduce = [1, 2, 3];
const arrReduceSum = arrReduce.reduce((accumulator, initialValue) => {
    return accumulator + initialValue;
}, 0);
console.log(arrReduceSum);


// Array exercise - move array
console.log('-------------------');
const movedNumbers = [0, 1, 2, 3];
const movedOutput = move(movedNumbers, 1, -1);
console.log('original:::: ' + movedNumbers)
console.log('movedOutput: ' + movedOutput);
function move(arr, index, offset) {
    if (index < 0 || index >= arr.length) {
        throw 'Invalid index';
    }
    const newPostion = offset + index;
    console.log('newPostion ' + newPostion);
    if (newPostion < 0 || newPostion >= arr.length) {
        throw 'Invalid offset';
    }

    const result = [...arr];
    moveItemUsingSplice(result, index, newPostion, offset);
    return result;
}

function moveItemUsingSplice(result, index, newPostion, offset) {
    const movedValue = result.splice(index, 1)[0];
    result.splice(newPostion, 0, movedValue);
}

function moveItemWithoutUsingSplice(result, index, newPostion, offset) {
    const movedValue = result[index];
    let start = Math.min(newPostion, index);
    let end = Math.max(newPostion, index);
    if (offset > 0) {
        shiftOnePositionToTheRight(start, end, result);
    } else {
        shoftOnePositionToTheLeft(start, end, result);
    }
    result[newPostion] = movedValue;
}

function shoftOnePositionToTheLeft(start, end, result) {
    while (end > start) {
        result[end] = result[end - 1];
        end -= 1;
    }
}

function shiftOnePositionToTheRight(start, end, result) {
    while (start < end) {
        result[start] = result[start + 1];
        start += 1;
    }
    return start;
}


// Array exercise - count number of occurrences using reduce
console.log('-------------------');
const occurrenceArr = [1, 2, 3, 4, 1, 4];
const countOccurrenceArr = countOccurrences(occurrenceArr, 1);
console.log(countOccurrenceArr);

function countOccurrences(arr, num) {
    // First way, filter + reduce
    // return arr.filter(i => i == num)
    //         .reduce((accumulator, initialValue) => initialValue + 1, 0);
    if (!Array.isArray(arr)) {
        throw new Error('Invalid array!');
    }

    // Better way
    return arr.reduce((accumulator, currentValueInArr) => {
        console.log(accumulator, currentValueInArr)
        return currentValueInArr == num ? accumulator + 1 : accumulator;
    }, 0);
}


// Array exercise - get max using reduce
console.log('-------------------');
const maxArr = [1, 5, 3, 4, 2];

const maxValue = maxValueInArr(maxArr);
console.log(maxValue);
function maxValueInArr(arr) {
    if (arr.length == 0) {
        return undefined;
    }

    // Better way
    // return arr.reduce((accumulator, currentValueInArr) => {
    //     console.log(accumulator, currentValueInArr)
    //     // Return current accumulator
    //     return currentValueInArr > accumulator ? currentValueInArr : accumulator;
    // });

    // Shortest way
    return arr.reduce((a, v) => a > v ? a : v);
}


// Array exercise - movies object sorted
console.log('-------------------');
const moviesArr = [
    {title:'a', year: 2018, rating: 4.5},
    {title:'b', year: 2018, rating: 4.7},
    {title:'c', year: 2018, rating: 3},
    {title:'d', year: 2017, rating: 4.5},
];
// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title
const moviesOutput = moviesArr
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => b.rating - a.rating)
    .map(m => m.title);
console.log(moviesOutput);