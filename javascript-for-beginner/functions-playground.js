
// Function Declaration
function walk() {
    console.log('walk');
}

// Anonymous Function Expression
let run = function() {
    console.log('run');
};
let move = run;
run();
move();

function sum(a, b) {
    let total = 0;
    for (let value of arguments) {
        total += value;
    }
    console.log(arguments);
    return total;
}

console.log(sum(1, 2, 3, 4, 5))

// rest parameter should be the last parameter in the function :)
function sumWithRestOperator(...args) {
    return args.reduce((a, b) => a + b);
}
console.log(sumWithRestOperator(1, 2, 3, 4, 5, 10));


// Default value for parameter
function interest(principal, rate = 3.5, years) { // if the undefined is inputted, the default value will be used
    return (principal * rate / 100) * years;
}
console.log(interest(10000, undefined, 5))

// Getter and setter in object
const person = {
    firstName: 'John',
    lastName: 'Wick',
    // Not good, usage will be something like this: person.fullName()
    // fullName() {
    //     return `${person.firstName} ${person.lastName}`;
    // }
    // using getter and setter
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        // Defensive programming :)
        if (typeof value !== 'string') {
            throw new Error('Value is not a string');
        }

        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts.slice(1, parts.length).join(' ')
    }
};

// Without using getter
// console.log(`Hello ${person.fullName()}`);

// using getter
console.log(`Hello ${person.fullName}`);

// Using setter
person.fullName = 'Josh Bush Junior';
console.log(`Hello ${person.fullName}`);
console.log(person)

try {
    person.fullName = null;
} catch (error) {
    console.log(error);
}

// Issue with var
// Problem 1: the scope of var keyword makes variable accessiable throughout the function
// Problem 2: var keyword attach the variable to the window object (it is not recommended to do this way)
function testVarKeyword() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // No Exception happens here.
    console.log(i);
}
testVarKeyword();
// var creates function-scoped
// From ES6 (aka ES2015): let, const for defining block-scoped


//------------
// this keyword in object (can be a function) will point to the object its located
//     Remember function is an object
// this keyword in regular function will be the global (window)
console.log('----------------------')
function Video(title) {
    this.title = title;
    console.log(this);
}
const v = new Video('b');

const video = {
    title: 'title',
    tags: ['tag a', 'tag b', 'tag c'],
    showTags() {
        // this.tags.forEach(function(tag) {
        //     // this in the below line will be the global (window)
        //     console.log(this, tag);
        // });

        // Add the video object to the function forEach
        // this.tags.forEach(function(tag) {
        //     console.log(this.title, tag);
        // }, this);

        // Another solution if the function not support adding the object outside
        // This approach is not recommended but could be the case for many Javascript applications
        // const that = this;
        // this.tags.forEach(function(tag) {
        //     console.log(that.title, tag);
        // });

        // better approach
        // this.tags.forEach(function(tag) {
        //     console.log(this.title, tag);
        // }.bind(this));

        // best approach
        // Later version of Javascript, we can use the Arrow function
        // The reason for arrow function works is that
        // Arrow function inherits from the containing function
        // JAVA doesn't have this feature :)
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
}
video.showTags();

// Another solution for passing the object to the internal function so that it can use this keyword
function playVideo() {
    console.log(this);
}
playVideo();
playVideo.call({name: 'Mosh'}, 1, 2);
playVideo.apply({name: 'Mosh'}, [1, 2]);
const fn = playVideo.bind({name: 'Mosh'});
fn();


// Closures playground
// Reference https://stackoverflow.com/questions/111102/how-do-javascript-closures-work
console.log('----------------------')
function curry(fn) {
  const args = [];
  return function inner(arg) {
    console.log("fn.length? " + fn.length);
    if(args.length === fn.length) {
      return fn(...args);
    }
    args.push(arg);
    return inner;
  }
}

function add(a, b) {
  return a + b
}

const curriedAdd = curry(add)
console.log(curriedAdd(2)(3)()) // 5