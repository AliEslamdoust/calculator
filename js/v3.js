let preNum = document.getElementById("preNum");
let preAnswer = document.getElementById("preAnswer");
let input = document.getElementById("number");
let numerals = document.querySelectorAll(".numerals");
let operators = document.querySelectorAll(".operator");
let decimal = document.getElementById("dot");
let number = [];
let finalNumbers = [];
let preNumFinal = [];
// typing numbers and operators
input.addEventListener("input", function () {
  let userInput = `${this.value}`;
  this.value = userInput.replace(
    /["~""`""!""@""#""$""&""("")""_"",""<"">""{""}"""""'"":"";""?""=""|"]|[a-zA-Z]/,
    ""
  );
  for (i in userInput) {
    lastNumbers[i] = userInput[i];
  }
  preAnswer.innerHTML = equalBtn();
});
let lastNumbers = [];
input.addEventListener("keyup", function () {
  let key = event.key;
  opra();
  correctPar();
  if (key === "Enter") {
    input.value = equalBtn();
    preAnswer.innerHTML = "";
  } else if (key === "^") {
    input.value = input.value.replace(/["^"]/g, "**");
  }
});
function opra() {
  let userInput = `${input.value}`;
  lastNumbers = [...userInput];
  if (
    isNaN(lastNumbers[lastNumbers.length - 1]) &&
    lastNumbers[lastNumbers.length - 1] != ")" &&
    lastNumbers[lastNumbers.length - 1] != "("
  ) {
    lastNumbers.pop();
  }
  finalNumbers.push(lastNumbers.join(""));
  lastNumbers = [];
}

// clicking numeral btns
numerals.forEach((element) => {
  element.addEventListener("click", function () {
    input.value += this.innerHTML;
    correctPar();
    preAnswer.innerHTML = equalBtn();
  });
});

// delete one character
let del = document.getElementById("del");
del.addEventListener("click", () => {
  let userInput = `${input.value}`;
  for (i in userInput) {
    number[i] = userInput[i];
  }
  number.pop();
  input.value = number.join("");
  preAnswer.innerHTML = equalBtn();
});

// delete All
let delAll = document.querySelectorAll(".ce");
delAll.forEach((element) => {
  element.addEventListener("click", () => {
    input.value = "";
    number = [];
    lastNumbers = [];
    finalNumbers = [];
    preAnswer.innerHTML = "";
  });
});

// submit btn
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  input.value = equalBtn();
  preAnswer.innerHTML = "";
});
function equalBtn() {
  opra();
  if (
    input.value == "" ||
    input.value == "+" ||
    input.value == "-" ||
    input.value == "=" ||
    input.value == "*" ||
    input.value == "**" ||
    input.value == "/" ||
    input.value == "." ||
    input.value == "%"
  ) {
    return "";
  } else {
    correctPar();
    checkPar();
    let finalNum = eval(finalNumbers[finalNumbers.length - 1]);
    finalNumbers = [];
    finalNumbers.push(finalNum);
    return finalNumbers[0];
  }
}

// operators by btn
operators.forEach((element) => {
  element.addEventListener("click", function () {
    switch (this.getAttribute("operator")) {
      case "+":
        input.value += "+";
        break;
      case "-":
        input.value += "-";
        break;
      case "x":
        input.value += "*";
        break;
      case "/":
        input.value += "/";
        break;
      case "%":
        input.value += "%";
        break;
      case "*x":
        input.value += "**2";
        equalBtn();
        break;
      case "rad2":
        opra();
        input.value = Math.sqrt(finalNumbers[finalNumbers.length - 1]);
        finalNumbers = [];
        finalNumbers.push(input.value);
        break;
      case "1/x":
        opra();
        let inpNum = eval(finalNumbers[finalNumbers.length - 1]);
        input.value = 1 / inpNum;
        finalNumbers = [];
        finalNumbers.push(input.value);
        break;
      case "+/-":
        opra();
        finalNumbers = [];
        finalNumbers.push(input.value);
        finalNumbers.unshift("(");
        finalNumbers.push(")");
        finalNumbers.unshift("-");
        input.value = finalNumbers.join("");
        finalNumbers.push(finalNumbers.join(""));
        preAnswer.innerHTML = equalBtn();
        break;
    }
  });
});

// correct x after ()
function correctPar() {
  let correctionWord = `${finalNumbers[finalNumbers.length - 1]}`;
  if (correctionWord[correctionWord.length - 2] == ")") {
    let lastWord = correctionWord[correctionWord.length - 1];
    let lastWords = [...correctionWord];
    lastWords.pop();
    lastWords.push("*");
    lastWords.push(lastWord);
    input.value = lastWords.join("");
    preAnswer.innerHTML = equalBtn();
  }
}

// warn to close paranthes
let rightpr = document.getElementById("closepr");
function checkPar() {
  let lastStr = `${finalNumbers[finalNumbers.length - 1]}`;
  let leftCount = 0;
  let rightCount = 0;
  for (i in lastStr) {
    if (lastStr[i] == "(") {
      leftCount++;
    } else if (lastStr[i] == ")") {
      rightCount++;
    }
  }
  if (leftCount != rightCount) {
    rightpr.classList.add("parRed");
  } else {
    rightpr.classList.remove("parRed");
  }
}
