var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var op1 = 0;
var op2 = null;
var operator = null;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',operation)
}

function operation() {
    var value = this.getAttribute('data-value');
    // if(value == "AC"){
         
    // }else if(value == '+/-'){
    //     //handle operators
    //     op1 = parseFloat(display.textContent()) * -1;
    //     display.innerText = op1;
    // }else if(value == '='){
    //     //handle eval 
    // }else{
    //     display.innerText += value;
    // }
    switch (value) {
        case "AC":
            display.innerText = "";
            op1 = null;
            op2 = null;
            operator = null;
            break;
        case "+":
            operator = '+';
            op1 = parseFloat(display.textContent);
            display.innerText = "";
            break;
        case "-":
            operator = '-';
            op1 = parseFloat(display.textContent);
            display.innerText = "";
            break;
        case "*":
            operator = '*';
            op1 = parseFloat(display.textContent);
            display.innerText = "";
            break;
        case "/":
            operator = '/';
            op1 = parseFloat(display.textContent);
            display.innerText = "";
            break;
        case "%":
            op1 = parseFloat(display.textContent);
            op1 /= 100;
            display.innerText = String(op1);
            break;
        case "+/-":
            op1 = parseFloat(display.textContent);
            op1 = op1 * (-1);
            display.innerText = String(op1);
            break;
        case "=":
            if(op2 == null){
                op2 = parseFloat(display.textContent);
            }
            if (operator == "/" && op2 == 0) {
                display.innerText = "Error";
                op1 = null;
                op2 = null;
                operator = null;
            } else {
                var result = eval(op1 + " " + operator + " " + op2);
                display.innerText = String(result);
                op1 = result;
            }
            break;
        default:
            display.innerText += value;
    }
}


// if (operator == null) {
//     op1 = parseFloat(display.textContent);
//     op1 /= 100;
//     display.innerText = String(op1);
// } else {
//     op2 = parseFloat(display.textContent);
//     op2 = (op1 / 100) * op2;
//     display.innerText = String(op2);
// }