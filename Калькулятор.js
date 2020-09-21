let resaultSum = function() {
    let num1, num2, res;
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    
    if ( (num1 === "") || (num2 === "") ) {
        alert("Данные введены не полностью!");
    } else {
        res = +num1 + +num2;
        document.getElementById("out").innerHTML += res;
    }
};

let resaultDiff = function() {
    let num1, num2, res;
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    
    if ( (num1 === "") || (num2 === "") ) {
        alert("Данные введены не полностью!");
    } else {
        res = +num1 - +num2;
        document.getElementById("out").innerHTML += res;
    }
};

let resultMult = function() {
    let num1, num2, res;
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    
    
    if ( (num1 === "") || (num2 === "") ) {
        alert("Данные введены не полностью!");
    } else {
        res = +num1 * +num2;
        document.getElementById("out").innerHTML += res;
    }
};

let resultDiv = function() {
    let num1, num2, res;
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    

    if ( (num1 === "") || (num2 === "") ) {
        alert("Данные введены не полностью!");
    } else if ( !(+num2) ) {
        alert("На ноль делить нельзя!")
    } else {
        res = +num1 / +num2;
        document.getElementById("out").innerHTML += res;
    }
};
