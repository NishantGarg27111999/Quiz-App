const express = require('express');
const path=require('path');
const cors = require('cors');
const app = express();

app.use(cors());


const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../FrontEnd')));
let questions = [
    {
        question: "What will the following code output?\njavascript\nlet x = 10;\n(function() {\n  console.log(x);\n  let x = 20;\n})();\n",
        options: ["10", "20", "undefined", "ReferenceError"],
        answer: 4
      },
    {
        question: "What is extension of javascript file?",
        options: [".javascript", ".js", ".java", ".script"],
        answer: 2
    },
    {
        question: "What is the purpose of the `this` keyword in JavaScript?",
        options: ["To refer to the current function", "To refer to the global object", "To refer to the current object", "To refer to the parent object"],
        answer: 3
      },
      {
        question: "Which of the following is true about arrow functions in JavaScript?",
        options: ["Arrow functions do not have their own `this` context.", "Arrow functions can be used as constructors.", "Arrow functions allow the use of the `arguments` object.", "Arrow functions always require curly braces."],
        answer: 1
      },
      {
        question: "What does the `typeof` operator return for an array in JavaScript?",
        options: ["\"array\"", "\"object\"", "\"undefined\"", "\"function\""],
        answer: 2
      },
      {
        question: "How can you create an object in JavaScript?",
        options: ["let obj = {};", "let obj = Object.create();", "let obj = new Object();", "All of the above"],
        answer: 4
      },
      {
        question: "Which method would you use to attach an event handler to an element in JavaScript?",
        options: ["element.attach()", "element.on()", "element.addEventListener()", "element.bind()"],
        answer: 3
      },
      {
        question: "What will the following code output?\n```javascript\nlet x = 10;\n(function() {\n  console.log(x);\n  let x = 20;\n})();\n```",
        options: ["10", "20", "undefined", "ReferenceError"],
        answer: 4
      },
      {
        question: "Which of the following methods can be used to copy an array in JavaScript?",
        options: ["let arr2 = arr1;", "let arr2 = arr1.slice();", "let arr2 = [...arr1];", "b) and c)"],
        answer: 4
      },
      {
        question: "What is the result of `2 + true` in JavaScript?",
        options: ["2true", "NaN", "3", "2"],
        answer: 3
      },
      {
        question: "Which of the following methods is used to convert a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.objectify()"],
        answer: 1
      },
      {
        question: "What will the following code output?\n```javascript\nconsole.log(!!\"false\" == !!\"true\");\n```",
        options: ["true", "false", "undefined", "TypeError"],
        answer: 1
      },
      {
        question: "Which of the following is not a loop structure in JavaScript?",
        options: ["for", "while", "do...while", "foreach"],
        answer: 4
      },
      {
        question: "What is the output of the following code?\n```javascript\nconsole.log(typeof NaN);\n```",
        options: ["\"number\"", "\"NaN\"", "\"undefined\"", "\"object\""],
        answer: 1
      },
      {
        question: "How do you create a promise in JavaScript?",
        options: ["let promise = Promise.create()", "let promise = new Promise()", "let promise = new Promise((resolve, reject) => {});", "let promise = Promise.new()"],
        answer: 3
      },
      {
        question: "Which of the following methods will stop event propagation?",
        options: ["event.stopPropagation()", "event.preventDefault()", "event.stopImmediatePropagation()", "Both a) and c)"],
        answer: 4
      },
      {
        question: "What does the `bind()` method do in JavaScript?",
        options: ["It permanently binds a function to a particular `this` context.", "It creates a new function that, when called, has its `this` keyword set to the provided value.", "It binds two objects together.", "It binds a variable to a specific value."],
        answer: 2
      },
      {
        question: "What is the output of the following code?\n```javascript\nconsole.log([1, 2, 3].map(num => num * num));\n```",
        options: ["[1, 4, 9]", "1, 4, 9", "[1, 2, 3]", "undefined"],
        answer: 1
      },
      {
        question: "What will `console.log(typeof function() {});` output?",
        options: ["\"object\"", "\"function\"", "\"undefined\"", "\"boolean\""],
        answer: 2
      },
      {
        question: "Which of the following is a correct way to create an array?",
        options: ["let arr = [1, 2, 3];", "let arr = Array(1, 2, 3);", "let arr = new Array(1, 2, 3);", "All of the above"],
        answer: 4
      },
      {
        question: "Which of the following is the correct way to check if a property exists in an object?",
        options: ["\"propertyName\" in object", "object.hasOwnProperty(\"propertyName\")", "object.propertyName", "Both a) and b)"],
        answer: 4
      },
      {
        question: "What is the output of the following code?\n```javascript\nconsole.log([] + []);\n```",
        options: ["\"\"", "[]", "\"[object Object]\"", "undefined"],
        answer: 1
      }
]


app.get("/", function (req, res) {
    
    res.sendFile(path.join(__dirname+'\\FrontEnd\\index.html'));
  });

app.get("/total_questions", function (req, res) {

res.send(`${questions.length}`);
});

app.get("/question/:id", function (req, res) {

    res.send(questions[req.params.id]);
    });


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
