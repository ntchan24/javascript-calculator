
//create functions for all the different operations 
function add (operand1,operand2) {
    return operand1 + operand2;
}

function subtract (operand1,operand2) {
    return operand1 - operand2;
}

function multiply (operand1,operand2) {
    return operand1 * operand2;
}

function divide (operand1,operand2) {
    return operand1 / operand2;
}

function operate (){
    //on button click
    document.getElementById("equals").addEventListener("click", () => {
        let operand1 = parseFloat(document.getElementById("number1").value)
        let operand2 = parseFloat(document.getElementById("number2").value)
        let operator = document.getElementById("operator").value

        // console.log("answer being calculated")
        // console.log(operand1,operand2)

        let answer;

        switch (operator){
            case "+":
                answer = add(operand1,operand2)
                console.log(answer)
                break

            case "-":
                answer = subtract(operand1,operand2)
                console.log(answer)
                break

            case "*":
                answer = multiply(operand1,operand2)
                console.log(answer)
                break

            case "/":
                answer = divide(operand1,operand2)
                console.log(answer)
                break
        
        }
        console.log(answer)
        document.getElementById("answer").textContent = answer
    })
    
     

}

operate()