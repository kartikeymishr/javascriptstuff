// ====================================================================================
// Question 1

// var currentDate = new Date();
// var datetime = "The date and time is " + (currentDate.getMonth() + 1)
//     + "/" + currentDate.getDate()
//     + "/" + currentDate.getFullYear()
//     + " " + currentDate.getHours()
//     + ":" + currentDate.getMinutes()
//     + ":" + currentDate.getSeconds();

// console.log("Question 1");
// console.log(datetime);

// ====================================================================================
// Question 2

// var arr = [43, 78, 23, 99, 69];
// var max = arr[0];

// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }

// console.log("Question 2");
// console.log(arr);
// console.log("The largest number in the array is " + max);

// ====================================================================================
// Question 3

// var number = prompt("For Question 3, please enter a number");

// // Converting number to string
// var numberString = number.toString();

// // Creating new array for building the result string
// var result = [numberString[0]];

// // Loop for 'pushing' the dashes at appropriate locations according to conditions (even digits)
// for (var i = 1; i < numberString.length; i++) {
//     if ((numberString[i - 1] % 2 === 0) && (numberString[i] % 2 === 0)) {
//         result.push('-', numberString[i]);
//     } else {
//         result.push(numberString[i]);
//     }
// }

// // Creating a new String from the result array
// var newString = result.join('');

// console.log("Question 3");
// console.log(newString);

// ====================================================================================
// Question 4

// var names = ["Kartikey", "Tanmay", "Abhijeet", "Amit", "Pankaj", "Soumyajit", "Manik", "Vetri", "Jason"];

// console.log("Question 4");
// console.log("Ascending order: ");
// console.log(names.sort());
// console.log("Descending order: ");
// console.log(names.reverse());

// // ====================================================================================
// // Question 5

// var dupNames = ["Kartikey", "Tanmay", "Abhijeet", "Kartikey", "Soumyajit", "Pankaj", "Pankaj"];

// // An object of Set class automatically deletes duplicate values
// var newNames = new Set(dupNames);

// console.log("Question 5");
// console.log(dupNames);
// console.log(newNames);

// ====================================================================================
// Question 6

// var array1 = [45, 6, 7, 34, 7, 4, 66, 8, 89, 69];
// var array2 = [34, 7, 763, 4, 78, 69, 83, 2, 45, 100];

// var array3 = array1.concat(array2);
// var newArray = array3.filter((elem, i, arr) => {
//     if (arr.indexOf(elem) === i) {
//         return elem
//     }

// })

// console.log("Question 6");
// console.log(newArray);

// ====================================================================================
// Question 7

// var library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 },
//     { author: 'J. K. Rowling', title: 'Harry Potter', libraryID: 4838 },
//     { author: 'George R. R. Martin', title: 'A Song Of Ice and Fire', libraryID: 2948 },
//     { author: 'Tolkein', title: 'The Lord Of The Rings', libraryID: 6283 }
// ];

// function compare(a, b) {
//     var titleA = a.title.toLowerCase();
//     var titleB = b.title.toLowerCase();

//     if (titleA > titleB) {
//         return 1;
//     } else if (titleB > titleA) {
//         return -1;
//     }
//     return 0;
// }

// console.log("Question 7");
// console.log("Sorted by title");
// console.log(library.sort(compare));

// ====================================================================================
// Question 8

// var email = prompt("For Question 8, enter your Email ID");

// function checkEmail(em) {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(em);
// }

// console.log("Question 8");
// if (checkEmail(email)) {
//     console.log("Valid Email ID");
// } else {
//     console.log("Invalid Email ID");
// }

// ====================================================================================
// Question 9

// var student = {
//     name: "Kartikey",
//     sclass: "CSE 14-18",
//     rollNo: 24
// };

// console.log("Question 9");
// console.log("Properties of the object are: ");
// for (var prop in student) {
//     console.log(prop);
// }

// ====================================================================================
// Question 10

// var studentMarks = [
//     {
//         name: "David",
//         marks: 80
//     },
//     {
//         name: "Vinoth",
//         marks: 77
//     },
//     {
//         name: "Divya",
//         marks: 88
//     },
//     {
//         name: "Ishitha",
//         marks: 95
//     },
//     {
//         name: "Thomas",
//         marks: 68
//     }
// ];

// var total = 0;
// var avg = 0;
// for (var i = 0; i < studentMarks.length; i++) {
//     total += studentMarks[i].marks;
//     avg = total / studentMarks.length;
// }

// var avgGrade;

// for (var i = 0; i < studentMarks.length; i++) {
//     if (avg < 100 && avg >= 90) {
//         avgGrade = 'A';
//     } else if (avg < 90 && avg >= 80) {
//         avgGrade = 'B';
//     } else if (avg < 80 && avg >= 70) {
//         avgGrade = 'C';
//     } else if (avg < 70 && avg >= 60) {
//         avgGrade = 'D';
//     } else if (avg < 60) {
//         avgGrade = 'F';
//     }
// }

// console.log("Average grade is " + avgGrade);

// ====================================================================================
// Question 11

// var string = prompt("For Question 11, enter a string");
// var resultString;

// function alphabetically(s) {
//     resultString = string.split('').sort().join('');
// }

// alphabetically(string);

// console.log("Question 11");
// console.log("The alphabetically arranged string is " + resultString);

// ====================================================================================
// Question 12

// var string = prompt("For Question 12, enter a string");
// var letter = prompt("Enter the letter to be counted");
// var sArray = [];
// var count = 0;

// function countLetter(s, l) {
//     sArray = s.split('');
//     for (var i = 0; i < sArray.length; i++) {
//         if (sArray[i] === l) {
//             count++;
//         }
//     }
// }

// countLetter(string, letter);

// console.log("Question 12");
// console.log(letter + " occurs " + count + " times in " + string);

// ====================================================================================
// Question 13

// var myObj = [5, [22], [[14]], [[4]], [5, 6]]
// var newArray = myObj.join(",");
// console.log(newArray);

// ====================================================================================
// Question 14

// var myObj = [
//     { 'name': "Saurabh", 'age': 30, 'occupation': "Team Leader" },
//     { 'name': "Anupriya", 'age': 32, 'occupation': "Team Leader" },
//     { 'name': "Kalyani", 'age': 25, 'occupation': "Programmer" },
//     { 'name': "Damodaran", 'age': 27, 'occupation': "Programmer" },
//     { 'name': "Krishnakath", 'age': 22, 'occupation': "Programmer" },
//     { 'name': "Venketraman", 'age': 28, 'occupation': "Programmer" }
// ];

// console.log("Question 14");
// console.log("Exercise 1");
// console.log("Showing all objects with occupation as Programmer");

// for (var i = 0; i < myObj.length; i++) {
//     if (myObj[i].occupation === "Programmer") {
//         console.log(myObj[i]);
//     }
// }

// console.log("Exercise 2");
// console.log("Sorting all objects w.r.t. age in descending order");

// function compare(a, b) {
//     if (a.age > b.age) {
//         return -1;
//     } else if (b.age > a.age) {
//         return 1;
//     }
//     return 0;
// }
// console.log(myObj.sort(compare));

// console.log("Exercise 3");

// var newObj = {}

// // Creating object with 'occupation' father node
// for (var z of myObj) {
//     newObj[z['occupation']] = [];
// }

// // Pushing each child to it's corresponding father node
// for (var z of myObj) {
//     newObj[z['occupation']].push(z);
// }

// // Deleting the redundant 'occupation' child-node from the new object
// for (var k in newObj) {
//     for (var l of newObj[k]) {
//         delete l['occupation']
//     }
// }
// console.log(newObj)

// console.log("Exercise 4")
// var nameArray = [];
// myObj.map(data => nameArray.push(data.name));
// console.log(nameArray);

// ====================================================================================
// Question 15

// var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
// var myObj = JSON.parse(jsonStr);

// console.log("Question 15");
// console.log("Value of the jason propery is");
// console.log(myObj.jason);

// ====================================================================================
// Question 16

// var obj = {
//     "One": "1",
//     "Two": "2",
//     "Three": "3",
//     "Four": "4"
// }

// var objArray = Object.values(obj);

// console.log("Question 16");
// console.log(objArray);

