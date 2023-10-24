let back = document.getElementById("del");
let clear = document.querySelectorAll(".ce");
let numerals = document.querySelectorAll(".numerals");
let operatos = document.querySelectorAll(".operator");
let submit = document.getElementById("submit");
let preNumber = document.getElementById("preNum");
let input = document.getElementById("number");
let preAnswer = document.getElementById("preAnswer");
let showNumbers = [];
let numbers = [];

// add numbers
numerals.forEach((element) => {
  element.addEventListener("click", () => {
    showNumbers.push(element.innerHTML);
    input.value = showNumbers.join("");
    preAnswerF();
  });
});
function preAnswerF() {
  if (showNumbers.length > 0) {
    operatos.forEach((elem) => {
      let eOperator = elem.getAttribute("operator");
      numbers = [...showNumbers];
      if (numbers[numbers.length - 1] == eOperator) {
        numbers.pop();
      }
    });
    try {
      let result = eval(numbers.join(""));
      preAnswer.innerHTML = result;
    } catch (error) {
      preAnswer.innerHTML = "Error";
    }
  } else {
    preAnswer.innerHTML = "";
  }
}

// add operations to the input
operatos.forEach((element) => {
  element.addEventListener("click", () => {
    let eOperator = element.getAttribute("operator");
    switch (eOperator) {
      case "+":
        showNumbers.push("+");
        break;
      case "-":
        showNumbers.push("-");
        break;
      case "x":
        showNumbers.push("*");
        break;
      case "/":
        showNumbers.push("/");
        break;
      case "+/-":
        showNumbers.unshift("(");
        showNumbers.push(")");
        showNumbers.unshift("-");
        break;
    }
    input.value = showNumbers.join("");
  });
});
// show result
let equal = false;
submit.addEventListener("click", () => {
  operatos.forEach((elem) => {
    let eOperator = elem.getAttribute("operator");
    if (numbers[numbers.length - 1] == eOperator) {
      numbers.pop();
    }
  });
  let result = eval(showNumbers.join(""));
  preNumber.innerHTML =
    showNumbers.join("") + '&nbsp;<span class="preAnswerOpr"></span>&nbsp;';
  showNumbers = [];
  try {
    showNumbers.push(result);
    preAnswer.innerHTML = result;
  } catch (error) {
    preAnswer.innerHTML = "Error";
  }

  preAnswer.innerHTML = "";
});
// delete all using c and ce
clear.forEach((element) => {
  element.addEventListener("click", () => {
    preAnswer.innerHTML = "";
    showNumbers = [];
    input.value = showNumbers.join("");
    preNumber.innerHTML = "";
  });
});

// delete one using backspace
back.addEventListener("click", () => {
  showNumbers.pop();
  input.value = showNumbers.join("");
  preAnswerF();
});
