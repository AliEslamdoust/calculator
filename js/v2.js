let numerals = document.querySelectorAll(".numerals");
let value = "";
let numbers = [];
// type numbers
let preAnswer = document.getElementById("preAnswer");
let preAnswerIcon = '&nbsp;<span class="preAnswerOpr"></span>&nbsp;';
numerals.forEach((element) => {
  element.addEventListener("click", () => {
    let input = document.getElementById("number").value;
    numbers.push(input + element.innerHTML);
    document.getElementById("number").value = numbers[numbers.length - 1];
    if (a != 0) {
      let input = document.getElementById("number").value;
      b = input;
      mainOperators.forEach((elem) => {
        switch (currentOperator) {
          case "x":
            preAnswerText = a * b;
            preAnswer.innerHTML = preAnswerIcon + preAnswerText;
            break;
          case "-":
            preAnswerText = a - b;
            preAnswer.innerHTML = preAnswerIcon + preAnswerText;
            break;
          case "+":
            preAnswerText = Number(a) + Number(b);
            preAnswer.innerHTML = preAnswerIcon + preAnswerText;
            break;
          case "%":
            preAnswerText = a % b;
            preAnswer.innerHTML = preAnswerIcon + preAnswerText;
            break;
          case "/":
            preAnswerText = a / b;
            preAnswer.innerHTML = preAnswerIcon + preAnswerText;
            break;
          default:
            preAnswerText = 0;
            preAnswer.innerHTML = "";
            break;
        }
      });
    }
    if (result == true) {
      deleteAll();
      result = false;
      numbers.push(element.innerHTML);
      document.getElementById("number").value = numbers[numbers.length - 1];
    }
  });
});
// delete using c and ce btns
let delAll = [document.getElementById("ce"), document.getElementById("c")];
delAll.forEach((element) => {
  element.addEventListener("click", () => {
    deleteAll();
  });
});
function deleteAll() {
  document.getElementById("number").value = "";
  preNum.innerHTML = "";
  preAnswer.innerHTML = "";
  numbers = [];
  a = 0;
  b = 0;
}
//  delete the last number
let del = document.getElementById("del");
del.addEventListener("click", () => {
  let lastNum = numbers[numbers.length - 1];
  console.log(lastNum);
  numbers = [];
  lastNum = Math.floor(lastNum / 10);
  numbers.push(lastNum);
  document.getElementById("number").value = numbers[numbers.length - 1];
  preNum.innerHTML = "";
  preAnswer.innerHTML = "";

  result = false;
});
// main operations

let a = 0;
let b = 0;
let preNum = document.getElementById("preNum");
let preAnswerText;
let currentOperator;
let mainOperators = [
  document.getElementById("div"),
  document.getElementById("mul"),
  document.getElementById("sub"),
  document.getElementById("sum"),
  document.getElementById("per"),
];
mainOperators.forEach((element) => {
  element.addEventListener("click", () => {
    result = false;
    let input = document.getElementById("number").value;
    let eOperator = element.getAttribute("operator");
    if (a == 0) {
      numbers = [];
      switch (eOperator) {
        case "x":
          a = input;
          preNum.innerHTML = a + " " + eOperator;
          currentOperator = eOperator;
          document.getElementById("number").value = "";
          break;
        case "+":
          a = input;
          preNum.innerHTML = a + " " + eOperator;
          currentOperator = eOperator;
          document.getElementById("number").value = "";
          break;
        case "/":
          a = input;
          preNum.innerHTML = a + " " + eOperator;
          currentOperator = eOperator;
          document.getElementById("number").value = "";
          break;
        case "-":
          a = input;
          preNum.innerHTML = a + " " + eOperator;
          currentOperator = eOperator;
          document.getElementById("number").value = "";
          break;
        case "%":
          a = input;
          preNum.innerHTML = a + " " + eOperator;
          currentOperator = eOperator;
          document.getElementById("number").value = "";
          break;
      }
    } else {
    }
  });
});
// preAnswer show
let inputNumber = document.getElementById("number");
inputNumber.addEventListener("input", () => {});

// equal button
let result = false;
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  if (a != 0) {
    numbers.push(Number(preAnswerText));
    document.getElementById("number").value = numbers[numbers.length - 1];
    preAnswer.innerHTML = "";
    preNum.innerHTML = a + " " + currentOperator + " " + b + preAnswerIcon;
    result = true;
    a = 0;
    b = 0;
  }
});

// other operators
let reverse = document.getElementById("rev");
let power = document.getElementById("pow");
let radikal = document.getElementById("rad");
let mul_1 = document.getElementById("sbm");
reverse.addEventListener("click", () => {
  preAnswer.innerHTML = "";
  result = true;
  a = 0;
  b = 0;
  let input = document.getElementById("number").value;
  preNum.innerHTML = `1 / ${input}`;
  document.getElementById("number").value = Number(1 / input);
});
power.addEventListener("click", () => {
  preAnswer.innerHTML = "";
  result = true;
  a = 0;
  b = 0;
  let input = document.getElementById("number").value;
  preNum.innerHTML = `${input} <sup>2</sup>`;
  document.getElementById("number").value = Number(input * input);
});
radikal.addEventListener("click", () => {
  preAnswer.innerHTML = "";
  result = true;
  a = 0;
  b = 0;
  let input = document.getElementById("number").value;
  preNum.innerHTML = `2rad ${input}`;
  document.getElementById("number").value = Math.sqrt(input);
});
mul_1.addEventListener("click", () => {
  preAnswer.innerHTML = "";
  result = false;
  let input = document.getElementById("number").value;
  preNum.innerHTML = "";
  document.getElementById("number").value = input * -1;
});
