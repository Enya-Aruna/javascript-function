function getSumOfAnArray(number){
    let sum = 0 ;
    
   for(let i = 0 ; i < number.length ; i++){
  const index = i;
  const element = number[index];
   sum = sum + element ;
   console.log( index , element , sum)
   }
   return sum ;
}

function getOddNumberOfAnArray(number){
   const oddNumbers=[];
for(let i = 0 ; i<number.length ; i++){
   const index = i ;
    const element = number[index];
   
     if( element % 2 ===1){
        //console.log(element);
         oddNumbers.push(element);
     }
    
}
return oddNumbers;

}
const myNumber = [70 , 21 , 40 , 41 , 52 ,91, 62 , 32 , 67];
const oddNumbers = getOddNumberOfAnArray(myNumber);
console.log(oddNumbers)

const oddNumberSum =  getSumOfAnArray(oddNumbers);
console.log(oddNumberSum)