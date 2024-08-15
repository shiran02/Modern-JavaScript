function calculator(num1 , num2 ,operator){
    switch(true){
        case operator == '+':
            console.log(` ${num1 + num2}`);
            break;
        case operator == '-':
            console.log(` ${num1 - num2}`);
            break;
        case operator == '*':
            console.log(` ${num1 * num2}`);
            break;
        case operator == '/':
            console.log(` ${num1 / num2}`);
            break;
        case operator== '&':
            console.log(`Erra`);
            break;
        default :
        console.log(`Erra`);
        break;
    }
}

function calculato2r(num1 , num2 ,operator){
    switch(operator){
        case '+':
            console.log(` ${num1 + num2}`);
            break;
        case '-':
            console.log(` ${num1 - num2}`);
            break;
        case '*':
            console.log(` ${num1 * num2}`);
            break;
        case '/':
            console.log(` ${num1 / num2}`);
            break;
        case'&':
            console.log(`Erra`);
            break;
        default :
        console.log(`Erra`);
        break;
    }
}



calculator(3,2,'/');