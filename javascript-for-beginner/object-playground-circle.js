const circle = {
    radius: 1,
    location: {
        x: 1,
        y:1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
}

circle.draw();

// Factory function to create the object
function createCircle(radius) {
    return {
        radius, // =--> radius: radius,
        // location: {
        //     x: 1,
        //     y:1
        // },
        isVisible: true,
        draw(str) {
            console.log('draw ' + str + ' with radius (meter): ' + radius);
        }
        // draw: function(str) {
        //     console.log('draw ' + str + ' with radius (meter): ' + radius);
        // }
    };
}
circle1 = createCircle(10);
console.log(circle1);
circle1.draw('shape');

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw a circle with radius (meter): ' + radius);
    }
}
const circle2 = new Circle(15);
console.log(circle2);

// class
class Square {
    constructor(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log('draw a circle with radius (meter): ' + radius);
        };
    }
}
const square1 = new Square(23);
console.log(square1);
square1.draw();
// Dynamic Nature of Objects: add more properties outside of the class
square1.location = {
    x: 1,
    y: 2
}
console.log(square1);

console.log('Enumerating properties')
// Enumerating properties of an object
// Object is not iterable
for (let key in square1) {
    console.log(key, square1[key])
}
console.log('------')
for (let key of Object.keys(square1)) {
    console.log(key)
}
console.log('------')
for (let entry of Object.entries(square1)) {
    console.log(entry)
}
console.log('------')
if ('radius' in square1) {
    console.log('Yes')
}

// Clone an object
const square2 = new Square(100);
square2.location = {
    x: 1,
    y: 1
}
function cloneSquare(square) {
    const another = {};
    for (let key in square) {
        another[key] = square[key];
    }
    return another;
}
const anotherSquare2 = cloneSquare(square2);
console.log(anotherSquare2);
anotherSquare2.location.x = 101;
console.log(square2.location);
// Clone an object 2
function cloneSquare2(square) {
    const another = Object.assign({
        color: 'yellow'
    }, square)
    return another;
}
const anotherSquare3 = cloneSquare2(square2);
console.log(anotherSquare3);
anotherSquare3.location.x = 102;
console.log(square2.location);
// Clone an object 3
const anotherSquare4 = { ...square2 };
console.log(anotherSquare4);


//------------------------------
// Object exercise
class Address {
    constructor(street, city, zipCode) {
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
function areEqual(address1, address2) {
    return address1.street === address2.street
            && address1.city === address2.city
            && address1.zipCode === address2.zipCode;
}
function areReferenceSameObject(address1, address2) {
    return address1 === address2;
}

console.log('areEqual: ' + areEqual(address1, address2));
console.log('areReferenceSameObject: ' + areReferenceSameObject(address1, address2));

class Post {
    constructor(title, body, author, views, comments, isLive) {
        this.title = title;
        this.body = body;
        this.author = author;
        this.views = views;
        this.comments = comments;
        this.isLive = isLive;
    }
}
function Post2(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}
const post = new Post('title', 'body', 'author', 10,
    [
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'}
    ],
    true);
console.log(post);

const postFromConstructorFunction = new Post2('a', 'b', 'c');
console.log(postFromConstructorFunction);
