let numberArray = [];
let currentActiveFunction = " ";
let firstNumber = "";

function buttonPress(x) {
  /*
  const plus = document.getElementById("plus");
  const output = document.getElementById("output");
  const minus = document.getElementById("minus");
  const divide = document.getElementById("divide");
  const multiply = document.getElementById("multiply");
  const deleteButton = document.getElementById("deleteButton");
  */
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

    case 'multiply':
      firstNumber = parseInt(numberArray.join(""));
      clearOutput();
      currentActiveFunction = "multiply";
      console.log(currentActiveFunction);
      multiply.style.backgroundColor = "yellow";
      break;
    
    case 'deleteButton':
      numberArray.pop();
      if(numberArray.length > 0) {
        output.innerHTML = numberArray.join("");
      } else {
        output.innerHTML = "0";
      }
      break;

  }
}

function clearOutput() {
  const functionKeys = document.getElementsByClassName("functionButtons");
  document.getElementById("output").innerHTML = "0";
  currentActiveFunction = " ";
  numberArray = [];
  for(let i = 0; i < 5; i++) {
    functionKeys[i].style.backgroundColor = "#97abf1";
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
    
    case 'multiply':
      result = x * y;
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

function numberTooLong(result) {
  const output = document.getElementById("output");
  if(result.toString().length > 9) {
    output.innerHTML = "Too long";
  } else {
    output.innerHTML = result;
  }
}



