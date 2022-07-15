function two(number1, number2) {
    if(number1 > number2 ) {
        console.log ("number2 меньше") 
    } else if(number1 < number2) {
        console.log ("number1 меньше") 
    } else {
        console.log("равны")
    }
 }
 const number1 = prompt ("число1?")
const number2 = prompt ("Чисо2?")
two (number1, number2)


//2 
function argument(num) {
    console.log(num.length)
}
const num = "test"
argument(num)