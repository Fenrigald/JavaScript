function mathOperation(arg1, arg2, operation){
    switch(operation){
            case "+":
                return arg1 + arg2
                break
            case "-":
                return arg1 - arg2
             break
            case "/":
                       return arg1 / arg2
             break;
            case "*":
                return arg1 * arg2
             break
       }
}
alert(mathOperation(4, 5, "+"))
alert(mathOperation(5, 4, "-"))
alert(mathOperation(4, 5, "*"))
alert(mathOperation(10, 2, "/"))