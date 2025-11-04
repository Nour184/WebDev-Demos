let first_op;
let second_op;
let operator;
let display = document.getElementById("display");

function reset(){
    display.textContent = '0';
    first_op = '';
    second_op = '';
    operator = null;
}

function appendNum(num){
    display.textContent += num;
}

function op(operat){
    first_op = display.textContent;
    display.textContent =operat ;
    operator = operat;
    display.textContent = '';
}

function calculate(){
    second_op = display.textContent;
    let lhs = parseInt(first_op);
    let rhs = parseInt(second_op);
    let result = 0;
    
    switch(operator){
        case '+':
            result = lhs + rhs;
            break;
        case '-':
            result = lhs - rhs;
            break;
        case '*': 
            result = lhs * rhs;
            break;
        case '/':
            result = lhs / rhs;
            break;
    }

    console.log(lhs + "first op!!");
    console.log(rhs + "second op!!");
    console.log(result +"result!!!");
    console.log(document.URL);
    first_op = '';  
    second_op = '';
    operator = '';
    display.innerHTML = result.toString();
}