function factorialNumber(number){
let answer = 1 ;
for(i = 1 ; i<=number ; i++){
    answer = answer*i ;
    
}
return answer;
}
const factorial = factorialNumber(3);
console.log(factorial)