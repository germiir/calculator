const output = document.getElementById("output");
const key0 = document.getElementById("key0");
const key1 = document.getElementById("key1");
const key2 = document.getElementById("key2");
const key3 = document.getElementById("key3");
const key4 = document.getElementById("key4");
const key5 = document.getElementById("key5");
const key6 = document.getElementById("key6");
const key7 = document.getElementById("key7");
const key8 = document.getElementById("key8");
const key9 = document.getElementById("key9");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const point = document.getElementById("point");
const equals = document.getElementById("equals");

let numberArray = [];
let currentActiveFunction = " ";
let firstNumber = "";

function clearOutput() {
  const functionKeys = document.getElementsByClassName("functionButtons");
  document.getElementById("output").innerHTML = "0";
  currentActiveFunction = " ";
  numberArray = [];
  for(let i = 0; i < 5; i++) {
    functionKeys[i].style.backgroundColor = "#97abf1";
  }
} 

function numberTooLong(result) {
  const output = document.getElementById("output");
  if(result.toString().length > 9) {
    output.innerHTML = "Too long";
  } else {
    output.innerHTML = result;
  }
}

function calculate(x, y) {
  let result = 0;
  const output = document.getElementById("output");
  const functionKeys = document.getElementsByClassName("functionButtons");
  switch(currentActiveFunction) {
    case 'plus':
      result = x + y;
      break;

    case 'minus':
      result = x - y;
      break;
    
    case 'divide':
      result = x / y;
      break;
    
    default:
      console.log("error");
  }
  numberTooLong(result);
  /*output.innerHTML = x + y;*/
  numberArray = [];
  firstNumber = "";
  currentActiveFunction = " ";
  for(let i = 0; i < 5; i++) {
    functionKeys[i].style.backgroundColor = "#97abf1";
  }
}

function buttonPress(x) {
  const plus = document.getElementById("plus");
  const equals = document.getElementById("equals");
  const output = document.getElementById("output");
  const functionKeys = document.getElementsByClassName("functionButtons");
  const minus = document.getElementById("minus");
  const divide = document.getElementById("divide");

  switch(x) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0:
      if(numberArray.length < 10) {
        numberArray.push(x);
        output.innerHTML = numberArray.join("");
      }
      break;
    
    case 'equals':
      let secondNumber = parseInt(numberArray.join(""));
      calculate(firstNumber, secondNumber);
      break;

    case 'plus':
      firstNumber = parseInt(numberArray.join(""));
      clearOutput();
      currentActiveFunction = "plus";
      console.log(currentActiveFunction);
      plus.style.backgroundColor = "yellow";
      break;
    
    case 'minus':
      firstNumber = parseInt(numberArray.join(""));
      clearOutput();
      currentActiveFunction = "minus";
      console.log(currentActiveFunction);
      minus.style.backgroundColor = "yellow";
      break;

    case 'divide':
      firstNumber = parseInt(numberArray.join(""));
      clearOutput();
      currentActiveFunction = "divide";
      console.log(currentActiveFunction);
      divide.style.backgroundColor = "yellow";
      break;
  }
}