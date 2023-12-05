function evenOdd(number){

    const reminder = number % 2 ;
  if(reminder === 0){
   return true ;
  }
  else{
    return false ;
  };
};

console.log(evenOdd(201));
console.log(evenOdd(1026));
