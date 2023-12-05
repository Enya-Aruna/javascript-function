function multipicationOfNumber(number){
    let result = 1 ;
    for( i = 1 ; i<= number ; i++){
        result = result*i ;
    }
    return result ;
}

const multiplicationNumber = multipicationOfNumber(3);

console.log(multiplicationNumber)