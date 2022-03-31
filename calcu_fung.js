const calculatorScreen = document.querySelector(".calculator-screen");

let prevNumber = "";
let calculationOperator = "";
let currentNumber="0";
var bel = new Audio('sound.mp3');
function bunyi() {
  bel.currentTime = 0;
  bel.play();
}

const updateScreen = (number) => {
    calculatorScreen.value = number
}
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        bunyi()
        updateScreen(event.target.value)
    });
});


const inputNumber = (number) => {
    if(currentNumber ==="0") {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        bunyi()
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        bunyi()
        inputOperator(event.target.value)
    });
});

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator  = operator
    currentNumber = ""

    if(calculationOperator === ""){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = "0"
}

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
        bunyi()
        calculate()
        updateScreen(currentNumber)
  
})

const calculate = () => {
    let result =""

    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break           
    }
    currentNumber = result
    calculationOperator= ""

}


const clearAll = () => {
    
    prevNumber=""
    calculationOperator=""
    currentNumber="0"
}

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
    bunyi()
    clearAll()
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
    bunyi()
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const percentage = document.querySelector(".percentage")

inputPercentage = () => {
    if(prevNumber === "") {
        currentNumber = currentNumber/100
    } else if (prevNumber !== ""){
        currentNumber = (currentNumber*prevNumber)/100

    } 
    
}

percentage.addEventListener("click" , (event)=> {
    bunyi()
    inputPercentage(event.target.value)
    updateScreen(currentNumber)
})




