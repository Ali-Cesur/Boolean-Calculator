let number1=0
let number2=0
let operation = false
let sign = ''
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
function addNumber(number) {
    document.getElementById("res").innerHTML += number;
}

function clrFunction() {
    document.getElementById("res").innerHTML = '';
    operation = false
    sign = ''
}
function addOperator(operator) {
    if(sign === ''){
        sign = operator
        document.getElementById("res").innerHTML += sign
    }
}
function eqlFunction() {
    if(sign !==''){

        number1=document.getElementById("res").innerHTML.split(sign)[0]
        number2=document.getElementById("res").innerHTML.split(sign)[1]
        let final = eval(parseInt(number1,2)+sign+parseInt(number2,2))
        
    document.getElementById("res").innerHTML = dec2bin(final)
        sign = ''
    }
    
}
