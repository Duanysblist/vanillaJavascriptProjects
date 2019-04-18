// var, let, const

// var name = 'John Doe'; // can be double or single quotes
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// //Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Can't start with a number
// var _name = 'John';

// //multi word variables
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; //Pascal case
// var firstname;

// // LET
// let name;
// name = 'John Doe'; // can be double or single quotes
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

//CONST
// const name = 'John';
// console.log(name);
// Can not reassign
// Have to assign a value
// name = 'Sara';

// const person = {
//     name :'John',
//     age : 30
// }

// person.name = 'Sara';
// person.age = 32;

// const numbers = [1,2,3,4,5];
// numbers.push(6);
// console.log(numbers);

//DATA TYPES IN JAVASCRIPT

//PRIMITVE

//String
// const name = 'John Doe';
// //Number
// const age = 45;
// //Boolean
// const hasKids = true;
// //Null
// const car = null;
// //Undefined
// let test;
// //Symbol (ES6)
// const sym = Symbol();

// //REFERENCE TYPES - Objects
// //Array
// const hobbies = ['movies', 'music'];
// //Object literal
// const address = {
//     city: 'Boston',
//     state: 'MA'
// }
// const today = new Date();

// console.log(typeof age);

//TYPE CONVERSION

// let val;

// // Number to String
// val = String(5);
// val = String(4 + 4);
// // Boolean to String
// val = String(true);
// // Date to String
// val = String(new Date());
// // Array to String
// val = String([1,2,3,4]);

// // toString()
// val = (5).toString();
// val = (true).toString();

// // String to Number
// val = Number('5');

// // Boolean to Number
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1,2,3]);

// // Parsing Numbers
// val = parseInt('100');
// val = parseFloat('100.30');


// //Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed());

// const val1 = String(5);
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8); // rounds to 3
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2); // 64
// val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
// val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
// val = Math.random();

// val = Math.floor(Math.random() * 20); // random number between 1 and 20

// console.log(val);

//String Methods and Concatenation

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello, my name is Brad';
// const tags = 'web design, web development, programming';

// let val;

// val = firstName + lastName;

// //Concatenation
// val = firstName + ' ' + lastName;

// // Append
// val = 'Brad ';
// val += 'Traversy';

// val = 'Hello my name is ' + firstName + ' and I am ' + age;

// // Escaping (ES6)
// val = 'That\'s awesome, I can\'t wait';

// // Length
// val = firstName.length;

// // concat
// val = firstName.concat(' ', lastName);

// // Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[0];

// // indexOf()
// val = firstName.indexOf('l');
// vla = firstName.lastIndexOf('l');

// // charAt()
// val = firstName.charAt('2');
// // Get last char
// val = firstName.charAt(firstName.length - 1);

// // substring
// val = firstName.substring(0, 4);

// //slice
// val = firstName.slice(0, 4);
// val = firstName.slice(-3); //will take last three

// // split
// val = str.split(' ');
// val = tags.split(',')

// //replace
// val = str.replace('Brad', 'Jack');

// // includes
// val = str.includes('foo');


// console.log(val);

// Template Literals (ES6)
// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// // Without template strings (ES5)
// html = '<ul><li>Name : ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// function hello(){
//     return 'Hello';
// }

// // With template Strings (ES6)
// html = `
//     <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//     </ul>
//     `;

// document.body.innerHTML = html;

// Arrays and Array Methods

// Create some arrays
// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45, 33, 76, 54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// //Check if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// val = numbers[0];
// //Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);

// // MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1, 1); //(Where to start, where to end)
// // Reverse
// numbers.reverse();

// // Concatenate array
// val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort();
// val = numbers.sort();

// // Use the compare function
// val = numbers.sort(function(x, y){
//     return x - y;
// });

// //Find
// function under50(num){
// return num < 50;
// }
// val = numbers.find(under50);


// console.log(val);
// console.log(numbers);

// OBJECT LITERALS
// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 30,
//     email: 'steve@aol.com',
//     hobbies: ['music', 'sports'],
//     address: {
//         city: 'Miami',
//         state: 'FL'
//     },
//     getBirthYear: function(){
//         return 2017 - this.age;
//     }
// }

// let val;

// val = person;
// // Get specific value
// val = person.firstName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//     {name: 'John', age: 30},
//     {name: 'Mike', age: 23}
// ];

// for(let i = 0; i < people.length; i++){
//     console.log(people.name);
// }

//DATES AND TIMES
// let val; 

// const today = new Date();
// let birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/1981');


// val = today.getMonth(); // starts at zero index
// val = today.getDate();
// val = today.getDay(); // in number starting from Sunday
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(val);

//IF STATEMENTS & COMPARISON OPERATORS
// const id = '100';

// // EQUAL TO
// if(id == 100){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 101){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE
// if(id === 100){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO VALUE AND TYPE
// if(id !== 100){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// //Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The id is ${id}`);
// }else{
//     console.log('No ID');
// }

// // GREATER OR LESS THAN
// if(id <= 100){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// IF ELSE
// const color = 'red';

// if(color === 'red'){
//     console.log('Color is red');
// } else if(color === 'blue'){
//     console.log('Color is blue');
// } else {
//     console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS

// const name = 'Steve';
// const age = 20;

// //AND &&
// if(age > 0 && age < 12){
//     console.log(`${name} is a child`);;
// }else if(age >= 13 && age <=19){
//     console.log(`${name} is a teenager`);
// }else {
//     console.log(`${name} is an adult`);
// }

// // OR ||
// if(age < 16 || age > 65){
//     console.log(`${name} can not run in race`);
// }else{
//     console.log(`${name} is registered for the race`);
// }

// // TERNARY OPERATOR
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// // WITHOUT BRACES
// if(id === 100)
//     console.log('CORRECT');
// else
//     console.log('INCORRECT');


// SWITCH STATEMENTS
// const color = 'red';

// switch(color){
//     case 'red':
//         console.log('Color is red');
//         break;
//     case'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('Color is not red or blue');
//         break;
// }

// let day;

// switch(new Date().getDay()){
//     case 0:
//         day = 'Sunday'
//         break;
//     case 1:
//         day = 'Monday'
//         break;
//     case 2:
//         day = 'Tuesday'
//         break;
//     case 3:
//         day = 'Wednesday'
//         break;
//     case 4:
//         day = 'Thursday'
//         break;
//     case 5:
//         day = 'Friday'
//         break;
//     case 6:
//         day = 'Saturday'
//         break;
// }

// console.log(`Today is ${day}`);


// FUNCTION DECLARATIONS AND EXPRESSIONS

// function greet(firstName = 'John', lastName = 'Doe'){ //declare the defaults in the constraints (ES6)
//     //console.log('Hello');

//     return 'Hello' + firstName + ' ' + lastName;
// }

// console.log(greet('John', 'Doe'));

// const square = function(x = 3){
//     return x*x;
// };

// console.log(square());

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//     console.log('IIFE Ran..');
// })();

// (function(name){
//     console.log('Hello ' + name);
// })('Brad');

// PROPERTY METHODS

// const todo = {
//     add: function(){
//         console.log('Add todo..');
//     },
//     edit: function(id){
//         console.log(`Edit todo ${id}`);
//     }
// }

// todo.delete = function(){
//     console.log('Delete todo...')
// }

// todo.add();
// todo.edit();
// todo.delete();

// FOR LOOP

// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log('2 is my favorite number');
//         continue; //go to the next iteration
//     }
//     if(i === 5){
//         console.log('Stop the loop');
//         break;
//     }
//     console.log('Number '+ i);

// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//     console.log('Number ' + i);
//     i++;
// }

// DO WHILE

// let i = 0;

// do{
//     console.log('Number ' + i);
// }while(i < 10);


// LOOP THROUGH ARRAY
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];


// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car, index){
// console.log(`${index} : ${car}`);
// });

// MAP

// const users = [
//     {id:1, name: 'John'},
//     {id:2, name: 'Sara'},
//     {id:3, name: 'Karen'},
//     {id:4, name: 'Steve'}

// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);

// FOR IN LOOP
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// }

// for(let x in user){
//     console.log(`${x} : ${user[x]}`);
// }


// WINDOW METHODS / OBJECTS/ PROPERTIES


// Alert
// alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

//Confirm
// if(confirm('Are you sure')){
//     console.log('YES');
// }else{
//     console.log('NO');
// }

// let val;

// Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// Scroll points
// val = window.scrollY;
// val = window.scrollX;

// Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// Redirect
// window.location.href = 'http://google.com';

// Reload
// window.location.reload();

// History Object
// window.history.go(-2);
// val = window.history.length;

// Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

// console.log(val);

// Global Scope
// var a = 1;
// let b = 2;
// const c = 3;

// function test(){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ', a, b, c);
// }

// test();

// if(true){
//     // Block Scope
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('If Scope:', a, b, c);
// }

// for(let a = 0; a < 10; a++){
//     console.log(`Loop: ${a}`);
// }

// console.log('Global Scope: ', a, b, c);

//let and const have a block level scope and var has a function level scope
//If a variable with the same name is created later on 
//in the program, the value of the global variable whill change,
//which is dangerous. Instead, let and const keet the global value


// Examining The Document Object

// let val;

// val = document;
// val = document.all;
// val = document.all[0]; //goes through the different pieces of the html document
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.fomrs[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script){
//     console.log(script.getAttribute('src'));
// });

// console.log(val);

// DOM Selectors For Single Elements

// document.getElementById()

// console.log(document.getElementById('task-title'));

// //Get things from the element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title'); // use this to cut down on boilerplate code

// // Change styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';

// // Change content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

// // document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#ccc';


// DOM Selectors For Multiple Elements

// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// // document.getElementsByTagName

// let lis = document.getElementsByClassName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Convert HTML Collection into array

// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// });
// console.log(lis);

// document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = '#ccc';
// })

// for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4'
// }

// console.log(items);

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;
// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype

// // Get children element nodes
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello';

// // Children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children;

// // First Child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last Child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement; 

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// // Get previous sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// console.log(val);

// Create the element

// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title', 'New Item');

// //Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// // Create new link element
// const link = document.createElement('a');

// // Add classes
// link.className = 'delete-item secondary-content';

// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link to li
// li.appendChild(link);

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// REPLACE ELEMENT

// // Create Element
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');

// // Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// //Remove list item
// lis[0].remove();

// // Remove child element
// list.removeChild(lis[3]);

// // CLASSES & ATTR
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;

// console.log(val);

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//     // console.log('Clicked');

//     let val;

//     val = e;

//     // Event target element
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     // Event type
//     val = e.type;

//     // Timestamp
//     val = e.timeStamp;

//     // Coords event relative to the window
//     val = e.clientY;
//     val = e.clientX;

//     // Coords event relative to the element
//     val = e.offsetY;
//     val = e.offsetX;

//     console.log(val);
// }

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // // Click
// // clearBtn.addEventListener('click', runEvent);

// // // Doubleclick
// // clearBtn.addEventListener('dbclick', runEvent);

// // //Mousedown
// // clearBtn.addEventListener('mousedown', runEvent);

// // // Mouseup
// // clearBtn.addEventListener('mouseup', runEvent);

// // // Mouseenter
// // card.addEventListener('mouseenter', runEvent);

// // // Mouseleave
// // card.addEventListener('mouseleave', runEvent);

// // // Mouseover
// // card.addEventListener('mouseover', runEvent);

// // // Mouseout
// // card.addEventListener('mouseout', runEvent);

// // Mousemove
// card.addEventListener('mousemove', runEvent);


// // Event Handler
// function runEvent(e){
//     console.log(`EVENT TYPE : ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');

// // Clear input
// taskInput.value = '';

// // form.addEventListener('submit', runEvent);


// // Keydown
// // taskInput.addEventListener('keydown', runEvent);

// // Keyup
// // taskInput.addEventListener('keyup', runEvent);

// // Keypress
// // taskInput.addEventListener('keypress', runEvent);

// // // Focus
// // taskInput.addEventListener('focus', runEvent);
// // // Blur
// // taskInput.addEventListener('blur', runEvent);
// // // Cut
// // taskInput.addEventListener('cut', runEvent);
// // // Paste
// // taskInput.addEventListener('paste', runEvent);
// // Input 
// // taskInput.addEventListener('input', runEvent);
// // Change
// // taskInput.addEventListener('change', runEvent);



// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);

//     console.log(e.target.value);

//     // heading.innerText = e.target.value;



//     // Get input value
//     // console.log(taskInput.value);

//     // e.preventDefault();
// }

// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', 
// function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', 
// function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', 
// function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', 
// function(){
//     console.log('col');
// });

// EVENT DELEGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//     // if(e.target.parentElement.className === 'delete-item secondary-content'){
//     //     console.log('delete item');
//     // }

//     if(e.target.parentElement.classList.contains('delete-item')){
//         console.log('delete item');
//         e.target.parentElement.parentElement.remove();
//     }
// }

// // set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// // set session storage item
// sessionStorage.setItem('name', 'Beth');

// // remove from storage
// localStorage.removeItem('name');

// // get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name);

// document.querySelector('form').addEventListener('submit', 
// function(e){
//     const task = document.getElementById('task').value;

//     let tasks;

//     if(localStorage.getItem('tasks') === null){
//         tasks = [];
//     }else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task);

//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     alert('Task saved');

//     e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task){
//     console.log(task);
// });