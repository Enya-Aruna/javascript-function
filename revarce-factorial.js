function revarceFunction(number){
    let result = 1 ;
    for(let i=number ;i>=1 ; i--){
        result= result*i ;
        //console.log(result)
    }
    return result ;
}
const Answer = revarceFunction(9)
//console.log("factorial of the Answer", Answer)

// while loop use kore factorial function

function whileFactorial(number){
    let result = 1 ;
    let i = 1 ;
    while(i<=number){
        result = result*i ;
        i++;
    }
    return result ;
}
const factorialNumber = whileFactorial(9)
console.log(factorialNumber)
