function revarceFactorial(number){
    let num = number ;
    let result = 1 ;
    while(num >= 1){
        result = result *num;
     num-- ;
    }
    return result ;
}
const revarceNumberOfFactorial = revarceFactorial(6);
console.log(revarceNumberOfFactorial);