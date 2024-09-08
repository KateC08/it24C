//Data types
let k_name = "level";
let num = 5;

function Prime_or_Not(num) {
    //Conditional statements
    if(num === 2) {
        return num + " is a Prime Number";
    } else if (num === 1) {
        return num + " is not a Prime Number";
    } else if(num % 2 === 0) {
        return num + " is not a Prime Number";
    }else {
        return num + " is a Prime Number";
    }

} 
//Loops
for(i = 0; i <= num; i++) {
    console.log(Prime_or_Not(i));
}
console.log("~~~~~~~~~~~~~~~~~");


